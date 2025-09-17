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
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

// TODO: Adapt to fit eventual use case, maybe add model for Typescript uses
const SIDEBAR_ITEMS = [
  { name: "OVERVIEW", icon: BarChart2, color: "#08b2f5", href: "/" },
  { name: "PRODUCTS", icon: ShoppingBag, color: "#08b2f5", href: "/products" },
  { name: "USERS", icon: Users, color: "#08b2f5", href: "/users" },
  { name: "SALES", icon: DollarSign, color: "#08b2f5", href: "/sales" },
  { name: "ORDERS", icon: ShoppingCart, color: "#08b2f5", href: "/orders" },
  { name: "ANALYTICS", icon: TrendingUp, color: "#08b2f5", href: "/analytics" },
  { name: "SETTINGS", icon: Settings, color: "#08b2f5", href: "/settings" }
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // TODO: CREATE L/D MODE: STEP THREE: SIDEBAR BG COLOR/TEXT CHANGE bg-gray-700 and 800 to bg-gray-100 and 200 on hover and borders
  return (
    <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`} animate={{ width: isSidebarOpen ? 256:80 }}>
      
      <div className="h-full bg-gray-700 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        {/* TODO: ADD A LOGO */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors mb-2">
                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span 
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.5 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
    
      </div>
    </motion.div>
  )
}

export default Sidebar