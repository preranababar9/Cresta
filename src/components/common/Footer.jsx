import React from "react";
import logo from "/logo/footerlogo.svg";
import contact from "/logo/contact.svg";
import socials from "/logo/socials.svg";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <section className="pt-20 bg-blue-950">
      <div className="max-width ">
        <div className="flex max-md:flex-col max-md:gap-6 flex-wrap justify-evenly max-md:px-10  lg:mb-14">
          <div className="">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="" className="lg:h-8 h-12" />
              <h2 className="text-white lg:text-2xl text-3xl font-bold">Cresta</h2>
            </div>

            <p className="text-[#FFFFFF] text-md mb-6">
              Lorem Ipsum is simply is is the<br></br> dumiomy is text Lorem
            </p>

            <div className="flex items-center gap-3 mb-6">
              <img src={contact} alt="" />
              <h2 className="text-white text-md">(+888) 123 456 765</h2>
            </div>

            <img src={socials} alt="" />
          </div>

          <div>
            <h2 className="text-white text-xl font-bold lg:mb-6 mb-4">Services</h2>
            <ul className="text-white flex flex-col lg:gap-3 gap-2 text-md">
              <li>
                <a href="#about"> UI Design</a>
              </li>
              <li>
                <a href="#about"> UX Design</a>
              </li>
              <li>
                <a href="#about"> Web Deveopment</a>
              </li>
              <li>
                <a href="#about"> Digital Marketing</a>
              </li>
              <li>
                <a href="#about"> Cyber Security</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-6">Useful Links</h2>
            <ul className="text-white flex flex-col lg:gap-3 gap-2  text-md">
              <li>
                <a href="#about"> About Us </a>
              </li>
              <li>
                <a href="#about"> Our Team</a>
              </li>
              <li>
                <a href="#about"> Recent News</a>
              </li>
              <li>
                <a href="#about"> Projects</a>
              </li>
              <li>
                <a href="#about"> All Services</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-6">Contact US</h2>

            <p className="text-[#FFFFFF] text-md mb-6">
              Lorem Ipsum is simply is is the<br></br> dumiomy is text Lorem
            </p>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 bg-white text-black border pb-3 mb-10 border-slate-300"
            ></input>
          </div>
        </div>

        <hr></hr>
        <div className="flex max-md:flex-col-reverse lg:justify-around max-md:text-center  lg:gap-28 gap-5 py-6  text-white">
          <p>© Cresta 2024 | All Rights Reserved</p>

          <div className="flex gap-6 text-white">
            <a>Terms & Condition</a>
            <a>Privacy Policy</a>
            <a>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
