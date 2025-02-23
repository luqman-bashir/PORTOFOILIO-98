import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiBriefcase, FiUser, FiMail, FiMenu, FiX } from "react-icons/fi";

const RainDots = () => {
  return (
    <div className="rain-container absolute inset-0 z-0">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="rain-dot"></div>
      ))}
    </div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-black min-h-screen lg:w-1/4 w-full lg:flex flex-col items-center justify-center shadow-lg relative p-5 lg:p-0">
      {/* Rain Dots Animation */}
      <RainDots />

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between items-center w-full text-white">
        <h1 className="text-3xl font-signature">Luqman.</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Logo */}
      <div className="text-center mb-10 hidden lg:block">
        <h1 className="text-5xl font-signature text-white">Luqman.</h1>
      </div>

      {/* Navigation Links */}
      <nav className={`lg:block ${isOpen ? "block" : "hidden"} w-full lg:w-auto mt-5 lg:mt-0`}>
        <ul className="space-y-6 text-gray-400 text-lg text-center lg:text-left">
          <li className="flex items-center justify-center lg:justify-start space-x-3 hover:text-white transition duration-300">
            <FiHome className="text-xl" />
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="flex items-center justify-center lg:justify-start space-x-3 hover:text-white transition duration-300">
            <FiBriefcase className="text-xl" />
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          </li>
          <li className="flex items-center justify-center lg:justify-start space-x-3 hover:text-white transition duration-300">
            <FiUser className="text-xl" />
            <Link to="/about" onClick={() => setIsOpen(false)}>About me</Link>
          </li>
          <li className="flex items-center justify-center lg:justify-start space-x-3 hover:text-white transition duration-300">
            <FiMail className="text-xl" />
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;