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

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
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
    },
    {
      id: 2,
      src: cartup,
      name: "Cartup Ecommerce",
      link: "https://cartup.com/",
      repo: "",
    },
    {
      id: 3,
      src: mgx,
      name: "mgX Courier",
      link: "https://www.mgx.com/bd",
      repo: "",
    },
    {
      id: 4,
      src: todo,
      name: "Todo App",
      link: "https://todo-task-tracker.onrender.com/",
      repo: "https://github.com/Raisul999/Todo-App",
    },
    {
      id: 5,
      src: restro,
      name: "E Restro",
      link: "https://restaurant-website-nine.vercel.app/",
      repo: "https://github.com/Raisul999/Restaurant-Website",
    },
    {
      id: 6,
      src: bot,
      name: "AI Bot Eliza",
      link: "https://eliza-chat-bot.onrender.com/",
      repo: "https://github.com/Raisul999/gRPC-chat-assistant",
    },
  ];
  return (
    <div
      id="portfolio"
      className="w-full text-white pt-24 pb-20 relative"
    >
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px] -z-10"></div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div data-aos="fade-down" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Portfolio
          </p>
          <p className="py-6 text-gray-300">Some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, name }) => (
            <div
              data-aos="fade-up"
              key={id}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="overflow-hidden relative h-48 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80 z-10"></div>
                <LazyLoadImage
                  alt={name}
                  effect="blur"
                  src={src}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="flex flex-col flex-grow justify-between p-5 relative z-20 -mt-10">
                <p className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-lg">{name}</p>
                <div className="flex flex-row items-center gap-3">
                  <button
                    onClick={() => window.open(link, "_blank")}
                    type="button"
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:from-cyan-500 hover:to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 flex justify-center items-center gap-2 backdrop-blur-sm"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
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
