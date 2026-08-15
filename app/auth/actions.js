'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { createClient as createSupabaseAdminClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { checkRateLimit } from '@/utils/rateLimiter'

const getSenderEmail = () => {
  return process.env.RESEND_FROM_EMAIL || 'Corporate Hub <onboarding@resend.dev>'
}

export async function login(formData) {
  const email = formData.get('email')
  const rateCheck = checkRateLimit(email, 'login', 6, 15 * 60 * 1000)
  if (!rateCheck.allowed) {
    redirect(`/login?message=${encodeURIComponent(`Too many login attempts. Please try again in ${Math.ceil(rateCheck.resetInSeconds / 60)} minute(s).`)}`)
  }

  const supabase = await createClient()

  const data = {
    email,
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error('Login error:', error.message)
    redirect(`/login?message=${encodeURIComponent(error.message)}`)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData) {
  const email = formData.get('email')
  const rateCheck = checkRateLimit(email, 'signup', 4, 30 * 60 * 1000)
  if (!rateCheck.allowed) {
    redirect(`/signup?message=${encodeURIComponent(`Too many registration attempts. Please try again in ${Math.ceil(rateCheck.resetInSeconds / 60)} minute(s).`)}`)
  }

  const supabase = await createClient()

  const data = {
    email,
    password: formData.get('password'),
    options: {
      data: {
        full_name: formData.get('name'),
        phone_number: formData.get('phone_number'),
      }
    }
  }

  const { data: signUpData, error } = await supabase.auth.signUp(data)

  if (error) {
    console.error('Signup error:', error.message)
    redirect(`/signup?message=${encodeURIComponent(error.message)}`)
  }

  // Send Resend custom email whenever RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    try {
      let otpToken = ''
      let actionLink = ''

      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lspyslcegclflaxombjh.supabase.co'
        const adminClient = createSupabaseAdminClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY, {
          auth: { autoRefreshToken: false, persistSession: false }
        })

        const { data: otpData } = await adminClient.auth.admin.generateLink({
          type: 'signup',
          email,
        })
        otpToken = otpData?.properties?.email_otp || ''
        actionLink = otpData?.properties?.action_link || ''
      }

      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: getSenderEmail(),
        to: [email],
        subject: otpToken
          ? `${otpToken} is your Corporate Hub verification code`
          : 'Verify Your Account | Corporate Hub',
        html: getOtpEmailHtml(email, otpToken, actionLink),
      })
    } catch (err) {
      console.error('Resend signup email error:', err)
    }
  }

  redirect(`/verify-otp?email=${encodeURIComponent(email)}&type=signup`)
}

export async function verifyOtp(formData) {
  const email = formData.get('email')
  const token = formData.get('token')
  const type = formData.get('type') || 'signup'

  if (!email || !token || token.length < 6) {
    redirect(`/verify-otp?email=${encodeURIComponent(email)}&type=${type}&message=${encodeURIComponent('Please enter a valid verification code.')}`)
  }

  const supabase = await createClient()

  // Verify 6-digit OTP code with Supabase Auth
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: type === 'recovery' ? 'recovery' : 'signup',
  })

  if (error) {
    console.error('OTP verification error:', error.message)
    redirect(`/verify-otp?email=${encodeURIComponent(email)}&type=${type}&message=${encodeURIComponent(error.message)}`)
  }

  if (type === 'recovery') {
    redirect('/reset-password')
  }

  revalidatePath('/', 'layout')
  redirect('/?message=' + encodeURIComponent('Account verified successfully! Welcome to Corporate Hub.'))
}

