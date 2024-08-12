import React, { useState } from "react";
import logo1 from "/logo/logo1.svg";
import announce from "/home/announce.svg";
import socials from "/home/socials.svg";
import { GiHamburgerMenu } from "react-icons/gi";

import { RxCross1 } from "react-icons/rx";

const Header = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className="w-full top-0 absolute">
      <header className="w-full max-w  h-12vh   flex  max-width ">
        {/* logo div */}
        <div className=" bg-[#3F74EF] w-44 h-12vh flex justify-center items-center max-md:hidden">
          <img src={logo1} alt="logo" className="w-28 h-20" />
        </div>

        {/* info  */}
        <div className=" w-full  ">
          {/* announcement */}
          <div className="flex justify-between items-center max-md:hidden bg-blue-200 py-1  px-6">
            <div className="flex gap-2">
              <img src={announce} alt="anouncement" className="h-6 w-6" />
              <p className="font-bold text-md">Sunday-Friday :</p>
              <p>9 am- 8pm</p>
            </div>

            <img src={socials} alt="socials" className="w-32 h-5" />
          </div>

<div className="flex items-center justify-between md:hidden">
          <div className=" bg-[#3F74EF] w-44 h-12vh flex justify-center items-center">
          <img src={logo1} alt="logo" className="w-28 h-20" />
        </div>
{!open ? (
   <button onClick={() => setOpen(true)} className="md:hidden text-black flex flex-end ">
  <GiHamburgerMenu  size={24} className="" />
  </button>
) :
(
  <button onClick={() => setOpen(false)} className="md:hidden text-black ">
  <RxCross1 size={20} />
  </button>
)}
{open && (
    <div className="  bg-blue-500 absolute flex flex-col  left-0 top-20 h-fit w-full md:hidden z-20 ">
    <ul className=" flex gap-2 text-white  text-lg items-center flex-col py-5 font-medium">
      <li>
        <a
          href="#"
          className="hover:text-black duration-300 font-semibold"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-black duration-300 font-semibold"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-black duration-300 font-semibold"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-black duration-300 font-semibold"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-black duration-300 font-semibold"
        >
          Blog
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-black duration-300 font-semibold"
        >
          Page
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-black duration-300 font-semibold"
        >
          Contact
        </a>
      </li>
    </ul>

    <button className="bg-slate-500 text-white font-medium  py-3 px-8 rounded-md ">
      Book Now
    </button>
  </div>
)}
</div>

          {/* navlinks */}
          <div className="flex justify-between items-center text-lg max-lg:hidden py-3  px-6">
            <ul className=" flex gap-8 items-center font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 duration-300 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 duration-300 font-semibold"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 duration-300 font-semibold"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 duration-300 font-semibold"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 duration-300 font-semibold"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 duration-300 font-semibold"
                >
                  Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 duration-300 font-semibold"
                >
                  Contact
                </a>
              </li>
            </ul>

            <button className="bg-slate-500 text-white font-medium max-md:hidden py-3 px-8 rounded-md ">
              Book Now
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
