import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="fixed top-0 w-full h-20 px-4 text-white bg-[#030014]/50 backdrop-blur-md border-b border-white/10 z-50 flex justify-between items-center transition-all duration-300 shadow-lg shadow-cyan-500/5">
        <div>
          <h1 className="text-4xl font-signature ml-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 duration-300 cursor-pointer">
            Raisul Islam
          </h1>
        </div>
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-300 relative group"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer pr-4 z-30 text-gray-300 hover:text-cyan-400 duration-300 md:hidden"
          onClick={() => {
            setNav(!nav);
            window.scroll({ top: 0, left: 0, behavior: "instant" });
          }}
        >
          {nav ? (
            <div className="mx-6">
              {" "}
              <FaTimes size={30} className="fixed" />
            </div>
          ) : (
            <FaBars size={30} />
          )}
        </div>
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-[#030014]/95 backdrop-blur-xl text-white z-40 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
