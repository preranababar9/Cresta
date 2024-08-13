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

        <div className="flex gap-4  justify-evenly h-[60vh] w-full">
          <div className="h-full w-1/3 flex flex-col gap-4">
            <img src={gallery1} alt="" className="h-[48%] w-full object-cover" />
            <img src={gallery2} alt="" className="h-[48%] w-full object-cover" />
          </div>

          <img src={gallery3} alt="" className="h-full w-1/3 object-cover " />

          <div className="h-full w-1/3 flex flex-col gap-4">
            <img src={gallery1} alt="" className="h-[48%] w-full object-cover" />
            <img src={gallery2} alt="" className="h-[48%] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
