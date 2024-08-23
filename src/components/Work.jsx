import React from 'react';
import work1 from "/icons/work1.svg";
import work2 from "/icons/work2.svg";
import work3 from "/icons/work3.svg";

const Work = () => {
  return (
<section className="py-20  ">
    <div className="max-width ">
       <div className='py-24  bg-[#05092B]  lg:px-28 px-8'>
        
       <p className="text-md font-bold max-md:text-center text-[#351EE0] uppercase lg:pl-2 pb-3">
       Features & Support
          </p>

          <h1 className="text-white max-md:text-center lg:w-2/3 text-3xl lg:text-5xl font-semibold pb-6">
          Simplify IT for Enhanced the a Productivity
          </h1>
        </div> 

{/* 
1st div */}
        <div className='flex gap-16 lg:px-12 px-6 max-lg:flex-col  '>

                {workcard.map((item, index) => (
                         <div key={index} className=' lg:w-1/3  w-[250px] relative bottom-12 hover:scale-105 duration-300 '>
                         <div className="flex items-center justify-center absolute max-md:left-[40%] left-36 -top-8">
                         <img src={item.logo} alt="icon" className='bg-blue-700 py-3 px-3 rounded-md' />
                         </div>
 
                         <div className='bg-white py-10 text-center rounded-md px-6 shadow-xl  '>
                         <h4 className='text-lg font-bold py-4'>{item.title}</h4>
 
                                 <p className='py-4'>{item.desc}</p>
                                 <button  className='text-[#05092B] font-bold text-lg'>{item.button}</button>
                         </div>
                 </div>

))}
               
        </div>
    </div>
    
    </section>
  )
}

export default Work

//array named workcard and objects in that 
const workcard = [
        {
               logo: work1,
               title :"Data Master Cyber",
               desc :"Information Technology is a broad category that think a encom passesractices",
               button : "Read More"
        },
        {
                logo : work2,
                title :"Data Guardians IT",
                desc :"Information Technology is a broad category that think a encom passesractices",
                button : "Read More"
         },
         {
                logo : work3,
                title :"Digital Solutions It",
                desc :"Information Technology is a broad category that think a encom passesractices",
                button : "Read More"
         }
]