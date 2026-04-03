import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const colors = {
  primary: '#00d9ff',
  secondary: '#00ff88',
  text: '#e0e0e0',
}

const chartColors = [
  '#00d9ff', '#00ff88', '#ff006e', '#ff9500', '#00d4ff',
  '#ff006e', '#ffd700', '#00cc99', '#cc00ff', '#ff3366',
]

function CountryChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
        <XAxis type="number" stroke={colors.text} style={{ fontSize: '12px' }} />
        <YAxis
          dataKey="country"
          type="category"
          stroke={colors.text}
          style={{ fontSize: '11px' }}
          width={95}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(11, 13, 23, 0.95)',
            border: `1px solid ${colors.secondary}`,
            borderRadius: '8px',
            color: colors.text,
          }}
          labelStyle={{ color: colors.secondary, fontWeight: 'bold' }}
          cursor={{ fill: 'rgba(0, 217, 255, 0.1)' }}
        />
        <Legend wrapperStyle={{ color: colors.text }} />
        <Bar
          dataKey="count"
          name="Debris Objects"
          radius={[0, 8, 8, 0]}
          isAnimationActive={true}
          animationDuration={1000}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColors[index % chartColors.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CountryChart
