import React from "react";
import { useTheme } from "../Context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <div
      name="contact"
      className={`w-full h-screen flex justify-center items-center p-6 ${
        darkMode ? "bg-[#0a192f] text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      <form
        method="POST"
        action="https://getform.io/f/agddrzkb"
        className={`flex flex-col max-w-[600px] w-full rounded-lg shadow-lg p-6 ${
          darkMode ? "bg-[#112240] shadow-cyan-700" : "bg-white shadow-gray-300"
        }`}
      >
        <div className="pb-8">
          <h2
            className={`text-4xl font-bold mb-2 inline border-b-4 ${
              darkMode ? "border-cyan-600" : "border-blue-600"
            }`}
          >
            Contact
          </h2>
          <p className="leading-relaxed">
            I'd love to hear from you! Submit the form below or send me an email
            at:{" "}
            <a
              href="mailto:birukashagre639@gmail.com"
              className={`underline ${
                darkMode
                  ? "text-cyan-400 hover:text-cyan-300"
                  : "text-blue-500 hover:text-blue-400"
              }`}
            >
              birukashagre639@gmail.com
            </a>
          </p>
        </div>
        <input
          className={`p-3 rounded-lg mb-4 focus:outline-none focus:ring-4 ${
            darkMode
              ? "bg-[#ccd6f6] focus:ring-cyan-500"
              : "bg-gray-100 focus:ring-blue-500"
          }`}
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          className={`p-3 rounded-lg mb-4 focus:outline-none focus:ring-4 ${
            darkMode
              ? "bg-[#ccd6f6] focus:ring-cyan-500"
              : "bg-gray-100 focus:ring-blue-500"
          }`}
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <textarea
          className={`p-3 rounded-lg mb-6 focus:outline-none focus:ring-4 ${
            darkMode
              ? "bg-[#ccd6f6] focus:ring-cyan-500"
              : "bg-gray-100 focus:ring-blue-500"
          }`}
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>
        <button
          type="submit"
          className={`w-full text-lg font-semibold py-3 rounded-lg transition-all duration-300 ${
            darkMode
              ? "bg-cyan-500 hover:bg-cyan-600 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
