import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-around items-center bg-slate-200 pb-11 ">
      <div className=" leading-none">
        <div className="my-6">
          <h3 className="text-[45px]"><i>Special Deal</i></h3>
          <p className="text-[80px]">NEW OFFER!!</p>
        </div>
        <div className="inline text-[65px] bg-red-800 text-white px-2 rounded s">
          70% OFF
        </div>
      </div>
      <div>
        <img src="src/assets/banner.png" alt="" className="hidden lg:flex" />
      </div>
    </div>
  );
};

export default Banner;
