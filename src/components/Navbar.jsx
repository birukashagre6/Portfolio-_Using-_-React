import React, { useState } from "react";
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
      className={`w-full h-[80px] flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${
        darkMode
          ? "bg-[#0a192f] text-gray-300"
          : "bg-gradient-to-r from-blue-400 to-blue-600 text-gray-800"
      } shadow-md relative`}
    >
      {/* Logo */}
      <div className="absolute left-4 md:left-6 z-10">
        <h1 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
          BIRUK A.
        </h1>
      </div>

      {/* Menu for larger screens */}
      <ul className="hidden md:flex gap-x-8 items-center text-lg font-semibold transition-transform duration-500 ml-[120px]">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Theme Toggle and Hamburger Menu for small screens */}
      <div className="md:hidden flex items-center space-x-4 z-30 absolute right-6">
        {/* Theme Toggle */}
        {darkMode ? (
          <FiSun
            size={20}
            onClick={toggleTheme}
            className="hover:text-yellow-400 transition-all duration-300"
          />
        ) : (
          <FiMoon
            size={20}
            onClick={toggleTheme}
            className="hover:text-yellow-400 transition-all duration-300"
          />
        )}

        {/* Hamburger Menu */}
        <div onClick={handleClick}>
          {!nav ? (
            <FaBars size={30} className="text-white" />
          ) : (
            <FaTimes size={30} className="text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          !nav
            ? "hidden"
            : `${
                darkMode ? "bg-[#0a192f]" : "bg-gray-100 text-gray-800"
              } absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-20 transition-all duration-300`
        }`}
      >
        <li className="py-6 text-4xl font-semibold">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl font-semibold">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl font-semibold">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400"
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl font-semibold">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400"
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl font-semibold">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