export async function resendOtp(formData) {
  const email = formData.get('email')
  const type = formData.get('type') || 'signup'

  if (!email) {
    redirect(`/verify-otp?message=${encodeURIComponent('Email address is missing.')}`)
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.resend({
    type: type === 'recovery' ? 'recovery' : 'signup',
    email,
  })

  if (error) {
    console.error('Resend OTP error:', error.message)
    redirect(`/verify-otp?email=${encodeURIComponent(email)}&type=${type}&message=${encodeURIComponent(error.message)}`)
  }

  // Send Resend custom OTP email
  if (process.env.RESEND_API_KEY) {
    try {
      let otpToken = ''
      let actionLink = ''

      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lspyslcegclflaxombjh.supabase.co'
        const adminClient = createSupabaseAdminClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY, {
          auth: { autoRefreshToken: false, persistSession: false }
        })

        const { data: otpData } = await adminClient.auth.admin.generateLink({
          type: type === 'recovery' ? 'recovery' : 'signup',
          email,
        })

        otpToken = otpData?.properties?.email_otp || ''
        actionLink = otpData?.properties?.action_link || ''
      }

      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: getSenderEmail(),
        to: [email],
        subject: otpToken
          ? `${otpToken} is your Corporate Hub verification code`
          : 'Your Corporate Hub Verification Code',
        html: getOtpEmailHtml(email, otpToken, actionLink),
      })
    } catch (err) {
      console.error('Resend OTP email error:', err)
    }
  }

  redirect(`/verify-otp?email=${encodeURIComponent(email)}&type=${type}&success=${encodeURIComponent('A new verification code has been sent to your email.')}`)
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function requestPasswordReset(formData) {
  const email = formData.get('email')
  if (!email) {
    redirect(`/forgot-password?message=${encodeURIComponent('Please enter your email address.')}`)
  }

  const rateCheck = checkRateLimit(email, 'reset_password', 3, 15 * 60 * 1000)
  if (!rateCheck.allowed) {
    redirect(`/forgot-password?message=${encodeURIComponent(`Too many password reset attempts. Please try again in ${Math.ceil(rateCheck.resetInSeconds / 60)} minute(s).`)}`)
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  let otpToken = ''
  let actionLink = `${siteUrl}/reset-password`

  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lspyslcegclflaxombjh.supabase.co'
      const adminClient = createSupabaseAdminClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY, {
        auth: { autoRefreshToken: false, persistSession: false }
      })

      const { data: linkData, error: linkError } = await adminClient.auth.admin.generateLink({
        type: 'recovery',
        email,
        options: {
          redirectTo: `${siteUrl}/reset-password`,
        },
      })

      if (linkError) {
        console.error('Silent OTP recovery error:', linkError.message)
        redirect(`/forgot-password?message=${encodeURIComponent(linkError.message)}`)
      }

      otpToken = linkData?.properties?.email_otp || ''
      actionLink = linkData?.properties?.action_link || `${siteUrl}/reset-password`
    } catch (adminErr) {
      console.error('Admin OTP generation failed:', adminErr)
    }
  } else {
    const supabase = await createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${siteUrl}/reset-password`,
    })

    if (error) {
      console.error('Password reset request error:', error.message)
      redirect(`/forgot-password?message=${encodeURIComponent(error.message)}`)
    }
  }

  // Send human-written, beautifully formatted email via Resend API
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: getSenderEmail(),
        to: [email],
        subject: otpToken
          ? `${otpToken} is your Corporate Hub password reset code`
          : 'Reset Your Corporate Hub Password',
        html: getOtpEmailHtml(email, otpToken, actionLink),
      })
    } catch (resendError) {
      console.error('Failed to send Resend email:', resendError)
    }
  }

  redirect(`/verify-otp?email=${encodeURIComponent(email)}&type=recovery`)
}

export async function updatePassword(formData) {
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  if (!password || password.length < 6) {
    redirect(`/reset-password?message=${encodeURIComponent('New password must be at least 6 characters long.')}`)
  }
  if (password !== confirmPassword) {
    redirect(`/reset-password?message=${encodeURIComponent('Passwords do not match.')}`)
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    console.error('Update password error:', error.message)
    redirect(`/reset-password?message=${encodeURIComponent(error.message)}`)
  }

  redirect(`/login?message=${encodeURIComponent('Password updated successfully! Please log in with your new password.')}`)
}

function getOtpEmailHtml(email, otpToken, actionLink) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7fb; margin: 0; padding: 40px 20px; color: #1e293b; }
        .email-container { max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 40px 32px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0; }
        .header-bar { text-align: center; border-bottom: 2px solid #193563; padding-bottom: 20px; margin-bottom: 28px; }
        .brand-title { font-size: 24px; font-weight: 900; color: #193563; margin: 0; letter-spacing: -0.5px; text-transform: uppercase; font-family: Arial, sans-serif; }
        h1 { font-size: 20px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 16px; text-align: center; }
        p { font-size: 15px; line-height: 1.65; color: #475569; margin: 0 0 18px 0; }
        .otp-display-box { background: #f8fafc; border: 2px dashed #193563; border-radius: 12px; padding: 20px; text-align: center; margin: 28px 0; }
        .otp-code { font-family: Arial, sans-serif; font-size: 34px; font-weight: 900; color: #ff6000; letter-spacing: 10px; margin: 0; }
        .otp-subtext { font-size: 13px; color: #64748b; margin-top: 8px; font-weight: 500; }
        .btn-wrap { text-align: center; margin: 24px 0; }
        .action-btn { background-color: #ff6000; color: #ffffff !important; padding: 13px 28px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-block; font-size: 15px; }
        .footer { font-size: 13px; color: #94a3b8; margin-top: 36px; padding-top: 24px; border-top: 1px solid #f1f5f9; text-align: center; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header-bar">
          <h2 class="brand-title">Corporate Hub</h2>
        </div>
        
        <h1>Verification Code</h1>
        <p>Hi there,</p>
        <p>Use the 6-digit verification code below for your Corporate Hub account (<strong>${email}</strong>):</p>
        
        ${otpToken ? `
        <div class="otp-display-box">
          <div class="otp-code">${otpToken}</div>
          <div class="otp-subtext">Valid for 10 minutes • Do not share this code with anyone</div>
        </div>
        ` : ''}

        <p>If you didn't request this verification code, you can safely ignore this email — your account remains completely secure.</p>

        <div class="footer">
          <p><strong>The Corporate Hub Team</strong><br>
          D-504, Titanium City Center, 100 Feet Rd, Satellite, Ahmedabad, Gujarat 380015<br>
          Support: +91 88669 01544 | <a href="mailto:Corporatehubcs@gmail.com" style="color: #64748b;">Corporatehubcs@gmail.com</a></p>
        </div>
      </div>
    </body>
    </html>
  `
}
