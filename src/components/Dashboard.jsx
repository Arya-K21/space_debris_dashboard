import React, { useState, useEffect } from 'react'
import YearlyChart from './charts/YearlyChart'
import CountryChart from './charts/CountryChart'
import OrbitChart from './charts/OrbitChart'
import RiskChart from './charts/RiskChart'

// Pseudo/Mock Data
const PSEUDO_DATA = {
  yearly: [
    { launch_year: 2010, count: 45 },
    { launch_year: 2011, count: 52 },
    { launch_year: 2012, count: 63 },
    { launch_year: 2013, count: 71 },
    { launch_year: 2014, count: 85 },
    { launch_year: 2015, count: 92 },
    { launch_year: 2016, count: 108 },
    { launch_year: 2017, count: 124 },
    { launch_year: 2018, count: 145 },
    { launch_year: 2019, count: 167 },
    { launch_year: 2020, count: 189 },
    { launch_year: 2021, count: 212 },
    { launch_year: 2022, count: 238 },
    { launch_year: 2023, count: 256 },
  ],
  country: [
    { country: 'USA', count: 524 },
    { country: 'CHINA', count: 387 },
    { country: 'RUSSIA', count: 312 },
    { country: 'ESA', count: 156 },
    { country: 'INDIA', count: 89 },
    { country: 'JAPAN', count: 67 },
    { country: 'MULTINATIONAL', count: 142 },
    { country: 'FRANCE', count: 45 },
    { country: 'GERMANY', count: 38 },
    { country: 'UK', count: 31 },
  ],
  orbit: [
    { orbit: 'LEO', count: 1892 },
    { orbit: 'MEO', count: 456 },
    { orbit: 'GEO', count: 389 },
    { orbit: 'HEO', count: 78 },
  ],
  risk: [
    { orbit_category: 'LEO', risk_score: 8.5 },
    { orbit_category: 'MEO', risk_score: 6.2 },
    { orbit_category: 'GEO', risk_score: 4.1 },
    { orbit_category: 'HEO', risk_score: 3.8 },
  ],
}

function Dashboard() {
  const [yearlyData, setYearlyData] = useState([])
  const [countryData, setCountryData] = useState([])
  const [orbitData, setOrbitData] = useState([])
  const [riskData, setRiskData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadDashboardData()
  }, [])

  function loadDashboardData() {
    setLoading(true)
    setError(null)

    try {
      console.log('🚀 Loading dashboard with PSEUDO DATA (API not available)...')

      // Simulate slight delay like a real API call
      setTimeout(() => {
        setYearlyData(PSEUDO_DATA.yearly)
        setCountryData(PSEUDO_DATA.country)
        setOrbitData(PSEUDO_DATA.orbit)
        setRiskData(PSEUDO_DATA.risk)

        console.log('✅ Pseudo data loaded successfully')
        setLoading(false)
      }, 300)
    } catch (err) {
      console.error('❌ Error loading dashboard:', err)
      setError('Failed to load dashboard data')
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading Charts...</div>
      </div>
    )
  }

  return (
    <section>
      <div className="dashboard-grid">
        {/* Yearly Trend Chart */}
        {yearlyData.length > 0 && (
          <div className="chart-container">
            <h3>Debris Objects Over Time</h3>
            <div className="chart-wrapper">
              <YearlyChart data={yearlyData} />
            </div>
          </div>
        )}

        {/* Country Distribution Chart */}
        {countryData.length > 0 && (
          <div className="chart-container">
            <h3>Debris by Country (Top 10)</h3>
            <div className="chart-wrapper">
              <CountryChart data={countryData} />
            </div>
          </div>
        )}

        {/* Orbit Distribution Chart */}
        {orbitData.length > 0 && (
          <div className="chart-container">
            <h3>Distribution by Orbit Type</h3>
            <div className="chart-wrapper">
              <OrbitChart data={orbitData} />
            </div>
          </div>
        )}

        {/* Risk Assessment Chart */}
        {riskData.length > 0 && (
          <div className="chart-container">
            <h3>Risk Score by Orbit</h3>
            <div className="chart-wrapper">
              <RiskChart data={riskData} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Dashboard
