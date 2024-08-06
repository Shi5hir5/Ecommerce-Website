import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center bg-slate-300 pt-14">
        <h1 className="text-[50px] text-yellow-100 font-medium bg-sky-700 px-4" >About Us</h1>
      </div>
    <div className="grid grid-cols-2 items-center justify-center h-[688px] bg-slate-300">
      <div className=" pl-64 ">
        <p className="text-3xl text-pink-700 font-semibold">At E-Mall,</p>
        <p className="text-slate-700 text-2xl text-justify mt-3 font-serif ">
          we make online shopping enjoyable, convenient, and accessible for
          everyone. We believe that shopping should be a delightful experience,
          whether you're searching for the latest fashion trends, high-tech
          gadgets, home essentials, or unique gifts. Our goal is to provide a
          seamless shopping experience that combines quality, variety, and
          exceptional customer service.
        </p>
      </div>
      <div>
        <img src="src/assets/photo.png" alt="" className="w-[800px]" />
      </div>
    </div>
    </div>
  );
};

export default About;
