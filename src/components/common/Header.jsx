import React from "react";
import logo1 from "/logo/logo1.svg";
import announce from "/home/announce.svg";
import socials from "/home/socials.svg";
const Header = () => {
  return (
    <header className="w-full max-w fixed h-12vh top-0  flex max-width z-10">

        {/* logo div */}
      <div className=" bg-[#3F74EF] w-44 h-12vh flex justify-center items-center">
        <img src={logo1} alt="logo" className="w-28 h-20" />
      </div>

{/* info  */}
      <div className=" w-full  " >

        {/* announcement */}
        <div className="flex justify-between items-center  bg-blue-200 py-1  px-6" >
          <div className="flex gap-2">
          <img src={announce} alt="anouncement" className="h-6 w-6" />
            <p className="font-bold text-md">Sunday-Friday :</p>
            <p>9 am- 8pm</p>
            </div>

          <img src={socials} alt="socials" className="w-32 h-5"/>
        </div>

{/* navlinks */}
        <div className="flex justify-between items-center text-lg py-3  px-6">
          <ul className=" flex gap-8 items-center font-medium">
            <li><a href="#" className="hover:text-blue-300 hover:text-xl">Home</a></li>
            <li><a href="#" className="hover:text-blue-300 hover:text-xl">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300 hover:text-xl">Services</a></li>
            <li><a href="#" className="hover:text-blue-300 hover:text-xl">Projects</a></li>
            <li><a href="#" className="hover:text-blue-300 hover:text-xl">Blog</a></li>
            <li><a href="#" className="hover:text-blue-300 hover:text-xl">Page</a></li>
            <li><a href="#" className="hover:text-blue-300 hover:text-xl">Contact</a></li>
          </ul>

          <button className="bg-slate-500 text-white font-medium py-3 px-8 rounded-md ">Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
