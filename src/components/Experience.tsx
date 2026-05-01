import { useEffect } from "react";
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

const Experience = () => {
  useEffect(() => {
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
      once: true,
    });
  }, []);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next Js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: node,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
  ];
  return (
    <div
      id="experience"
      className="w-full text-white pt-24 pb-20 relative"
    >
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div data-aos="fade-down" className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-cyan-500 inline text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Experience
          </p>
          <p className="py-6 text-gray-300">Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={id * 50}
              key={id}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 py-6 rounded-2xl hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col items-center group ${style.replace('shadow-', 'hover:shadow-')}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={src} alt={title} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-md" />
              <p className="mt-4 font-semibold text-gray-400 group-hover:text-white transition-colors relative z-10">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
