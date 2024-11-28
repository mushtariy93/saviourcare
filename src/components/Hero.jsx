import React from "react";
import hero_image from "../assets/hero_image.png";


const Hero = () => {
  return (
    <div className="container max-w-[1280px] mx-auto flex gap-3 mb-[100px]">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-[#3C567B] text-5xl font-mulish font-bold leading-[56px] text-left underline decoration-skip-ink-none">
          Virtual healthcare Saviour for you
        </h1>
        <p className="font-medium leading-7 text-[20px] text-[#93C1F9]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <button className="w-[200px] h-[50px]  left-[196px]  mt-12 rounded-full bg-sky-700 color text-white hover:bg-indigo-800">
          Consult today
        </button>
      </div>
      <div className="hero__image">
        <img src={hero_image} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
