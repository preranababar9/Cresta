import React, { useState } from "react";
import logo1 from "/logo/logo1.svg";
import announce from "/home/announce.svg";
import socials from "/home/socials.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full top-0 absolute">
      <header className="w-full max-w  h-[12vh]   flex  max-width ">
        {/* logo div */}
        <div className=" bg-[#3F74EF] w-44 h-12vh flex justify-center items-center max-lg:hidden">
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

          <div className="flex items-center justify-between lg:hidden">
            <div className=" bg-[#3F74EF] w-36 h-10vh flex justify-center items-center">
              <img src={logo1} alt="logo" className="w-24 h-16" />
            </div>

            {/* responsive */}
            {!open ? (
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden text-black flex flex-end "
              >
                <GiHamburgerMenu size={24} className="" />
              </button>
            ) : (
              <button
                onClick={() => setOpen(false)}
                className="lg:hidden text-white z-20 "
              >
                <RxCross1 size={24} />
              </button>
            )}

            {open && (
              <div className="  bg-blue-500 absolute flex flex-col  left-0 top-0 h-fit w-full md:hidden z-10 "  data-aos="fade-left">
                <div>
                <ul className=" flex gap-6 text-white  text-xl items-start px-10 flex-col py-16 font-medium">
                  <Link
                    to="/home"
                    className="hover:text-black duration-300 font-semibold"
                  >
                    Home
                  </Link>

                  <Link
                    to="/home"
                    className="hover:text-black duration-300 font-semibold"
                  >
                    About Us
                  </Link>

                  <Link>Services</Link>

                  <Link
                    to="/home"
                    className="hover:text-black duration-300 font-semibold"
                  >
                    Projects
                  </Link>

                  <Link
                    to="/home"
                    className="hover:text-black duration-300 font-semibold"
                  >
                    Blog
                  </Link>

                  <Link
                    to="/home"
                    className="hover:text-black duration-300 font-semibold"
                  >
                    Solution
                  </Link>
                </ul>
                </div>
                <button className="bg-slate-500 ml-8 text-white font-medium w-1/2 mb-5   py-3 px-8 rounded-md ">
                  Book Now
                </button>
               </div>
              
            )}
          </div>

          {/* navlinks */}
          <div className="flex justify-between items-center text-lg max-lg:hidden py-3  px-6">
            <ul className=" flex gap-8 items-center font-medium">
              <Link
                to="/home"
                className="hover:text-blue-700   duration-300 font-semibold"
              >
                Home
              </Link>

              <Link
                to="/home"
                className="hover:text-blue-700 duration-300 font-semibold"
              >
                About Us
              </Link>

              <Link
                href="#"
                className="hover:text-blue-700 duration-300 font-semibold"
              >
                Services
              </Link>

              <Link
                href="#"
                className="hover:text-blue-700 duration-300 font-semibold"
              >
                Projects
              </Link>

              <Link
                href="#"
                className="hover:text-blue-700 duration-300 font-semibold"
              >
                Blog
              </Link>

              <Link
                href="#"
                className="hover:text-blue-700 duration-300 font-semibold"
              >
                Solution
              </Link>
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
