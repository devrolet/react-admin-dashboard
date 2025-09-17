// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, ShoppingCart } from "lucide-react";

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard";

const ORDERS_STATS = {
  totalOrders: 1234, 
  pendingOrders: 53, 
  completedOrders: 1178, 
  totalRevenue: "$123,454"
}

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y:20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard 
            name="Total Orders"
            icon={ShoppingCart}
            value={ORDERS_STATS.totalOrders}
            color="#6366F1"
          />
          <StatCard 
            name="Pending Orders"
            icon={Clock}
            value={ORDERS_STATS.pendingOrders}
            color="#F59E0B"
          />
          <StatCard 
            name="Completed Orders"
            icon={CheckCircle}
            value={ORDERS_STATS.completedOrders}
            color="#10B981"
          />
          <StatCard 
            name="Total Revenue"
            icon={DollarSign}
            value={ORDERS_STATS.totalRevenue}
            color="#EF4444"
          />
        </motion.div>
      </main>
    </div>
  )
}

export default OrdersPage