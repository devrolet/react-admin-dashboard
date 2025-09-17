// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Search, Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const ORDER_DATA = [
  { id: "ORD001", customer: "Michael Jordan", total: 234.5, status: "Delivered", date: "09-01-2025" },
  { id: "ORD002", customer: "Arnold Palmer", total: 398.2, status: "Processing", date: "09-02-2025" },
  { id: "ORD003", customer: "Fanny Lou Hamer", total: 1209.3, status: "Shipped", date: "09-03-2025" },
  { id: "ORD004", customer: "Floyd Mayweather", total: 531.5, status: "Pending", date: "09-04-2025" },
  { id: "ORD005", customer: "Tupac Shakur", total: 983.3, status: "Delivered", date: "09-05-2025" },
  { id: "ORD006", customer: "Shawn Carter", total: 723.9, status: "Processing", date: "09-06-2025" },
  { id: "ORD007", customer: "Michelle Rodriguez", total: 438.5, status: "Shipped", date: "09-07-2025" },
  { id: "ORD008", customer: "Earl Monroe", total: 120.3, status: "Delivered", date: "09-08-2025" },
]


const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(ORDER_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ORDER_DATA.filter(
      (order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term) || order.status.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
        <div className="relative">
          <input 
            type="text"
            placeholder="Search Orders"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch} 
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr 
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === "Delivered"
                    ? "bg-sky-100 text-green-800"
                    : order.status === "Processing"
                    ? "bg-yellow-100 text-yellow-800"
                    : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                  }`}>
                    {order.status}
                  </span>  
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.date}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 mr-2">
                  <button className="text-sky-400 hover:text-sky-300 mr-2">
                    <Edit size={18} />
                  </button>
                   <button className="text-red-400 hover:text-red-300 mr-2">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default OrdersTable