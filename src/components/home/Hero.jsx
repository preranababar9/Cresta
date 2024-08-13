import React from "react";
import Frame from "/home/Frame.svg";
import hero from "/images/hero.png";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-blue-200 ">
      <div className="w-full   max-width h-full lg:flex max-md:flex-col-reverse items-center  ">

        <div className="py-20 max-md:pt-20  max-md:pb-0 ">
          <p className="text-md font-bold text-[#351EE0] max-lg:pt-10 uppercase pl-2 pb-5">
            Pro Tech Consult
          </p>  

          <h1 className="text-[#05092B] text-5xl lg:w-4/6 font-bold pb-8 max-md:text-5xl">
            Drive Efficiency a with IT
          </h1>

          <p className="text-md font-normal lg:w-3/4 text-[#05092B] pb-10">
            We have been operating for over a decade,
            providing top-notch services to our clients and Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam 
          </p>

          <button className="bg-[#351EE0] hover:bg-blue-500 text-white font-medium py-4 px-8 ">
            Read More
          </button>
        </div>

        <div className="h-full max-md:h-1/2 max-md:w-full">
          <img src={hero} alt="Frame"  className="h-full w-full object-cover "/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
