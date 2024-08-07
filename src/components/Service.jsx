import React from "react";

const Service = () => {
  return (
    <section className="py-20">
      <div className="max-width ">

        <div className="mb-10">
          <p className="text-lg font-bold text-[#351EE0] uppercase  pb-3">
            Digital Solutions
          </p>

<div className="flex justify-between"> 
          <h1 className=" text-5xl font-bold pb-6  ">
            Drive Efficiency with IT<br></br> the Expertise
          </h1>

          <button className=" text-black text-lg px-4  border-solid border-2 border-[#351EE0]">
            See More
          </button></div>
        </div>


<div className="flex flex-col gap-10">
{service.map((item, index) => (
        <div key={index} className="w-full border-solid border-2  border-[#CCCCCC] py-8 px-10 hover:scale-105 duration-300">

        <h5 className="text-2xl font-bold pb-3 text-[#05092B]">{item.title}</h5>
        <p className="text-lg font-semibold text-[#737373]">{item.detail}</p>
</div>
))}
   </div>     
      </div>
    </section>
  );
};

export default Service;


const service = [
        {
                title : "Web Development",
                detail : "Information Technology is a broad category that encompasses various technologies"
        },
        {
                title : "UI/UX Design Experience",
                detail : "Information Technology is a broad category that encompasses various technologies"
        },
        {
                title : "Digital Marketing",
                detail : "Information Technology is a broad category that encompasses various technologies"
        },
]