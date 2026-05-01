import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div
      id="about"
      className="w-full py-20 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div data-aos="fade-down" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            About
          </p>
        </div>

        <div data-aos="fade-up" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-cyan-500/10 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-700"></div>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed relative z-10">
            I prioritize well-documented code and meticulously crafted system
            architecture. My confident communication skills enable me to
            collaborate effectively and clearly explain technical concepts. As a
            strategic thinker and innovative problem-solver, I design bespoke
            software solutions that precisely align with a company's
            organizational objectives, highlighting its core competencies and
            driving its continued success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
