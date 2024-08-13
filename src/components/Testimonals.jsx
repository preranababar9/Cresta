import React from "react";
import test1 from "/images/test1.svg";
import star from "/icons/star.svg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Testimonals = () => {
        
  return (
    <section className="py-20">
      <div className="max-width">
        <div className="mb-6">
          <p className="text-lg font-bold text-[#351EE0] uppercase text-center  pb-3">
            Clients Testimonial
          </p>

          <h1 className=" text-5xl max-md:text-3xl font-bold pb-6 text-center  ">
            Simplify IT for Enhanced<br></br> Productivity
          </h1>
        </div>

      
<Swiper className="flex flex-col gap-10">


        {test.map((item, index) => (
                
          <SwiperSlide
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}

            key={index}
            className="flex  max-md:flex-col justify-evenly gap-5 w-full h-full  lg:px-6 lg:py-8 px-3 py-5  items-center border-solid border-2 border-[#CCCCCC]" 
          >
            <div className="lg:w-[20%]   max-md:hidden">
              <img src={item.img} alt="" className="object-cover " />
            </div>

            <div className="lg:w-[80%] px-6 ">
              <h5 className="text-lg font-bold pb-1">{item.name}</h5>
              <p className="text-[#737373] text-sm pb-6">{item.position}</p>
              <p className="text-[#05092B] lg:text-lg text-md   pb-4 ">{item.review}</p>
              <img src={item.star} alt="" className="lg:h-6 h-4" />
            </div>
          </SwiperSlide>
          
        ))}
       
        </Swiper>
        
      </div>
    </section>
  );
};

export default Testimonals;

const test = [
  {
    img:  test1,
    name: "James Anderson",
    position: "Software Developer",
    review:
      "Information Technology (IT) is a broad category that encompasses variou technologies and practices related to computer systems, software development, networking, datae mnt,cybrs ecurity, and more. IT professionals play a crucial role in ensuring",
    star:  star ,
  },
  {
    img:  test1 ,
    name: "James Anderson",
    position: "Software Developer",
    review:
      "Information Technology (IT) is a broad category that encompasses variou technologies and practices related to computer systems, software development, networking, datae mnt,cybrs ecurity, and more. IT professionals play a crucial role in ensuring",
    star:  star,
  },
  {
    img:  test1 ,
    name: "James Anderson",
    position: "Software Developer",
    review:
      "Information Technology (IT) is a broad category that encompasses variou technologies and practices related to computer systems, software development, networking, datae mnt,cybrs ecurity, and more. IT professionals play a crucial role in ensuring",
    star:  star,
  },
  {
    img:  test1 ,
    name: "James Anderson",
    position: "Software Developer",
    review:
      "Information Technology (IT) is a broad category that encompasses variou technologies and practices related to computer systems, software development, networking, datae mnt,cybrs ecurity, and more. IT professionals play a crucial role in ensuring",
    star:  star,
  },
  {
    img:  test1 ,
    name: "James Anderson",
    position: "Software Developer",
    review:
      "Information Technology (IT) is a broad category that encompasses variou technologies and practices related to computer systems, software development, networking, datae mnt,cybrs ecurity, and more. IT professionals play a crucial role in ensuring",
    star:  star,
  }
];
