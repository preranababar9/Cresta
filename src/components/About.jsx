import React from "react";
import { FaCheck } from "react-icons/fa";
import about1 from "/images/about1.jpg";
import about2 from "/images/about2.jpg";
import about from "/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-20  ">
      <div className="max-width h-full  bg-white flex max-md:flex-col lg:gap-8">

        <div className="lg:w-1/2">
          <p className="text-md font-bold text-[#351EE0] uppercase pl-2 pb-3">
            About Us
          </p>

          <h1 className="text-[#05092B] text-5xl max-md:text-3xl font-semibold pb-6">
            Empower You Business with Technology
          </h1>

          <p className="text-md font-normal text-[#737373] pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet the a honcus nunc Duis egestas ac ante sed tincidunt. Maecenas
            et arcu vulputate aliquam Nullam ut metus purus
          </p>

          <div className="flex flex-col gap-4 pb-12">
            <div className="flex gap-2 items-center ">
              {" "}
              <FaCheck />
              <p
                className="text-lg
       font-bold"
              >
                International Development Authority
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheck />
              <p
                className="text-lg
       font-bold"
              >
                Real Authority
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheck />
              <p
                className="text-lg
       font-bold"
              >
                Live Project Done With Practicals
              </p>
            </div>
          </div>

          <button className="bg-[#351EE0] hover:bg-blue-500 text-white font-medium py-4 px-8 ">
            Read More
          </button>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="w-full h-full flex flex-col gap-5 absolute">
            <div className="flex gap-5 h-1/2 w-full ">
              <img src={about1} alt="" className="w-1/2 object-cover" />
              <img src={about2} alt="" className="w-1/2 object-cover" />
            </div>
            <img src={about} alt="" className="h-1/2 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
