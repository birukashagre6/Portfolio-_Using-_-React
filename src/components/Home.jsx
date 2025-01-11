import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-4xl font-bold text-[#ccd6f6]">
          Hi there , my name is{" "}
          <span className="text-cyan-500">Biruk Ashagre</span>
        </h2>
        <h3 className="text-4xl sm:text-3xl font-bold text-[#8892b0]">
          I'm a Web Developer
        </h3>
        <p className="text-4xl sm:text-2xl text-[#8892b0] py-4 max-w-[700px]">
          I'm a passionated Software Engineer and Front End Developer.
          Currently, I'm focused on building responsive web apps using React.
          I'm also interested in learning new technologies and frameworks to
          improve my skills and knowledge.
        </p>
        <div className="flex ">
          <div className="px-6">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-600">
              <a href="https://drive " target="_blank" rel="noreferrer">
                Download CV
              </a>
              <span className="group-hover:rotate-90 duration-300"></span>
            </button>
          </div>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-600">
              <Link to="contact" smooth={true} duration={500}>
                Contact Me
              </Link>
              <span className="group-hover:rotate-90 duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
