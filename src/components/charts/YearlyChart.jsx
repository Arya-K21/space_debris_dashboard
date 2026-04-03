import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const colors = {
  primary: '#00d9ff',
  secondary: '#00ff88',
  accent: '#ff006e',
  text: '#e0e0e0',
}

function YearlyChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorYearly" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.primary} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colors.primary} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
        <XAxis
          dataKey="launch_year"
          stroke={colors.text}
          style={{ fontSize: '12px' }}
        />
        <YAxis
          stroke={colors.text}
          style={{ fontSize: '12px' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(11, 13, 23, 0.95)',
            border: `1px solid ${colors.primary}`,
            borderRadius: '8px',
            color: colors.text,
          }}
          labelStyle={{ color: colors.primary, fontWeight: 'bold' }}
          cursor={{ stroke: colors.primary, strokeWidth: 2 }}
        />
        <Legend
          wrapperStyle={{ color: colors.text, paddingTop: '1rem' }}
          iconType="line"
        />
        <Line
          type="monotone"
          dataKey="count"
          name="Objects Launched"
          stroke={colors.primary}
          strokeWidth={3}
          dot={{ fill: colors.primary, r: 5 }}
          activeDot={{ r: 7, fill: colors.secondary }}
          fillOpacity={1}
          fill="url(#colorYearly)"
          isAnimationActive={true}
          animationDuration={1000}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default YearlyChart
