import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-customDark">
      <div className="max-w-4xl mx-auto py-4 px-2 flex items-center justify-between">
        <div className="bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent font-semibold text-2xl">
          Portfolio
        </div>
        <ul className="hidden md:flex space-x-12 text-base text-white font-semibold hover:text-gray-300">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
