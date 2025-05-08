"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "@/components/ui/chart"

interface FlightTimeChartProps {
  data: Array<{
    payload: number
    flightTime: number
  }>
}

export function FlightTimeChart({ data }: FlightTimeChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis
          dataKey="payload"
          label={{
            value: "PAYLOAD (kg)",
            position: "insideBottomRight",
            offset: -10,
            fill: "#9CA3AF",
          }}
          stroke="#9CA3AF"
          tick={{ fill: "#9CA3AF" }}
        />
        <YAxis
          label={{
            value: "FLIGHT TIME (min)",
            angle: -90,
            position: "insideLeft",
            fill: "#9CA3AF",
          }}
          stroke="#9CA3AF"
          tick={{ fill: "#9CA3AF" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1F2937",
            border: "1px solid #374151",
            color: "#F3F4F6",
          }}
          formatter={(value) => [`${Number(value).toFixed(1)} min`, "FLIGHT TIME"]}
        />
        <Legend wrapperStyle={{ color: "#9CA3AF" }} />
        <Line
          type="monotone"
          dataKey="flightTime"
          name="FLIGHT TIME"
          stroke="#60A5FA"
          strokeWidth={2}
          dot={{ r: 5, fill: "#60A5FA" }}
          activeDot={{ r: 8, fill: "#60A5FA" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
