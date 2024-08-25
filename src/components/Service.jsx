import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Service = () => {
  return (
    <section id="solution" className="py-20">
      <div className="max-width ">

        <div className="mb-10">
          <p className="text-lg font-bold text-[#351EE0] uppercase  pb-3">
            Digital Solutions
          </p>

<div className="flex max-md:flex-col  justify-between items-center"> 
          <h1 className=" max-md:text-3xl lg:w-2/4 text-5xl font-bold pb-6  ">
            Drive Efficiency with IT the Expertise
          </h1>

          <button className=" text-black text-lg px-6 py-3 h-full border-solid border-2 border-[#351EE0]">
            See More
          </button></div>
        </div>


<Swiper
 spaceBetween={20}
 slidesPerView={1}
 onSlideChange={() => console.log('slide change')}
 onSwiper={(swiper) => console.log(swiper)}

className="flex flex-col gap-10">
{service.map((item, index) => (
        <SwiperSlide key={index} className="w-full border-solid border-2  border-[#CCCCCC] py-8 px-10 ">

        <h5 className="text-2xl font-bold pb-3 text-[#05092B]">{item.title}</h5>
        <p className="text-lg font-semibold text-[#737373]">{item.detail}</p>
</SwiperSlide>
))}
   </Swiper>     
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