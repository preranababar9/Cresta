import React from 'react';
import work1 from "/icons/work1.svg";
import work2 from "/icons/work2.svg";
import work3 from "/icons/work3.svg";

const Work = () => {
  return (
<section className="py-20   ">
    <div className="max-width ">
       <div className='py-24 bg-[#05092B]  px-28'>
        
       <p className="text-md font-bold text-[#351EE0] uppercase pl-2 pb-3">
       Features & Support
          </p>

          <h1 className="text-white text-5xl font-semibold pb-6">
          Simplify IT for Enhanced the a <br></br>Productivity
          </h1>
        </div> 

{/* 
1st div */}
        <div className='flex gap-6 px-12 '>

                {workcard.map((item, index) => (
                         <div key={index} className=' w-1/3 relative bottom-12 hover:scale-105 duration-300 '>
                         <div className="flex items-center justify-center absolute left-44 -top-8">
                         <img src={item.logo} alt="icon" className='bg-blue-700 py-2 px-2 rounded-md' />
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