// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const SALES_CATEGORY_DATA = [
  { name: "Streams", value: 4500 },
  { name: "Downloads", value: 3200 },
  { name: "Physical Media", value: 2800 },
  { name: "Sync", value: 2100 },
  { name: "Tour", value: 1900 }, 
];

const COLORS = ["#08B2F5", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SalesByCategoryChart = () => {
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
              data={SALES_CATEGORY_DATA}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {SALES_CATEGORY_DATA.map((entry, index) => (
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

export default SalesByCategoryChart