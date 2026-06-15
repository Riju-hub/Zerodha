import { useState } from 'react'
import { Routes, Route , useLocation} from "react-router-dom";
import './App.css'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import Signup from './landing_page/signUp/Signup'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import ProductPage from './landing_page/product/ProductPage'
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

function App() {
  const location = useLocation();
  // Define the paths where you DON'T want the Navbar and Footer to show
  const hideNavbarFooter = location.pathname === "/kite" || location.pathname === "/login";

  return (
    <>
    {/* Only show Navbar if we are NOT on the kite page */}
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Only show Footer if we are NOT on the kite page */}
      {!hideNavbarFooter && <Footer />}
    </>
  )
}

export default App
