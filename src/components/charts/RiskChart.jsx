import React from 'react'
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const colors = {
  accent: '#ff006e',
  primary: '#00d9ff',
  text: '#e0e0e0',
}

function RiskChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart
        data={data}
        margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
      >
        <PolarGrid stroke="rgba(0, 217, 255, 0.1)" />
        <PolarAngleAxis
          dataKey="orbit_category"
          stroke={colors.text}
          style={{ fontSize: '12px' }}
        />
        <PolarRadiusAxis
          stroke={colors.text}
          style={{ fontSize: '11px' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(11, 13, 23, 0.95)',
            border: `1px solid ${colors.accent}`,
            borderRadius: '8px',
            color: colors.text,
          }}
          labelStyle={{ color: colors.accent, fontWeight: 'bold' }}
          formatter={(value) => value.toFixed(2)}
        />
        <Legend wrapperStyle={{ color: colors.text, paddingTop: '1rem' }} />
        <Radar
          name="Average Risk Score"
          dataKey="risk_score"
          stroke={colors.accent}
          fill={colors.accent}
          fillOpacity={0.3}
          isAnimationActive={true}
          animationDuration={1000}
          dot={{ fill: colors.accent, r: 5 }}
          activeDot={{ r: 7, fill: colors.primary }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RiskChart
