import React from "react";
import solution from "/images/solution.svg";
import letter from "/icons/letter.svg";
import testimon1 from "/images/testimon1.png";
import testimon2 from "/images/testimon2.png";
import testimon3 from "/images/testimon3.png";

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

        <div className="lg:flex max-sm:flex-col lg:h-full lg:justify-evenly gap-5 relative py-2 mb-6 ">
          {profile.map((item, index) => (
            <div key={index} className="h-1/2  lg:border-2 border-white border-solid p-8 ">
              {" "}
              <img src={item.img} alt="" className="object-cover" />
              <p className="text-white text-center pt-2 font-bold">
                {item.name}
              </p>
              <p className="text-white text-center pt-2">{item.position}</p>
            </div>
          ))}
        </div>

       
      {/* newsletter  */}
        {/* <div className="bg-[#351EE0] flex justify-around max-md:hidden w-[65%]  items-center py-8 mt-10  ">
          <img src={letter} alt="" className="h-14" />
          <h4 className="text-white text-3xl leading-10 font-bold text-center ">
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
        </div> */}
      </div>
    </section>
  );
};

export default Solutions;

const profile = [
  {
    img: testimon1,
    name: "Courtney Henry",
    position: "Web Designer",
  },
  {
    img: testimon2,
    name: "Albert Flores",
    position: "UI/UX Designer",
  },
  {
    img: testimon3,
    name: "Courtney Henry",
    position: "Cyber Expert",
  },
];
