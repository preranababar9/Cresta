import React from "react";
import feature1 from "/home/feature1.svg";
import feature2 from "/home/feature2.svg";
import feature3 from "/home/feature3.svg";

const Features = () => {
  return (
    <section className="py-20  ">
      <div className="max-width bg-white">
        <div className="mb-10">
          <p className="text-md font-bold text-center text-[#351EE0] uppercase pl-2 pb-3">
            Innovative Features & Support
          </p>
          <h2 className="text-[#05092B] text-5xl text-center font-semibold pb-6">
            Simplify IT for Enhanced <br></br>the a Productivity
          </h2>
        </div>

        <div className="flex   pt-6 items-center gap-6">
          <div className=" border-solid border-2 p-4 w-1/3 pt-8  ">
            <img
              src={feature1}
              alt="feature1"
              className="bg-blue-200 px-2 py-2 mb-6"
            />

            <h3 className="text-[#05092B] font-bold text-xl pb-6 ">
              Digital Solutions Support
            </h3>

            <p className="text-[#737373] font-normal text-lg ">
              Information Technology is a broad the category that encompasses
              various technologies and practices{" "}
            </p>
          </div>

          <div className="  border-solid border-2 p-4 w-1/3 pt-8  ">
            <img
              src={feature2}
              alt="feature1"
              className="bg-blue-200 px-3 py-3 mb-6"
            />

            <h3 className="text-[#05092B] font-bold text-xl pb-6 ">
              Digital Solutions Support
            </h3>

            <p className="text-[#737373] font-normal text-lg ">
              Information Technology is a broad the category that encompasses
              various technologies and practices{" "}
            </p>
          </div>

          <div className="  border-solid border-2 p-4 w-1/3 pt-8 ">
            <img
              src={feature3}
              alt="feature1"
              className="bg-blue-200 px-3 py-3 mb-6"
            />

            <h3 className="text-[#05092B] font-bold text-xl pb-6 ">
              Digital Solutions Support
            </h3>

            <p className="text-[#737373] font-normal text-lg ">
              Information Technology is a broad the category that encompasses
              various technologies and practices{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
