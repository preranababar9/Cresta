import React from "react";
import test1 from "/images/test1.svg";
import star from "/icons/star.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonals = () => {
        var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
              };
  return (
    <section className="py-20">
      <div className="max-width">
        <div className="mb-6">
          <p className="text-lg font-bold text-[#351EE0] uppercase text-center  pb-3">
            Clients Testimonial
          </p>

          <h1 className=" text-5xl font-bold pb-6 text-center  ">
            Simplify IT for Enhanced<br></br> Productivity
          </h1>
        </div>

      
<div className="flex flex-col gap-10">


        {test.map((item, index) => (
                
          <div
            key={index}
            className="flex  justify-evenly gap-5 w-full h-full  px-6 py-8  items-center border-solid border-2 border-[#CCCCCC]" 
          >
            <div className="w-[20%] ">
              <img src={item.img} alt="" className="object-cover" />
            </div>

            <div className="w-[80%] px-6 ">
              <h5 className="text-lg font-bold pb-1">{item.name}</h5>
              <p className="text-[#737373] text-sm pb-6">{item.position}</p>
              <p className="text-[#05092B] text-lg pb-4 ">{item.review}</p>
              <img src={item.star} alt="" className="h-6 " />
            </div>
          </div>
          
        ))}
       
        </div>
        
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
];
