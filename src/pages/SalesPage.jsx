// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrends from "../components/sales/DailySalesTrends";

const SALES_DATA = {
  totalRevenue: "$1,234,567",
  averageOrderTotal: "$78.90",
  conversionRate: "3.78%",
  salesGrowth: "12.3%"
}

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* SALES STATS */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y:20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* TODO: Turn this into a data-mapped component */}
          <StatCard name="Total Revenue" icon={DollarSign} value={SALES_DATA.totalRevenue} color="#6366F1" />
          <StatCard name="Avg. Order Value" icon={ShoppingCart} value={SALES_DATA.averageOrderTotal} color="#10B981" />
          <StatCard name="Conversion Rate" icon={TrendingUp} value={SALES_DATA.conversionRate} color="#F59e0B" />
          <StatCard name="Sales Growth" icon={CreditCard} value={SALES_DATA.salesGrowth} color="#ef4444" />
        </motion.div>

        <SalesOverviewChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart />
          <DailySalesTrends />
        </div>
      </main>
    </div>
  )
}

export default SalesPage