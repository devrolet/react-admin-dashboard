import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// TODO: Change name to month? SET TO MONTH: BE SURE NO ISSUES ARISE IN FUTURE
const SALES_DATA = [
  { month: "Jul", sales: 4500 },
  { month: "Aug", sales: 4000 },
  { month: "Sep", sales: 4800 },
  { month: "Oct", sales: 5400 },
  { month: "Nov", sales: 5200 },
  { month: "Dec", sales: 5700 },
  { month: "Jan", sales: 3900 },
  { month: "Feb", sales: 5800 },
  { month: "Mar", sales: 5900 },
  { month: "Apr", sales: 5500 },
  { month: "May", sales: 6400 },
  { month: "Jun", sales: 7300 }, 
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2
        className="text-lg font-medium mb-4 text-gray-100"
      >Sales Overview</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={SALES_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"month"} stroke="#9ca3af" />
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
              dataKey={"sales"}
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

export default SalesOverviewChart