import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const handleClick = () => setNav(!nav);

  return (
    <div
      className={`w-full h-[80px] flex justify-between items-center px-4 ${
        darkMode ? "bg-[#0a192f] text-gray-300" : "bg-gray-100 text-gray-800"
      } relative`}
    >
      <div className="absolute left-4">
        <h1>BIRUK A.</h1>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-x-6">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Theme Toggle */}
      <div className="absolute right-20 md:right-4 cursor-pointer">
        {darkMode ? (
          <FiSun size={20} onClick={toggleTheme} />
        ) : (
          <FiMoon size={20} onClick={toggleTheme} />
        )}
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 absolute right-4">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          !nav
            ? "hidden"
            : `${
                darkMode ? "bg-[#0a192f]" : "bg-gray-100 text-gray-800"
              } absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center`
        }`}
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
