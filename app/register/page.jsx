import Link from 'next/link'
import { signup } from '../auth/actions'
import '../login/login.css' // Reusing the same auth CSS
import { FiMail, FiLock, FiUser, FiPhone, FiArrowRight } from 'react-icons/fi'

export default async function RegisterPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Join The Corporate Hub today</p>
        </div>

        <form className="auth-form" action={signup}>
          {resolvedSearchParams?.message && (
            <div className="auth-error-message">
              {resolvedSearchParams.message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-wrapper">
              <FiUser className="input-icon" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <FiMail className="input-icon" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <div className="input-wrapper">
              <FiPhone className="input-icon" />
              <input
                id="phone_number"
                name="phone_number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FiLock className="input-icon" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                minLength="6"
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            Create Account <FiArrowRight />
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? <Link href="/login">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
