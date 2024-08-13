import React from "react";
import gallery1 from "/images/gallery1.svg";
import gallery2 from "/images/gallery2.svg";
import gallery3 from "/images/gallery3.svg";

const Gallery = () => {
  return (
    <section className="py-20 ">
      <div className="max-width bg-white">
        <div>
          <p className="text-md font-bold text-[#351EE0] uppercase text-center pb-3">
            Latest Project
          </p>

          <h1 className=" lg:text-5xl text-3xl font-semibold pb-6 text-center">
            Simplify IT for Enhanced the <br></br>Productivity
          </h1>
        </div>

        <div className="flex  max-lg:flex-col lg:gap-4 gap-y-4  justify-evenly h-[60vh] w-full">
          <div className="lg:h-full h-[18vh] lg:w-1/3 w-full flex lg:flex-col lg:gap-4 gap-2">
            <img src={gallery1} alt="" className="lg:h-[46%] lg:w-full w-1/2 object-cover" />
            <img src={gallery2} alt="" className="lg:h-[46%] lg:w-full w-1/2 object-cover" />
          </div>

          <img src={gallery3} alt="" className="lg:h-full h-[18vh] lg:w-1/3 w-full object-cover " />

          <div className="lg:h-full h-[18vh] lg:w-1/3 flex lg:flex-col lg:gap-4 gap-2">
            <img src={gallery1} alt="" className="lg:h-[48%] lg:w-full w-1/2 object-cover" />
            <img src={gallery2} alt="" className="lg:h-[48%] lg:w-full w-1/2 object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
