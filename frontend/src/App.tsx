import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider, RequireAuth } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Login has its own full-page layout (no shared Navbar) */}
        <Route path="/login" element={<LoginPage />} />

        {/* All other pages share the Navbar */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <RequireAuth>
                      <DashboardPage />
                    </RequireAuth>
                  }
                />
              </Routes>
            </>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
