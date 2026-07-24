import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="font-extrabold text-slate-900 text-base tracking-tight">RecruitAI</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors py-1 ${
              pathname === '/' ? 'text-violet-600 font-bold border-b-2 border-violet-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`transition-colors py-1 ${
              pathname === '/dashboard' ? 'text-violet-600 font-bold border-b-2 border-violet-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Dashboard
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/dashboard"
          className="px-5 py-2 rounded-full bg-slate-900 hover:bg-violet-600 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-95"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}
