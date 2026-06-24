import { useEffect } from "react";
import mgx from "../assets/portfolio/mgx.png";
import todo from "../assets/portfolio/todo.png";
import restro from "../assets/portfolio/restro.png";
import foodi from "../assets/portfolio/foodi.png";
import cartup from "../assets/portfolio/cartup.png";
import bot from "../assets/portfolio/chat-bot.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1200,
      once: true,
    });
  }, []);

  const portfolios = [
    {
      id: 1,
      src: foodi,
      name: "Foodi Website",
      link: "https://foodibd.com/",
      repo: "",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 2,
      src: cartup,
      name: "Cartup Ecommerce",
      link: "https://cartup.com/",
      repo: "",
      tags: ["React", "Redux", "Tailwind CSS", "REST API"],
    },
    {
      id: 3,
      src: mgx,
      name: "mgX Courier",
      link: "https://www.mgx.com/bd",
      repo: "",
      tags: ["React", "Tailwind CSS", "REST API", "Framer Motion"],
    },
    // {
    //   id: 4,
    //   src: todo,
    //   name: "Todo App",
    //   link: "https://todo-task-tracker.onrender.com/",
    //   repo: "https://github.com/Raisul999/Todo-App",
    //   tags: ["React", "CSS3", "Node.js", "Express", "MongoDB"],
    // },
    // {
    //   id: 5,
    //   src: restro,
    //   name: "E Restro",
    //   link: "https://restaurant-website-nine.vercel.app/",
    //   repo: "https://github.com/Raisul999/Restaurant-Website",
    //   tags: ["React", "CSS Grid", "AOS Animations", "Responsive"],
    // },
    // {
    //   id: 6,
    //   src: bot,
    //   name: "AI Bot Eliza",
    //   link: "https://eliza-chat-bot.onrender.com/",
    //   repo: "https://github.com/Raisul999/gRPC-chat-assistant",
    //   tags: ["React", "gRPC", "Node.js", "Protocol Buffers", "AI Agent"],
    // },
  ];

  return (
    <div id="portfolio" className="w-full text-white py-14 relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[120px] -z-10 animate-pulse duration-4000"></div>

      <div className="max-w-6xl p-6 sm:p-8 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div data-aos="fade-down" className="pb-8 mb-6">
          <p className="text-4xl font-extrabold inline border-b-4 border-cyan-500 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Portfolio
          </p>
          <p className="text-gray-400 mt-4 text-lg">A showcase of my recent designs and development works</p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {portfolios.map(({ id, src, link, repo, name, tags }) => (
            <div
              data-aos="fade-up"
              data-aos-delay={id * 50}
              key={id}
              className="group flex flex-col h-full glass-panel rounded-3xl overflow-hidden hover:border-cyan-500/35 transition-all duration-500 shadow-lg hover:shadow-cyan-500/5"
            >
              {/* Image Preview Container */}
              <div className="overflow-hidden relative h-52 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/10 to-transparent opacity-85 z-10"></div>
                <LazyLoadImage
                  alt={name}
                  effect="blur"
                  src={src}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  wrapperClassName="w-full h-full"
                />
              </div>

              {/* Card Details Container */}
              <div className="flex flex-col flex-grow p-6 relative z-20">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {name}
                </h3>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-1.5 mt-3 mb-6">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/5 border border-white/5 text-gray-300 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider font-mono hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Call-to-action buttons */}
                <div className="flex items-center gap-3 mt-auto w-full">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm transition-all duration-300 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-[1.02] flex justify-center items-center gap-2 cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink size={14} />
                  </a>

                  {repo && (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 hover:scale-[1.02] flex justify-center items-center gap-2 cursor-pointer"
                      title="GitHub Repository"
                    >
                      <FaGithub size={16} />
                      <span className="hidden sm:inline text-sm font-semibold">GitHub</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
