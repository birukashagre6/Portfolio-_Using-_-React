import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div
      name="about"
      className={`w-full h-screen flex flex-col justify-center items-center ${
        darkMode ? "bg-[#0a192f] text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-[1200px] w-full p-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 inline-block relative">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500"></span>
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right text-3xl font-semibold">
            <p>
              Hi, I'm <span className="text-cyan-500">Biruk</span>. Welcome to
              my portfolio!
            </p>
          </div>
          <div className="text-lg leading-relaxed text-justify md:text-left">
            <p>
              I am a 4th-year Software Engineering student at Debre Berhan
              University, passionate about technology and web development. I
              excel in team collaboration, problem-solving under pressure, and
              communication. My aim is to contribute to impactful projects while
              constantly learning and growing in the tech world.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center">
          <motion.button
            className={`group relative overflow-hidden border-2 px-6 py-3 my-2 flex items-center justify-center rounded-lg transition-all duration-300 ${
              darkMode
                ? "text-white border-cyan-500 hover:bg-cyan-500 hover:text-black"
                : "text-gray-800 border-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className={`absolute inset-0 w-0 bg-gradient-to-r ${
                darkMode
                  ? "from-cyan-400 to-cyan-600"
                  : "from-blue-400 to-blue-600"
              } transition-all duration-300 ease-out group-hover:w-full`}
            ></span>
            <span className="relative z-10">
              <Link to="work" smooth={true} duration={500}>
                View My Work
              </Link>
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
