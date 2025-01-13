import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";
import myPicture from "../assets/biruk.JPG"; // Import your image here

const Home = () => {
  const { darkMode } = useTheme();

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <div
      name="home"
      className={`min-h-screen w-full ${
        darkMode ? "bg-[#0a192f]" : "bg-gray-100"
      }`}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center md:flex-row md:justify-between min-h-screen">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center items-center md:items-start h-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h2
            className={`text-4xl sm:text-4xl font-bold text-center md:text-left ${
              darkMode ? "text-[#ccd6f6]" : "text-gray-800"
            }`}
            custom={0}
            variants={textVariants}
          >
            Hi there, my name is{" "}
            <span
              className={`${
                darkMode ? "text-cyan-500" : "text-blue-500"
              } font-extrabold`}
            >
              Biruk Ashagre
            </span>
          </motion.h2>
          <motion.h3
            className={`text-4xl sm:text-3xl font-bold text-center md:text-left ${
              darkMode ? "text-[#8892b0]" : "text-gray-600"
            }`}
            custom={1}
            variants={textVariants}
          >
            I'm a Software Engineer and Web Developer
          </motion.h3>
          <motion.p
            className={`text-lg sm:text-xl py-4 max-w-[700px] text-center md:text-left ${
              darkMode ? "text-[#8892b0]" : "text-gray-600"
            }`}
            custom={2}
            variants={textVariants}
          >
            I specialize in building beautiful, responsive web applications
            using modern frameworks like React. I'm passionate about
            continuously learning and creating impactful digital experiences.
          </motion.p>
          <motion.div className="flex" custom={3} variants={textVariants}>
            <div className="px-6">
              <button
                className={`group relative overflow-hidden border-2 px-6 py-3 my-2 flex items-center justify-center rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "text-white border-cyan-500 hover:bg-cyan-500 hover:text-black"
                    : "text-gray-800 border-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <span
                  className={`absolute inset-0 w-0 bg-gradient-to-r ${
                    darkMode
                      ? "from-cyan-400 to-cyan-600"
                      : "from-blue-400 to-blue-600"
                  } transition-all duration-300 ease-out group-hover:w-full`}
                ></span>
                <span className="relative z-10">
                  <a href="https://drive" target="_blank" rel="noreferrer">
                    Download CV
                  </a>
                </span>
              </button>
            </div>
            <div>
              <button
                className={`group relative overflow-hidden border-2 px-6 py-3 my-2 flex items-center justify-center rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "text-white border-cyan-500 hover:bg-cyan-500 hover:text-black"
                    : "text-gray-800 border-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <span
                  className={`absolute inset-0 w-0 bg-gradient-to-r ${
                    darkMode
                      ? "from-cyan-400 to-cyan-600"
                      : "from-blue-400 to-blue-600"
                  } transition-all duration-300 ease-out group-hover:w-full`}
                ></span>
                <span className="relative z-10">
                  <Link to="contact" smooth={true} duration={500}>
                    Contact Me
                  </Link>
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative flex items-center justify-center">
            <div
              className={`absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-r ${
                darkMode
                  ? "from-cyan-400 to-cyan-600"
                  : "from-blue-400 to-blue-600"
              } blur-lg`}
            ></div>
            <motion.div
              className={`relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full shadow-lg overflow-hidden border-4 ${
                darkMode ? "border-cyan-500" : "border-blue-500"
              } transition-transform duration-300 hover:scale-105`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img
                src={myPicture}
                alt="Biruk Ashagre"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
