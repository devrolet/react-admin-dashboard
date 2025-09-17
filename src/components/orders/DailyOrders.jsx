import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const DAILY_ORDERS_DATA = [
  { date: "09/01", orders: 48 },
  { date: "09/02", orders: 53 },
  { date: "09/03", orders: 49 },
  { date: "09/04", orders: 42 },
  { date: "09/05", orders: 45 },
  { date: "09/06", orders: 55 },
  { date: "09/07", orders: 62 },
]

const DailyOrders = () => {
  return (
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2
            className="text-lg font-medium mb-4 text-gray-100"
          >Daily Orders</h2>
    
          <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={DAILY_ORDERS_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey={"date"} stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4B5563"
                  }}
                  itemStyle={{ color: "#E5E7EB"}}
                />
                <Line 
                  type="monotone"
                  dataKey={"orders"}
                  stroke="#6366F1"
                  strokeWidth={3}
                  dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, strokeWidth: 2}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
  )
}

export default DailyOrders