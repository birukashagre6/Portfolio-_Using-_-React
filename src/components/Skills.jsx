import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Bootstrap from "../assets/bootstrap.png";
import GIT from "../assets/git.png";
import TailwindCss from "../assets/tailwind.png";
import NPM from "../assets/node.png";
import { useTheme } from "../Context/ThemeContext";

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <div
      name="skills"
      className={`w-full h-screen ${
        darkMode ? "bg-[#0a192f] text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p
            className={`text-4xl font-bold inline border-b-4 ${
              darkMode ? "border-cyan-500" : "border-blue-500"
            }`}
          >
            Skills
          </p>
          <p className="py-4">
            These are the technologies I've experience with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {[
            { img: HTML, name: "HTML" },
            { img: CSS, name: "CSS" },
            { img: JAVASCRIPT, name: "JavaScript" },
            { img: ReactImg, name: "React" },
            { img: Bootstrap, name: "Bootstrap" },
            { img: TailwindCss, name: "Tailwind CSS" },
            { img: NPM, name: "Node" },
            { img: GIT, name: "Git" },
          ].map((skill, index) => (
            <div
              key={index}
              className={`shadow-md ${
                darkMode ? "shadow-[#040c16]" : "shadow-gray-400"
              } hover:scale-110 duration-500`}
            >
              <img
                className="w-20 mx-auto"
                src={skill.img}
                alt={`${skill.name} icon`}
              />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
