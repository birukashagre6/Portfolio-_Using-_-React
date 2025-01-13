import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Redux from "../assets/redux.png";
import GIT from "../assets/git.png";
import TailwindCss from "../assets/tailwind.png";
import NPM from "../assets/node.png";
import { useTheme } from "../Context/ThemeContext";

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <div
      name="skills"
      className={`w-full min-h-screen flex flex-col justify-center items-center ${
        darkMode ? "bg-[#0a192f] text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-[1200px] w-full px-8">
        {/* Section Title */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 inline-block relative">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500"></span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Technologies I have experience with:
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {[
            { img: HTML, name: "HTML" },
            { img: CSS, name: "CSS" },
            { img: JAVASCRIPT, name: "JavaScript" },
            { img: ReactImg, name: "React" },
            { img: Redux, name: "Redux" },
            { img: TailwindCss, name: "Tailwind CSS" },
            { img: NPM, name: "Node" },
            { img: GIT, name: "Git" },
          ].map((skill, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-[#1e293b] to-[#0a192f] text-gray-300"
                  : "hover:scale-105"
              }`}
            >
              <img
                className="w-20 h-20 mb-4 transform group-hover:scale-110 transition-all duration-300"
                src={skill.img}
                alt={`${skill.name} icon`}
              />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
