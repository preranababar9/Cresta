import React from 'react'
import count1 from "/icons/count1.svg";

const Counter = () => {
  return (
        <section className='py-20 bg-[#351EE0]'>
    <div className='max-width w-full flex'>
<div className='w-1/2' >
<p className="text-sm font-bold  text-white uppercase pl-2 pb-3">
        business
          </p>
          <h2 className="text-white text-5xl  font-semibold pb-10">
          Stay Ahead with <br></br>the Cutting-Edge IT
          </h2>

          <button className="bg-[#351EE0] border-solid border-2 border-white hover:bg-blue-500 text-white font-medium py-3 px-6">
            Read More
          </button>
</div>

<div className='w-1/2 flex flex-wrap justify-evenly'>

{count.map((item, index) => (
 <div className='flex gap-5 w-[50%] items-center'>
 <img src={count1} alt="" className='h-16' />

 <div className='flex flex-col items-start border-solid border-2 border-white py-4 px-3 '>
 <p className='text-white text-4xl font-bold'> 200+</p>
 <p className='text-white text-sm '>Team Members</p>
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
                img : {count1},
                num : 200,
                text :"team members"
        },
        {
                img : {count1},
                num : 200,
                text :"team members"
        },
        {
                img : {count1},
                num : 200,
                text :"team members"
        },
        {
                img : {count1},
                num : 200,
                text :"team members"
        },
]