import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!info.email) {
      toast.error("Email is required");
      return;
    } else if (!info.message) {
      toast.error("Message is required");
      return;
    }
    setLoading(true);
    fetch("https://getform.io/f/679f308b-6d31-46f1-baa1-4a9671e6d07d", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(info),
    })
      .then(function (res) {
        setLoading(false);
        toast.success("Message sent successfully");
        if (res?.ok) {
          setInfo({
            name: "",
            email: "",
            message: "",
          });
        }
      })
      .catch(function () {
        setLoading(false);
        toast.error("Something went wrong");
      });
  };

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div id="contact" className="w-full text-white py-14 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>

      <div className="max-w-6xl p-6 sm:p-8 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div data-aos="fade-down" className="pb-8 mb-6">
          <p className="text-4xl font-extrabold inline border-b-4 border-cyan-500 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Contact
          </p>
          <p className="text-gray-400 mt-4 text-lg">Have a project in mind or want to chat? Reach out!</p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div data-aos="fade-right" className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-semibold text-xs tracking-widest uppercase mb-1">Email Me</h4>
                  <a href="mailto:rislam.arnob@gmail.com" className="text-lg font-bold text-white hover:text-cyan-400 transition-colors duration-300">
                    rislam.arnob@gmail.com
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-semibold text-xs tracking-widest uppercase mb-1">Location</h4>
                  <p className="text-lg font-bold text-white">Dhaka, Bangladesh</p>
                  <p className="text-xs text-gray-500 mt-1">Available for remote roles</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-purple-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400 border border-purple-500/20">
                  <FiMessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-semibold text-xs tracking-widest uppercase mb-1">Social Connect</h4>
                  <div className="flex gap-3 mt-3">
                    <a
                      href="https://www.linkedin.com/in/raisul-islam-416b88119/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-white/5 rounded-xl text-gray-300 hover:text-cyan-400 transition-all duration-300"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                    <a
                      href="https://github.com/Raisul999"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-white/5 rounded-xl text-gray-300 hover:text-cyan-400 transition-all duration-300"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div data-aos="fade-left" className="lg:col-span-7">
            <form className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group flex flex-col gap-5">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 tracking-wider uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-500 text-sm font-medium"
                  value={info.name}
                  onChange={(e) =>
                    setInfo({
                      ...info,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 tracking-wider uppercase">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-500 text-sm font-medium"
                  value={info.email}
                  onChange={(e) =>
                    setInfo({
                      ...info,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 tracking-wider uppercase">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows={6}
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-500 text-sm font-medium resize-none"
                  value={info.message}
                  onChange={(e) =>
                    setInfo({
                      ...info,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 mt-4 flex items-center rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 font-bold tracking-wide w-full justify-center gap-2.5 cursor-pointer hover:scale-[1.01]"
                onClick={handleClick}
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
