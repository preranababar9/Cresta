import React from "react";
import logo1 from "/logo/logo1.svg";
import announce from "/home/announce.svg";
import socials from "/home/socials.svg";
const Header = () => {
  return (
    <header className="w-full sticky h-[144px] top-0 bg-pink-100">

        {/* logo div */}
      <div className=" bg-[#3F74EF] w-44 h-[144px] flex justify-center items-center">
        <img src={logo1} alt="logo" className="w-[138px] h-[68px]" />
      </div>

{/* info  */}
      <div className="flex">

        {/* announcement */}
        <div>
          <img src={announce} alt="anouncement" className="" />
            <p>Sunday-Friday:</p>
            <p>9 am- 8pm</p>

          <img src={socials} alt="socials" />
        </div>

{/* navlinks */}
        <div className="flex">
          <ul className="flex ">
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
