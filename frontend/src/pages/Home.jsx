import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaLinkedin, FaReddit, FaGithub, FaPython, FaReact, FaNodeJs,
  FaHtml5, FaCss3Alt,
  FaBootstrap
} from "react-icons/fa";
import {
  SiDjango, SiFlask, SiNextdotjs, SiTailwindcss, SiNestjs,
  SiPostgresql, SiFastapi, SiJavascript
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import profile from "/Profile.jpeg";

// 🌧️ Updated Animated RainDots
const RainDots = () => {
  return (
    <div className="rain-container absolute inset-0 z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="rain-dot"></div>
      ))}
    </div>
  );
};

const Home = () => {
  const skills = [
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "Django", icon: <SiDjango size={40} /> },
    { name: "Flask", icon: <SiFlask size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} /> },
    { name: "Nest.js", icon: <SiNestjs size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "Fast API", icon: <SiFastapi size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} /> },

  ];

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gray-900 text-white px-4 sm:px-8">
      {/* 🌧️ Rain Dots Background */}
      <RainDots />

      <main className="w-full max-w-4xl p-6 flex flex-col items-center text-center relative z-10">
        {/* 🔹 Hero Section */}
        <section id="home" className="mb-12">
          <div className="relative mb-6">
            <img
              src={profile}
              alt="Profile"
              className="w-28 h-28 mx-auto rounded-full border-4 border-gray-700 shadow-lg transition-transform duration-300 hover:scale-110"
            />
          </div>
          
          {/* 🔤 Animated Name */}
          <h2 className="text-3xl font-bold">
            <Typewriter
              words={["Luqman Bashir", "Full-Stack Developer", "Software Engineer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-400 mt-2 max-w-lg">
            I'm a dedicated and enthusiastic technical professional with a strong foundation in JavaScript, React, Next.js, Python, Flask, TailwindCSS and Django.
          </p>
        </section>

        {/* 🔹 Skills Section */}
        <section id="skills" className="mb-12">
          <h3 className="text-2xl font-bold mb-6">My Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-center shadow-md transition duration-300 transform hover:scale-110 hover:bg-gray-700"
              >
                <div className="text-white">{skill.icon}</div>
                <p className="text-gray-400 mt-2 text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Social Links */}
        <section className="flex justify-center space-x-6 mt-12">
          <a
            href="https://www.linkedin.com/in/luqman-bashir-055985350/"
            className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-125"
          >
            <FaLinkedin size={40} />
          </a>

          <a
            href="https://www.reddit.com/user/uth_man_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-125"
          >
            <FaReddit size={40} />
          </a>

          <a
            href="https://github.com/luqman-bashir"
            className="text-gray-400 hover:text-gray-200 transition duration-300 transform hover:scale-125"
          >
            <FaGithub size={40} />
          </a>

          {/* 📧 Gmail Link */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=luqmanbashir22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-125"
          >
            <MdEmail size={40} />
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
