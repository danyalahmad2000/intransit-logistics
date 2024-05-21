import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Services from '../components/services/Services';
import About from '../components/about/About';
import Pricing from '../components/pricing/Pricing';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/services" element={<Home />} />
      <Route path="/pricing" element={<Home />} />
    </Routes>
  )
}

export default Routers