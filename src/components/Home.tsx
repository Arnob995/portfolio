import { useEffect } from "react";
import MyPic from "../assets/me.jpg";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1200,
      once: true,
    });
  }, []);

  const socials = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/raisul-islam-416b88119/",
      icon: <FaLinkedinIn size={20} />,
      tipId: "home-tip-linkedin",
      tipContent: "LinkedIn",
    },
    {
      id: 2,
      href: "https://github.com/Raisul999",
      icon: <FaGithub size={20} />,
      tipId: "home-tip-github",
      tipContent: "GitHub",
    },
    {
      id: 3,
      href: "mailto:rislam.arnob@gmail.com",
      icon: <FiMail size={20} />,
      tipId: "home-tip-mail",
      tipContent: "Email",
    },
    {
      id: 4,
      href: "https://drive.google.com/file/d/1sNTL3T2Xy8kbVwAXDB1tGvoylVoMyhL7/view?usp=sharing",
      icon: <BsFillPersonLinesFill size={20} />,
      tipId: "home-tip-resume",
      tipContent: "Resume",
    },
  ];

  return (
    <div id="home" className="w-full min-h-screen pt-24 pb-8 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] -z-10 animate-pulse duration-5000"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 sm:px-8 w-full z-10">
        
        {/* Left Bio Column */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center h-full w-full md:w-3/5 text-left order-2 md:order-1"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider w-fit mb-6 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Raisul Islam</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 mt-3 min-h-[40px] flex flex-wrap items-center">
            I am a&nbsp;
            <TypeAnimation
              sequence={[
                "Frontend Developer 💻",
                1500,
                "MERN Stack Developer 🚀",
                1500,
                "Problem Solver 🧩",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="inline-block text-cyan-400 font-mono font-bold"
            />
          </h2>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl mt-6 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              A highly motivated developer with a deep passion for building high-performance web experiences. 
              I thrive on challenging problems, clean architecture, and constantly pushing the boundaries of my frontend and MERN stack skill sets.
            </p>
          </div>

          {/* Social icons inline */}
          <div className="flex items-center gap-4 mt-8">
            {socials.map(({ id, href, icon, tipId, tipContent }) => (
              <a
                key={id}
                href={href}
                rel="noreferrer"
                target="_blank"
                data-tooltip-id={tipId}
                data-tooltip-content={tipContent}
                className="bg-white/5 p-3.5 rounded-2xl border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-gray-300 shadow-lg cursor-pointer"
              >
                {icon}
                <ReactTooltip 
                  id={tipId} 
                  place="top" 
                  className="!bg-[#0c0a24]/90 !backdrop-blur-md !border !border-white/10 !text-white !px-3 !py-1.5 !rounded-lg !text-xs" 
                />
              </a>
            ))}
          </div>

          {/* Call-to-actions */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link to="portfolio" smooth={true} duration={500} offset={-80}>
              <button className="group text-white px-8 py-4 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 cursor-pointer shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/45 hover:scale-[1.03] transition-all duration-300 font-bold tracking-wide">
                Explore My Work
                <FiArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="text-gray-300 hover:text-white px-8 py-4 flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 cursor-pointer transition-all duration-300 font-bold tracking-wide shadow-md">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Column */}
        <div 
          data-aos="fade-left" 
          className="w-full md:w-2/5 flex flex-col justify-center items-center relative order-1 md:order-2"
        >
          {/* Large back glow */}
          <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-[80px] opacity-25 animate-pulse mix-blend-screen -z-10"></div>
          
          {/* Image Container with elegant neon border and tilt hover effect */}
          <div className="relative group p-2 rounded-[36px] bg-gradient-to-tr from-cyan-500/30 via-transparent to-purple-500/30 border border-white/5 shadow-2xl hover:border-cyan-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-[36px] blur opacity-15 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <img
              src={MyPic}
              alt="Raisul Islam Profile"
              className="rounded-[28px] max-w-[240px] sm:max-w-[320px] object-cover border border-white/10 shadow-2xl relative z-10 group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
