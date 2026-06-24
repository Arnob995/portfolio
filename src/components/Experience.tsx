import { useEffect, useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import graphql from "../assets/graphql.png";
import redux from "../assets/redux.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDocker } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";
import { SiMongodb, SiPostgresql, SiGit } from "react-icons/si";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1200,
      once: true,
    });
  }, []);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hover:border-orange-500/40 hover:shadow-orange-500/10",
      category: "frontend",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "hover:border-blue-500/40 hover:shadow-blue-500/10",
      category: "frontend",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "hover:border-yellow-500/40 hover:shadow-yellow-500/10",
      category: "frontend",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "hover:border-blue-400/40 hover:shadow-blue-400/10",
      category: "frontend",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "hover:border-sky-400/40 hover:shadow-sky-400/10",
      category: "frontend",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next.js",
      style: "hover:border-white/30 hover:shadow-white/5",
      category: "frontend",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "hover:border-purple-500/40 hover:shadow-purple-500/10",
      category: "frontend",
    },
    {
      id: 8,
      src: node,
      title: "Node.js",
      style: "hover:border-green-500/40 hover:shadow-green-500/10",
      category: "backend",
    },
    {
      id: 9,
      src: graphql,
      title: "GraphQL",
      style: "hover:border-pink-500/40 hover:shadow-pink-500/10",
      category: "backend",
    },
    {
      id: 10,
      icon: <TbBrandGolang size={52} className="text-[#00ADD8]" />,
      title: "Go Lang",
      style: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
      category: "backend",
    },
    {
      id: 11,
      icon: <SiMongodb size={48} className="text-[#47A248]" />,
      title: "MongoDB",
      style: "hover:border-green-600/40 hover:shadow-green-600/10",
      category: "backend",
    },
    {
      id: 12,
      icon: <SiPostgresql size={48} className="text-[#4169E1]" />,
      title: "PostgreSQL",
      style: "hover:border-blue-500/40 hover:shadow-blue-500/10",
      category: "backend",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "hover:border-gray-400/40 hover:shadow-gray-400/10",
      category: "tools",
    },
    {
      id: 14,
      icon: <FaDocker size={48} className="text-[#2496ED]" />,
      title: "Docker",
      style: "hover:border-blue-500/40 hover:shadow-blue-500/10",
      category: "tools",
    },
    {
      id: 15,
      icon: <SiGit size={48} className="text-[#F05032]" />,
      title: "Git",
      style: "hover:border-orange-600/40 hover:shadow-orange-600/10",
      category: "tools",
    },
  ];

  const filteredTechs = activeTab === "all" 
    ? techs 
    : techs.filter(tech => tech.category === activeTab);

  const categories = [
    { key: "all", label: "All Skills" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend & API" },
    { key: "tools", label: "Tools & DevOps" },
  ];

  return (
    <div id="experience" className="w-full text-white py-14 relative">
      {/* Decorative Blur Background */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-6xl p-6 sm:p-8 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div data-aos="fade-down" className="pb-8 mb-6">
          <p className="text-4xl font-extrabold inline border-b-4 border-cyan-500 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Skills & Experience
          </p>
          <p className="text-gray-400 mt-4 text-lg">The core technologies in my development toolbox</p>
        </div>

        {/* Tab Filters */}
        <div data-aos="fade-up" className="flex flex-wrap gap-3 mb-10">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                activeTab === key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredTechs.map(({ id, src, icon, title, style }) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={id * 30}
              key={id}
              className={`relative glass-panel py-6 px-4 rounded-3xl transition-all duration-500 flex flex-col items-center justify-center group cursor-default shadow-md ${style}`}
            >
              {/* Inner subtle top glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-16 h-16 flex items-center justify-center relative">
                {/* Tech Icon */}
                {icon ? (
                  <div className="group-hover:scale-110 transition-transform duration-500 relative z-10 filter drop-shadow-md">
                    {icon}
                  </div>
                ) : (
                  <img
                    src={src}
                    alt={title}
                    className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500 relative z-10 filter drop-shadow-md"
                  />
                )}
              </div>
              
              <p className="mt-4 font-bold text-sm tracking-wider text-gray-400 group-hover:text-white transition-colors relative z-10 uppercase">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
