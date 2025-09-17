// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const CHANNEL_DATA = [
  { name: "Organic Search", value: 4000 },
  { name: "Paid Search", value: 3000 },
  { name: "Direct", value: 2000 },
  { name: "Social Media", value: 2800 },
  { name: "Referral", value: 1890 },
  { name: "Email", value: 2390 }, 
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const ChannelPerformance = () => {
  return (
     <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales By Category</h2>
      <div style={{ width:"100%", height: 300}}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={CHANNEL_DATA}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {CHANNEL_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563"
              }}
              itemStyle={{ color: "#E5E7EB"}}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default ChannelPerformance