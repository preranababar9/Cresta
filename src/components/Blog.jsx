import React from "react";
import blog1 from "/images/blog1.svg";
import comment from "/icons/comment.svg";
import admin from "/icons/admin.svg";
import blogimg from "/images/blogimg.jpg";

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="max-width">
        <div className="mb-6">
          <p className="text-lg font-bold text-[#351EE0] uppercase text-center  pb-3">
            Our Latest Blog And News
          </p>

          <h1 className=" lg:text-5xl text-2xl font-bold pb-6 text-center  ">
            Empower Your Business <br></br>with Technology
          </h1>
        </div>

        <div className="w-full flex max-md:flex-col max-md:gap-10 items-center justify-evenly flex-wrap ">
          {blog.map((item, index) => (
            <div
              key={index}
              className="lg:w-[30%] border-solid border-2 py-5 border-gray-300 w-[90vw] flex flex-col items-center   lg:hover:scale-105 lg:duration-300"
            >
              <img src={item.img} alt="" className="w-3/4" />

              <div className="lg:hover:bg-blue-300 lg:w-3/4 w-full flex justify-around py-2">
                <div className="flex items-center lg:gap-2 gap-1 ">
                  <img src={item.comimg} alt="" className="h-5" />
                  <p className=" text-black ">{item.textcom}</p>
                </div>

                <div className="flex items-center gap-2">
                  {" "}
                  <img
                    src={item.adminimg}
                    alt=""
                    className="h-5 object-cover"
                  />
                  <p className=" text-black">{item.admintext}</p>
                </div>
              </div>

              <h4 className=" lg:text-lg text-center text-md font-bold px-16 pt-6">
                {item.head}
              </h4>
              <button className="bg-blue-300 text-md font-bold px-10 py-3 mt-3">
                {item.button}
              </button>
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
    img: blogimg,
    comimg: comment,
    textcom: "Comments(3)",
    adminimg: admin,
    admintext: "By Admin",
    head: " Unleash the Power of IT Unlock Your Business",
    button: "Read More",
  },
  {
    img: blogimg,
    comimg: comment,
    textcom: "Comments(5)",
    adminimg: admin,
    admintext: "By Admin",
    head: " Experience the Future of IT the Simplify IT for Enhanced",
    button: "Read More",
  },
  {
    img: blogimg,
    comimg: comment,
    textcom: "Comments(10)",
    adminimg: admin,
    admintext: "By Admin",
    head: "Stay Ahead with Cutting-Edge IT Solutions",
    button: "Read More",
  },
];
