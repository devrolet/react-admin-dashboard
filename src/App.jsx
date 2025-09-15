import { Route, Routes } from "react-router-dom";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";

import Sidebar from "./components/Sidebar";

// TODO: CREATE L/D MODE: STEP ONE: OVERALL APP COLOR/TEXT from 900 to 100
// TODO: CREATE L/D MODE: STEP TWO: OVERALL BG COLOR/GRADIENT from 900/800 to 100/200

function App() {

  return (
    
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
