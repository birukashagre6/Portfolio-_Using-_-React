import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
              About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Biruk. Thanks for visiting my portfolio.</p>
          </div>
          <div className="mt-2">
            <p>
              I am a 4th-year Software Engineering stundent in Debre Berhan
              University.I'm passionate about the world of technology and web
              development. I'm a good communicator with the ability to work in a
              team and solve problems under pressure. I'm always eager to learn
              new things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
