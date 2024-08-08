import React from 'react'
import logo from "/logo/footerlogo.svg";
import contact from "/logo/contact.svg";
import socials from "/logo/socials.svg";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <section className='pt-20 bg-blue-950'>
    <div className='max-width '>
     <div className='flex justify-evenly mb-14'>

      <div className=''>

        <div className='flex items-center gap-3 mb-6'>
        <img src={logo} alt="" className='h-8' />
        <h2 className='text-white text-2xl font-bold'>Cresta</h2></div>

        <p className='text-[#FFFFFF] text-md mb-6'>Lorem Ipsum is simply is is the<br></br> dumiomy is text Lorem</p>

        <div className='flex items-center gap-3 mb-6'>
        <img src={contact} alt="" />
        <h2 className='text-white text-md'>(+888) 123 456 765</h2></div>

        <img src={socials} alt="" />
      </div>

      <div>
      <h2 className='text-white text-xl font-bold mb-6'>Services</h2>
      <ul className='text-white flex flex-col gap-3 text-md'>
       <li><a>  UI Design</a></li>
       <li><a>  UX Design</a></li>
       <li><a>  Web Deveopment</a></li>
       <li><a>  Digital Marketing</a></li>
       <li><a>  Cyber Security</a></li>
      </ul>
      </div>

      <div>
      <h2 className='text-white text-xl font-bold mb-6'>Services</h2>
      <ul className='text-white flex flex-col gap-3 text-md'>
       <li><a>  UI Design</a></li>
       <li><a>  UX Design</a></li>
       <li><a>  Web Deveopment</a></li>
       <li><a>  Digital Marketing</a></li>
       <li><a>  Cyber Security</a></li>
      </ul>
      </div>

      <div>
      <h2 className='text-white text-xl font-bold mb-6'>Services</h2>
      
      <p className='text-[#FFFFFF] text-md mb-6'>Lorem Ipsum is simply is is the<br></br> dumiomy is text Lorem</p>

      <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 bg-white text-black border border-slate-300"
            ></input>
      </div>
     </div>

<hr></hr>
     <div className='flex justify-around gap-28 py-6 text-white'>
      <p>© Yoursitename  2020 | All Rights Reserved</p>

      <div className='flex gap-6 text-white'>
        <a>Terms & Condition</a>
        <a>Privacy Policy</a>
        <a>Contact Us</a>
      </div>
     </div>
      </div>
    </section>
  )
}

export default Footer