import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-around items-center bg-slate-300 w-full h-[450px] sm:h-[600px]">
      <div className="flex flex-col justify-center   ">
        <h2 className="text-[16px] md:text-[20px] sm:text-[26px] font-medium">NEW ARRIVALS ONLY</h2>
        <div className="leading-none" >
          <div className="flex items-center gap-[20px]">
            <p className="text-[50px] md:text-[100px] font-medium">new</p>
            <img src="src/assets/hand_icon.png" alt=""className=" w-[105px]"/>
          </div >
          <p className="text-[50px] sm:text-[75px] md:text-[100px] font-medium ">collections</p>
          <p className="text-[50px] sm:text-[75px] md:text-[100px] font-medium">for everyone</p>
        </div>
        <div className="flex justify-center items-center  gap-4 w-[120px] sm:w-[240px] h-12 sm:h-16 mt-9 rounded-[75px] bg-pink-600 text-white text-sm sm:text-xl font-normal hover:bg-pink-500 cursor-pointer ">
          <div className="">Shop Now </div>
          <img src="src/assets/arrow.png" alt="" />
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center">
        <img src="src/assets/hero_image.png" alt="" className="md:w-[400px]" />
      </div>
    </div>
  );
};

export default Hero;
