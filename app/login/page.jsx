import Link from 'next/link'
import { login } from '../auth/actions'
import './login.css'
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi'

export default async function LoginPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to your Corporate Hub account</p>
        </div>

        <form className="auth-form" action={login}>
          {resolvedSearchParams?.message && (
            <div className="auth-error-message">
              {resolvedSearchParams.message}
            </div>
          )}

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
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FiLock className="input-icon" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            Sign In <FiArrowRight />
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account? <Link href="/register">Create one here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
