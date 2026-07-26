import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  isAuthenticated: boolean
  user: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

// Simple demo credentials – no real backend needed
const DEMO_USERS: Record<string, string> = {
  'admin@recruitai.com': 'recruit123',
  'hr@company.com': 'hiring2026',
  'demo@demo.com': 'demo',
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('recruitai_user')
    if (stored) {
      setUser(stored)
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate slight network delay
    await new Promise((r) => setTimeout(r, 800))
    const valid = DEMO_USERS[email.toLowerCase()] === password
    if (valid) {
      const name = email.split('@')[0]
      localStorage.setItem('recruitai_user', name)
      setUser(name)
      setIsAuthenticated(true)
    }
    return valid
  }

  const logout = () => {
    localStorage.removeItem('recruitai_user')
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

// Re-export a component that redirects if not authed
export function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) navigate('/login', { replace: true })
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) return null
  return <>{children}</>
}
