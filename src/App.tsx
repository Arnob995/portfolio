import "./App.css";
import React, { Suspense } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
// import Home from "./components/Home";
// import SocialLinks from "./components/SocialLinks";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = React.lazy(() => import("./components/Home"));
const SocialLinks = React.lazy(() => import("./components/SocialLinks"));
const About = React.lazy(() => import("./components/About"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Experience = React.lazy(() => import("./components/Experience"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="relative min-h-screen bg-[#030014] text-gray-200 selection:bg-cyan-500/30 overflow-x-hidden">
        {/* Background Glows */}
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]"></div>
          <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"></div>
        </div>
        
        <ToastContainer 
          autoClose={5000} 
          theme="dark" 
          toastClassName={() => "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white/10 backdrop-blur-md border border-white/10 text-white mb-2"}
        />
        
        <div className="relative z-10">
          <Navbar />
          <Home />
          <SocialLinks />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
