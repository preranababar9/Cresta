import React from "react";
import solution from "/images/solution.svg";
import letter from "/icons/letter.svg";

const Solutions = () => {
  return (
    <section className="py-20 bg-[#05092B]">
      <div className="max-width ">
        <div className="pb-10">
          <p className="text-white text-md font-bold text-center uppercase">
            Our Creative Team Member
          </p>
          <h3 className="text-white text-4xl leading-10 font-bold text-center">
            Elevate Your Business with IT Solutions
          </h3>
        </div>

        <div className="flex h-full justify-evenly py-4 mb-6 ">
          {profile.map((item, index) => (
            <div className="h-1/2    border-2 border-white border-solid p-8">
              {" "}
              <img src={item.img} alt="" className="" />
              <p className="text-white text-center pt-2 font-bold">
                {item.name}
              </p>
              <p className="text-white text-center pt-2">{item.position}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#351EE0] flex justify-evenly items-center py-12 mt-10 ">
          <img src={letter} alt="" className="h-16" />
          <h4 className="text-white text-5xl leading-10 font-bold text-center ">
            Stay Ahead with the cutting IT
          </h4>

          <div className="">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-3 bg-[#351EE0] text-white border border-slate-300"
            ></input>
            <button className="bg-white py-3 px-4 text-lg rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

const profile = [
  {
    img: solution,
    name: "Courtney Henry",
    position: "Web Designer",
  },
  {
    img: solution,
    name: "Albert Flores",
    position: "UI/UX Designer",
  },
  {
    img: solution,
    name: "Courtney Henry",
    position: "Cyber Expert",
  },
];
