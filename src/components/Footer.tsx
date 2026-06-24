import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  const d = new Date();

  return (
    <footer className="w-full bg-[#030014]/90 border-t border-white/5 py-12 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-6">

        {/* Footer Brand Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h2 className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-mono hover:scale-105 transition-transform duration-300">
            RAISUL<span className="text-white font-light text-xs tracking-widest bg-white/10 px-1.5 py-0.5 rounded ml-1 border border-white/5">DEV</span>
          </h2>
        </Link>


        {/* Footer Mini Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/raisul-islam-416b88119/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="https://github.com/Raisul999"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="mailto:rislam.arnob@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <FiMail size={16} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center tracking-wide mt-2">
          &copy; {d.getFullYear()} Raisul Islam. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
