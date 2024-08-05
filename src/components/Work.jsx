import React from 'react';
import work1 from "/icons/work1.svg";
import work2 from "/icons/work2.svg";
import work3 from "/icons/work3.svg";

const Work = () => {
  return (
<section className="py-20 bg-green-200 ">
    <div className="max-width ">
       <div className='bg-[#05092B] py-24 px-28'>
        
       <p className="text-md font-bold text-[#351EE0] uppercase pl-2 pb-3">
       Features & Support
          </p>

          <h1 className="text-white text-5xl font-semibold pb-6">
          Simplify IT for Enhanced the a <br></br>Productivity
          </h1>
        </div> 

{/* 
1st div */}
        <div className='flex gap-5 px-12'>

                <div className='w-1/3 relative bottom-12 '>
                        <div className="flex items-center justify-center absolute left-44 -top-8">
                        <img src={work1} alt="icon" className='bg-blue-700 py-2 px-2 rounded-md' />
                        </div>

                        <div className='bg-white py-10 text-center rounded-md px-6'>
                        <h4 className='text-lg font-bold py-4'>Data Master Cyber</h4>

                                <p className='py-4'>Information Technology is a broad category that think a encom passesractices</p>
                                <button  className='text-[#05092B] font-bold text-lg'>Read More</button>
                        </div>
                </div>

                {/* 2nd  */}
                <div className='w-1/3 relative bottom-12'>
                        <div  className="flex items-center justify-center absolute left-44 -top-8">
                        <img src={work2} alt="" className='bg-blue-700 py-2 px-2 rounded-md' />
                         </div>

                        <div className=' bg-white py-10  text-center rounded-md px-6'>
                                <h4 className='text-lg font-bold py-4'>Data Master Cyber</h4>
                                <p className='py-4'>Information Technology is a broad category that think a encom passesractices</p>
                                <button className='text-[#05092B] font-bold text-lg'>Read More</button>
                        </div>
                </div>

                {/* 3rd */} 
                <div className='w-1/3 relative bottom-12 '>
                        <div  className="flex items-center justify-center absolute left-44 -top-8">
                        <img src={work3} alt="" className='bg-blue-700 py-2 px-2 rounded-md' />
                        </div>

                        <div className='bg-white py-10 text-center rounded-md px-6 ' >
                       
                                <h4 className='text-lg font-bold py-4'>Data Master Cyber</h4>
                                <p className='py-4'>Information Technology is a broad category that think a encom passesractices</p>
                                <button  className='text-[#05092B] font-bold text-lg'>Read More</button>
                        </div>
                </div>
        </div>
    </div>
    
    </section>
  )
}

export default Work