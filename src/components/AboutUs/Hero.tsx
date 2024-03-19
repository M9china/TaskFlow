import React from "react";
import { Bootcamp } from "..";
import { NavLink } from "react-router-dom";

export const Hero: React.FC<Bootcamp> = ({ data }) => {
  return (
    <div
      className="sm:px-[17rem] px-[1rem] bg-cover flex items-center sm:mt-[2rem] mt-[5rem] sm:w-full w-screen sm:h-[70vh] h-[50vh]"
      style={{
        backgroundImage: ` url(${data.backgroundImage})`,
      }}
    >
      <div className="text-center flex flex-col items-center py-2 sm:py-5">
        <div className="sm:text-5xl text-3xl font-bold text-white">{data.title}</div>
        <p className=" text-center mt-4 sm:mt-5 text-md sm:text-lg text-white">
          At <strong>Opherlabs</strong>, we are driven by a relentless passion
          for innovation. Our core focus lies in pioneering research and
          development, shaping the future of technology, and creating
          exceptional mobile apps and tech products that transform the way we
          live and work.
        </p>
        <NavLink to={"#"} className="bg-blue-600 px-3 py-1 text-white sm:mt-0 mt-4 sm:hidden block rounded-3xl">Get Started</NavLink>

      </div>
    </div>
  );
};
