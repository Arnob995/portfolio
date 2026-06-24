import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedinIn size={18} />,
      href: "https://www.linkedin.com/in/raisul-islam-416b88119/",
      name: "LinkedIn",
    },
    {
      id: 2,
      child: <FaGithub size={18} />,
      href: "https://github.com/Raisul999",
      name: "GitHub",
    },
    {
      id: 3,
      child: <FiMail size={18} />,
      href: "mailto:rislam.arnob@gmail.com",
      name: "Mail",
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={18} />,
      href: "https://drive.google.com/file/d/1sNTL3T2Xy8kbVwAXDB1tGvoylVoMyhL7/view?usp=sharing",
      name: "Resume",
    },
  ];

  return (
    <div className="hidden 2xl:flex flex-col top-[35%] left-8 fixed z-50">
      <div className="flex flex-col items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-3 py-6 rounded-full shadow-2xl">
        {links.map(({ id, child, href, name }: any) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-300 relative group cursor-pointer"
          >
            {child}
            {/* Tooltip on hover */}
            <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-[#0c0a24]/90 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-2.5 py-1 rounded-lg transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              {name}
            </span>
          </a>
        ))}
      </div>
      {/* Decorative vertical line */}
      <div className="w-[1px] h-24 bg-gradient-to-b from-white/15 to-transparent mx-auto mt-4"></div>
    </div>
  );
};

export default SocialLinks;
