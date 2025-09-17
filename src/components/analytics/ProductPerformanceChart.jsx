// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const PRODUCT_PERFORMANCE_DATA = [
  { name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
  { name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
  { name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
  { name: "Product D", sales: 2780, revenue: 3900, profit: 2000 },
  { name: "Product E", sales: 1890, revenue: 4800, profit: 2500 },
]

const ProductPerformanceChart = () => {
  return (
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-100 mb-4">User Activity Map</h2>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={PRODUCT_PERFORMANCE_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF"/>
                <YAxis stroke="#9CA3AF"/>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4B5563"
                  }}
                  itemStyle={{ color: "#E5E7EB"}}
                />
                <Legend />
                <Bar dataKey="sales" fill="#6366F1" />
                <Bar dataKey="revenue" fill="#8B5CF6" />
                <Bar dataKey="profit" fill="#EC4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
  )
}

export default ProductPerformanceChart