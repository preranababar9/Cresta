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

        <div className="flex  flex-wrap justify-evenly  pt-6 items-center ">
          {featData.map((item, index) => (
            <div  key= {index} className="shadow-xl duration-300 hover:scale-110 p-6 w-[30%] pt-8  ">
              <img
                src={item.img}
                alt="feature1"
                className="bg-blue-200 px-2 py-2 mb-6"
              />

              <h3 className="text-[#05092B] font-bold text-xl pb-6 ">
                {item.title}
              </h3>

              <p className="text-[#737373] font-normal text-lg ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

const featData = [
  {
    img: feature1,
    title: " Digital Solutions Support",
    desc: "Information Technology is a broad the category that encompasses various technologies and practices",
  },
  {
    img: feature2,
    title: "Software Masters Gates  ",
    desc: "Information Technology is a broad the category that encompassesvarious technologies and practices",
  },
  {
    img: feature3,
    title: " Digital Solutions Tech",
    desc: "Information Technology is a broad the category that encompasses various technologies and practices",
  },
];
