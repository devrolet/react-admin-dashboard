// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight } from "lucide-react";

const OVERVIEW_DATA = [
  { name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
  { name: "Users", value: "45,987", change: 8.3, icon: Users },
  { name: "Orders", value: "7,982", change: -3.2, icon: ShoppingBag },
  { name: "Page Views", value: "1,234,567", change: 17.5, icon: Eye },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {OVERVIEW_DATA.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-400">{item.name}</h3>
              <p className="mt-1 text-xl font-semibold text-gray-100">{item.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default OverviewCards