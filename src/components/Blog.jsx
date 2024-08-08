import React from "react";
import blog1 from "/images/blog1.svg";
import comment from "/icons/comment.svg";
import admin from "/icons/admin.svg";

const Blog = () => {
  return (
    <section className="py-20">
      <div className="max-width">
        <div className="mb-6">
          <p className="text-lg font-bold text-[#351EE0] uppercase text-center  pb-3">
            Our Latest Blog And News
          </p>

          <h1 className=" text-5xl font-bold pb-6 text-center  ">
            Empower Your Business <br></br>with Technology
          </h1>
        </div>

        <div className="w-full flex justify-evenly flex-wrap ">

                {blog.map((item, index) => (
                           <div className="w-[30%] hover:scale-105 duration-300">
                           <img src={blog1} alt="" />
               
                           <div className="hover:bg-blue-300  flex justify-around py-2">
                             <div className="flex items-center gap-2 ">
                               <img src={comment} alt="" className="h-5" />
                               <p className=" text-black ">Comments(3)</p>
                             </div>
               
                             <div className="flex items-center gap-2">
                               {" "}
                               <img src={admin} alt="" className="h-5" />
                               <p className=" text-black">By Admin</p>
                             </div>
                           </div>
               
                           <h4 className=" text-lg font-bold px-16 pt-6">
                             Unleash the Power of IT Unlock Your Business
                           </h4>
                           <button className=" text-md font-bold px-16 pt-6">Read More</button>
                         </div>
                ))}
       
        </div>
      </div>
    </section>
  );
};

export default Blog;

const blog = [
        {
                img : blog1,
                comimg : comment,
                textcom : "Comments(3)",
                adminimg : admin,
                admintext : "By Admin",
                head : " Unleash the Power of IT Unlock Your Business",
                button : "Read More"
        },
        {
                img : blog1,
                comimg : comment,
                textcom : "Comments(3)",
                adminimg : admin,
                admintext : "By Admin",
                head : " Unleash the Power of IT Unlock Your Business",
                button : "Read More"
        },
        {
                img : blog1,
                comimg : comment,
                textcom : "Comments(3)",
                adminimg : admin,
                admintext : "By Admin",
                head : " Unleash the Power of IT Unlock Your Business",
                button : "Read More"
        }
]
