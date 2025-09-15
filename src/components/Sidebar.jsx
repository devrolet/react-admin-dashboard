/* eslint-disable no-unused-vars */
import { 
  BarChart2, 
  DollarSign, 
  Menu, 
  Settings, 
  ShoppingBag, 
  ShoppingCart, 
  TrendingUp, 
  Users 
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// TODO: Adapt to fit eventual use case, maybe add model for Typescript uses
const SIDEBAR_ITEMS = [
  {
    name: "Overview", icon: BarChart2, color: "#0ad2ff", path: "/"
  },
  {
    name: "Products", icon: ShoppingBag, color: "#2962ff", path: "/products"
  },
  {
    name: "Users", icon: Users, color: "#9500ff", path: "/users"
  },
  {
    name: "Sales", icon: DollarSign, color: "#ff0059", path: "/sales"
  },
  {
    name: "Orders", icon: ShoppingCart, color: "#ff8c00", path: "/orders"
  },
  {
    name: "Analytics", icon: TrendingUp, color: "#b4e600", path: "/analytics"
  },
  {
    name: "Settings", icon: Settings, color: "#0fffdb", path: "/"
  }
]
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-16'}`} animate={{ width: isSidebarOpen ? 256:80 }}>
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        <nav>
          
        </nav>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Sidebar