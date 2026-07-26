import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated, user, logout } = useAuth()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'mt-3 mx-4 lg:mx-12 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-200/40'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className={`font-extrabold text-base tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}>
            RecruitAI
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`transition-all duration-300 py-1 ${
              pathname === '/'
                ? 'text-violet-600 font-bold border-b-2 border-violet-600'
                : scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Home
          </Link>

          {isAuthenticated && (
            <Link
              to="/dashboard"
              className={`transition-all duration-300 py-1 ${
                pathname === '/dashboard'
                  ? 'text-violet-600 font-bold border-b-2 border-violet-600'
                  : scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right side – auth-aware */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              {/* User pill */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50/80 border border-violet-100 backdrop-blur-sm">
                <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-extrabold flex items-center justify-center uppercase">
                  {user?.[0] ?? 'U'}
                </span>
                <span className="text-xs font-bold text-slate-700 capitalize">{user}</span>
              </div>
              {/* Logout */}
              <button
                onClick={handleLogout}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                  scrolled
                    ? 'bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 border border-slate-200'
                    : 'bg-white/60 backdrop-blur-sm hover:bg-red-50 text-slate-700 hover:text-red-600 border border-white/80'
                }`}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={`px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                scrolled
                  ? 'bg-slate-900 hover:bg-violet-600 shadow-md shadow-slate-900/10 hover:shadow-lg'
                  : 'bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-500/20 hover:shadow-lg'
              }`}
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
