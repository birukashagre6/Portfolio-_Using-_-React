import React from "react";
import Movie from "../assets/movie.png";
import Pizza from "../assets/pizza.jpg";
import EatSplit from "../assets/EatSplit.png";
import { useTheme } from "../Context/ThemeContext";

const Work = () => {
  const { darkMode } = useTheme();

  return (
    <div
      name="work"
      className={`w-full md:h-screen ${
        darkMode ? "bg-[#0a192f] text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 ${
              darkMode
                ? "text-gray-300 border-cyan-600"
                : "text-gray-800 border-blue-600"
            }`}
          >
            Projects
          </p>
          <p className="py-6">Check out some of my projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${Pizza})` }}
            className={`shadow-lg ${
              darkMode ? "shadow-[#040c16]" : "shadow-gray-400"
            } group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pizza Menu
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/birukashagre6/Pizza-Menu-with-React.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${Movie})` }}
            className={`shadow-lg ${
              darkMode ? "shadow-[#040c16]" : "shadow-gray-400"
            } group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/birukashagre6/popcorn-react.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${EatSplit})` }}
            className={`shadow-lg ${
              darkMode ? "shadow-[#040c16]" : "shadow-gray-400"
            } group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Eat-Split-Bill
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/birukashagre6/Eat-Split-Bill.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
