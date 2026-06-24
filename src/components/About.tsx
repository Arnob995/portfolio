import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiAward, FiBookOpen, FiCpu, FiLayout } from "react-icons/fi";

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1200,
      once: true,
    });
  }, []);

  const stats = [
    {
      id: 1,
      icon: <FiAward className="text-cyan-400" size={28} />,
      title: "Experience",
      value: "5+ Years",
      desc: "Web Application Dev",
    },
    {
      id: 2,
      icon: <FiCpu className="text-purple-400" size={28} />,
      title: "Projects",
      value: "15+ Done",
      desc: "Live applications built",
    },
    {
      id: 3,
      icon: <FiLayout className="text-blue-400" size={28} />,
      title: "MERN Stack",
      value: "Fullstack",
      desc: "React, Node, Express, DB",
    },
    {
      id: 4,
      icon: <FiBookOpen className="text-emerald-400" size={28} />,
      title: "Philosophy",
      value: "Clean Code",
      desc: "Scalable Architecture",
    },
  ];

  return (
    <div id="about" className="w-full py-14 text-white relative overflow-hidden">
      {/* Subtle glowing mesh */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl p-6 sm:p-8 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div data-aos="fade-down" className="pb-8 mb-6">
          <p className="text-4xl font-extrabold inline border-b-4 border-cyan-500 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            About Me
          </p>
          <p className="text-gray-400 mt-4 text-lg">My background and development principles</p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Wording Card */}
          <div
            data-aos="fade-right"
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 shadow-xl"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/15 transition-colors duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/15 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              Who is <span className="text-cyan-400">Raisul Islam</span>?
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I prioritize clean, well-documented code and meticulously crafted software architecture.
              My strong communication skills enable me to collaborate effectively within cross-functional teams,
              bringing ideas to life and explaining technical strategies with clarity.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              As a strategic thinker and innovative problem-solver, I focus on designing bespoke
              software solutions that perfectly align with user needs and business objectives.
              I am dedicated to continuous learning, ensuring that the applications I build are
              fast, secure, and modern.
            </p>
          </div>

          {/* Right Column: Dynamic Stat Cards */}
          <div
            data-aos="fade-left"
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {stats.map(({ id, icon, title, value, desc }) => (
              <div
                key={id}
                className="glass-panel p-6 rounded-3xl relative overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:border-cyan-500/20 group shadow-md"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/2 rounded-bl-3xl -z-10 group-hover:bg-cyan-500/5 transition-colors duration-300"></div>
                <div className="mb-4">{icon}</div>
                <h4 className="text-gray-400 font-medium text-sm tracking-wider uppercase mb-1">{title}</h4>
                <p className="text-2xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
