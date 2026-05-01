import React from "react";
import Bg from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="">
      <img src={Bg} className="object-cover h-screen w-screen" alt="fallback" />
    </div>
  );
};

export default Loader;
