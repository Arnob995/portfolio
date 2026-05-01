import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

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
      .catch(function (res) {
        setLoading(false);
        toast.error("Something went wrong");
      });
  };
  useEffect(() => {
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div
      id="contact"
      className="w-full text-white pt-24 pb-20 relative"
    >
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] -z-10"></div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div data-aos="fade-down" className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-cyan-500 inline text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Contact
          </p>
          <p className="py-6 text-gray-300">Have something in mind? Let's connect </p>
        </div>
        <div data-aos="fade-up" className="flex justify-center items-center">
          <form className="flex flex-col w-full md:w-3/4 lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl shadow-cyan-500/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400 relative z-10"
              value={info.name}
              onChange={(e) =>
                setInfo({
                  ...info,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-4 my-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400 relative z-10"
              value={info.email}
              onChange={(e) =>
                setInfo({
                  ...info,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={8}
              className="p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400 resize-none relative z-10"
              value={info.message}
              onChange={(e) =>
                setInfo({
                  ...info,
                  [e.target.name]: e.target.value,
                })
              }
            ></textarea>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 mt-8 mx-auto flex items-center rounded-xl hover:scale-105 duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 font-semibold tracking-wide relative z-10 w-full sm:w-auto justify-center"
              onClick={handleClick}
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
