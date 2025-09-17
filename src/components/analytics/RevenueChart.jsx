// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CartesianGrid, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, Legend } from "recharts";
import { useState } from "react";

const REVENUE_DATA = [
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 3000, target: 3200 },
  { month: "Mar", revenue: 5000, target: 4500 },
  { month: "Apr", revenue: 4500, target: 4200 },
  { month: "May", revenue: 6000, target: 5500 },
  { month: "Jun", revenue: 5500, target: 5800 },
  { month: "Jul", revenue: 7000, target: 6500 },
];

const RevenueChart = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Month")
    return (
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Revenue Chart</h2>
  
          <select 
            className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
        </div>
  
        <div className="w-full h-80">
          <ResponsiveContainer>
            <AreaChart
              data={REVENUE_DATA}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563"
                }}
                itemStyle={{ color: "#E5E7EB"}}
              />
              <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
              <Area type="monotone" dataKey="target" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
  )
}

export default RevenueChart