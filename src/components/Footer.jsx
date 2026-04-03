import React, { useState, useEffect } from 'react'

function Footer() {
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString())

  useEffect(() => {
    setLastUpdated(new Date().toLocaleString())
  }, [])

  return (
    <section style={{
      textAlign: 'center',
      marginTop: '4rem',
      padding: '2rem 0',
      borderTop: '1px solid rgba(0, 217, 255, 0.1)'
    }}>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        Last Updated: <strong>{lastUpdated}</strong> | 
        Data Source: Space Debris Database | 
        Powered by React & Recharts
      </p>
    </section>
  )
}

export default Footer
