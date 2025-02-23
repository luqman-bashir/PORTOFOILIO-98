import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"; // Ensure correct spelling



export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-white">
        <NavBar /> 

        <div className="w-3/4 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />



          </Routes>
        </div>
      </div>
    </Router>
  );
}
