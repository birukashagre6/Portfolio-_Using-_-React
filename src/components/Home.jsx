import React from "react";
import { Link } from "react-scroll";
import { useTheme } from "../Context/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      name="home"
      className={`w-full h-screen ${darkMode ? "bg-[#0a192f]" : "bg-gray-100"}`}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h2
          className={`text-4xl sm:text-4xl font-bold ${
            darkMode ? "text-[#ccd6f6]" : "text-gray-800"
          }`}
        >
          Hi there, my name is{" "}
          <span className={`${darkMode ? "text-cyan-500" : "text-blue-500"}`}>
            Biruk Ashagre
          </span>
        </h2>
        <h3
          className={`text-4xl sm:text-3xl font-bold ${
            darkMode ? "text-[#8892b0]" : "text-gray-600"
          }`}
        >
          I'm a Web Developer
        </h3>
        <p
          className={`text-4xl sm:text-2xl py-4 max-w-[700px] ${
            darkMode ? "text-[#8892b0]" : "text-gray-600"
          }`}
        >
          I'm a passionate Software Engineer and Front-End Developer. Currently,
          I'm focused on building responsive web apps using React. I'm also
          interested in learning new technologies and frameworks to improve my
          skills and knowledge.
        </p>
        <div className="flex">
          <div className="px-6">
            <button
              className={`group border-2 px-6 py-3 my-2 flex items-center ${
                darkMode
                  ? "text-white hover:bg-cyan-500 hover:border-cyan-600"
                  : "text-gray-800 hover:bg-blue-500 hover:border-blue-600"
              }`}
            >
              <a href="https://drive" target="_blank" rel="noreferrer">
                Download CV
              </a>
            </button>
          </div>
          <div>
            <button
              className={`group border-2 px-6 py-3 my-2 flex items-center ${
                darkMode
                  ? "text-white hover:bg-cyan-500 hover:border-cyan-600"
                  : "text-gray-800 hover:bg-blue-500 hover:border-blue-600"
              }`}
            >
              <Link to="contact" smooth={true} duration={500}>
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
