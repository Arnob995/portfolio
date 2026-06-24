import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-4 transition-all duration-500 pt-4">
      <nav
        className={`w-full max-w-6xl rounded-2xl flex justify-between items-center transition-all duration-300 px-6 sm:px-8 border ${scrolled
            ? "py-3 bg-[#030014]/75 backdrop-blur-lg border-white/10 shadow-lg shadow-cyan-500/5"
            : "py-5 bg-[#030014]/20 backdrop-blur-md border-white/5"
          }`}
      >
        <div>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 duration-300 flex items-center gap-1 font-mono">
              RAISUL<span className="text-white font-light text-sm tracking-widest bg-white/10 px-2 py-0.5 rounded-md ml-1.5 border border-white/5 uppercase">DEV</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navbar Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-semibold text-gray-300 hover:text-white transition-all duration-300 relative group text-sm tracking-wider"
            >
              <Link to={link} smooth={true} duration={500} offset={-70}>
                {link}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Trigger */}
        <div
          className="cursor-pointer z-50 text-gray-300 hover:text-cyan-400 duration-300 md:hidden flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {nav && (
        <div className="fixed inset-0 w-screen h-screen bg-[#030014]/98 backdrop-blur-3xl z-40 md:hidden flex flex-col justify-center items-center transition-all duration-300">
          <div className="absolute top-8 left-8">
            <h1 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-mono">
              RAISUL<span className="text-white font-light text-xs tracking-widest bg-white/10 px-2 py-0.5 rounded-md ml-1.5 border border-white/5">DEV</span>
            </h1>
          </div>
          <ul className="flex flex-col justify-center items-center gap-4 w-full px-8">
            {links.map(({ id, link }) => (
              <li key={id} className="w-full max-w-[320px]">
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/25 hover:bg-cyan-500/5 text-gray-300 hover:text-cyan-300 font-extrabold tracking-wider text-base uppercase transition-all duration-300 cursor-pointer animate-fade-in"
                >
                  <span>{link}</span>
                  {/* <span className="text-xs font-mono text-cyan-400/80">0{id}</span> */}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu social footer */}
          <div className="flex gap-4 mt-12">
            <a
              href="https://www.linkedin.com/in/raisul-islam-416b88119/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/Raisul999"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:rislam.arnob@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

