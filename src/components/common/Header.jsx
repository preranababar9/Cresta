import React from "react";
import logo1 from "/logo/logo1.svg";
import announce from "/home/announce.svg";
import socials from "/home/socials.svg";
const Header = () => {
  return (
    <header className="w-full max-w sticky h-12vh top-0 bg-pink-100 flex">

        {/* logo div */}
      <div className=" bg-[#3F74EF] w-44 h-12vh flex justify-center items-center">
        <img src={logo1} alt="logo" className="w-[138px] h-[68px]" />
      </div>

{/* info  */}
      <div className=" px-6 w-full " >

        {/* announcement */}
        <div className="flex justify-between items-center  bg-blue-300 py-1" >
          <div className="flex gap-2">
          <img src={announce} alt="anouncement" className="h-6 w-6" />
            <p className="font-bold text-md">Sunday-Friday :</p>
            <p>9 am- 8pm</p>
            </div>

          <img src={socials} alt="socials" className="w-32 h-5"/>
        </div>

{/* navlinks */}
        <div className="flex justify-between items-center bg-yellow-700 py-3">
          <ul className=" flex gap-10 items-center">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Services</a></li>
            <li><a>Projects</a></li>
            <li><a>Blog</a></li>
            <li><a>Page</a></li>
            <li><a>Contact</a></li>
          </ul>

          <button>Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
