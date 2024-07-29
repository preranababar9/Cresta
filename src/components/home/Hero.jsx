import React from 'react'
import Frame from "/home/Frame.svg"


const Hero = () => {
  return (
    <div className='h-[100vh] py-20 '>
       <div className='max-width bg-blue-200 mt-7 flex items-center  '>
             <div className='pl-8'>
            <p className='text-md font-bold text-[#351EE0] uppercase pl-2 pb-4'>
            Pro Tech Consult</p>

            <h1 className='text-[#05092B] text-7xl font-bold pb-6'>
            Drive Efficiency a with IT 
            </h1>

            <p className='text-md font-normal text-[#05092B] pb-8'>
            We have been operating foWe have been operating for over a decade, providing top-notch services to our clients and
            </p>

            <button className='bg-[#351EE0] hover:bg-blue-500 text-white font-medium py-4 px-8 '>Read More</button>
             </div>

              <div className=''>
                <img src={Frame} alt="Frame" />
              </div>
       </div>
      
        </div>
  )
}

export default Hero