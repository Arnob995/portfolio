import { useEffect } from "react";
import MyPic from "../assets/me.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
    });
  }, []);
  const socials = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/raisul-islam-416b88119/",
      icon: <FaLinkedinIn className="border-2 rounded-md px-1 " size={35} />,
      tipId: "tool-tip1",
      tipContent: "LinkedIn",
    },
    {
      id: 2,
      href: "https://github.com/Raisul999",
      icon: <FaGithub size={35} />,
      tipId: "tool-tip2",
      tipContent: "GitHub",
    },
    {
      id: 3,
      href: "mailto:rislam.arnob@gmail.com",
      icon: <HiOutlineMail className="border-2 rounded-md px-1 " size={35} />,
      tipId: "tool-tip3",
      tipContent: "Mail",
    },
    {
      id: 4,
      href: "https://drive.google.com/file/d/13aNFJNcNdl8xjoY-KM_kbKE7GUPG81vQ/view?usp=sharing",
      icon: (
        <BsFillPersonLinesFill
          className="border-2 rounded-md px-1 "
          size={35}
        />
      ),
      tipId: "tool-tip4",
      tipContent: "Resume",
    },
  ];
  return (
    <div id="home" className="w-full min-h-screen pt-24 pb-12 flex items-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-10">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center h-full w-full md:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent my-2 min-h-[4rem] sm:min-h-[3rem]">
            <TypeAnimation
              sequence={[
                "Resilient Dev 💻",
                1000,
                "Frontend Developer",
                1000,
                "MERN Stack Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] my-6 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-xl font-bold mb-4 text-white">Greetings, this is Raisul,</p>
            <p className="text-gray-300 leading-relaxed">
              A highly motivated individual with a deep passion for cutting-edge
              technologies. I thrive on challenging problems and constantly
              pushing the boundaries of my knowledge and skill set. My greatest
              satisfaction lies in tackling complex problems and employing my
              analytical abilities to formulate effective solutions.
            </p>
          </div>
          <div className="mb-4">
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 font-semibold tracking-wide">
                View Portfolio
                <span className="group-hover:translate-x-2 transition-transform duration-300 ml-2">
                  <HiOutlineArrowNarrowRight size={20} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="w-full md:w-1/2 flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse mix-blend-screen"></div>
          <img
            src={MyPic}
            alt="my_pic"
            className="rounded-3xl mx-auto w-2/3 md:w-3/4 object-cover border border-white/10 shadow-2xl shadow-cyan-500/20 relative z-10 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="flex flex-row md:flex-col lg:hidden gap-4 mt-8 md:mt-0">
          {socials.map(({ id, href, icon, tipId, tipContent }) => (
            <a
              key={id}
              href={href}
              rel="noreferrer"
              target="_blank"
              data-tooltip-id={tipId}
              data-tooltip-content={tipContent}
              className="bg-white/5 p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-gray-300"
            >
              <span>{icon}</span>
              <ReactTooltip id={tipId} place="bottom" className="!bg-white/10 !backdrop-blur-md !border !border-white/10 !text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
