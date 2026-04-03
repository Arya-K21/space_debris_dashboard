import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import StarField from './components/StarField'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate initial load completion
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <StarField />
      <Header />
      <main>
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">Loading Dashboard...</div>
          </div>
        ) : (
          <>
            <Dashboard />
            <Footer />
          </>
        )}
      </main>
      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}
    </div>
  )
}

export default App
