import React from 'react'
import count1 from "/icons/count1.svg";
import count2 from "/icons/count2.svg";
import count3 from "/icons/count3.svg";
import count4 from "/icons/count4.svg";

const Counter = () => {
  return (
        <section className='py-20 bg-[#351EE0]'>
    <div className='max-width w-full flex max-md:flex-col max-md:gap-10'>
<div className='lg:w-1/2 ' >
<p className="text-sm font-bold  text-white uppercase pl-2 pb-3">
        business
          </p>
          <h2 className="text-white text-5xl lg:w-2/3 w-full max-md:text-4xl  font-semibold pb-10">
          Stay Ahead with the Cutting-Edge IT
          </h2>

          <button className="bg-[#351EE0] border-solid border-2 border-white hover:bg-blue-500 text-white font-medium py-3 px-6">
            Read More
          </button>
</div>

<div className='lg:w-1/2   flex  max-md:gap-4 flex-wrap justify-evenly '>

{count.map((item, index) => (
 <div className='flex  gap-5 lg:w-[50%] relative items-center'>
 <img src={item.img} alt="" className='h-14 max-md:h-12 absolute -left-6' />

 <div className='flex flex-col lg:items-start border-solid border-2  lg:w-2/3 w-[160px] h-[100px] border-white py-4 px-8 '>
 <p className='text-white text-4xl max-md:text-2xl font-bold'> {item.num}</p>
 <p className='text-white lg:text-sm text-xs '>{item.text}</p>
 </div>
</div>
))}
       
</div>
    </div>
    </section>
  )
}

export default Counter

const count = [
        {
                img : count1,
                num : "200+",
                text :"Team members"
        },
        {
                img : count2,
                num : "900+",
                text :"Client Review"
        },
        {
                img : count3,
                num : "20+",
                text :"Winning Awards"
        },
        {
                img : count4,
                num : "10k+",
                text :"Complete Projects"
        },
]