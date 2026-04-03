import React from 'react'
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const colors = {
  secondary: '#00ff88',
  text: '#e0e0e0',
}

const chartColors = [
  '#00d9ff', '#00ff88', '#ff006e', '#ff9500', '#00d4ff',
  '#ff006e', '#ffd700', '#00cc99', '#cc00ff', '#ff3366',
]

function OrbitChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(11, 13, 23, 0.95)',
            border: `1px solid ${colors.secondary}`,
            borderRadius: '8px',
            color: colors.text,
          }}
          labelStyle={{ color: colors.secondary, fontWeight: 'bold' }}
          formatter={(value, name, props) => {
            const total = data.reduce((sum, item) => sum + item.count, 0)
            const percentage = ((value / total) * 100).toFixed(1)
            return [`${value} (${percentage}%)`, 'Count']
          }}
        />
        <Legend wrapperStyle={{ color: colors.text, paddingTop: '1rem' }} />
        <Pie
          data={data}
          dataKey="count"
          nameKey="orbit"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={60}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
          isAnimationActive={true}
          animationDuration={1000}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColors[index % chartColors.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default OrbitChart
