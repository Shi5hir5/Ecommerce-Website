import React from "react";

const Category = () => {
  return (
    <>
      <div className="bg-slate-200 py-8 pb-24 h-full">
        <hr className="bg-black font-medium" />
        <div>
          <h1 className="text-center text-[50px] font-medium underline underline-offset-[20px] decoration-pink-500  text-pink-900">
            Our Categories
          </h1>
        </div>

        <div className="flex justify-center flex-wrap gap-20 sm:gap-40  mt-20 font-serif font-semibold  ">
          <div>
          <div className="p-5 h-[250px] w-[250px] bg-slate-300 flex flex-col justify-center items-center rounded-full drop-shadow-lg">
            <img
              src="src/assets/category/tshirt.png"
              alt=""
              className="w-[170px] h-[150px] mt-2"
            />
            <p className="text-2xl text-slate-800">Clothes</p>
          </div>
          <p className="text-center mt-3 text-xl font-mono font-semibold text-pink-700">10 Products</p>
          </div>
          <div>
          <div className="p-5 h-[250px] w-[250px] bg-slate-300 rounded-full  flex flex-col justify-center items-center drop-shadow-lg ">
            <img
              src="src/assets/category/electronics.png"
              alt=""
              className="w-[150px] h-[150px]"
            />
            <p className="text-2xl text-slate-800">Electronics</p>
          </div>
          <p className="text-center mt-3 text-xl font-mono font-semibold text-pink-700">6 Products</p>

          </div>
          <div>
          <div className="p-5 h-[250px] w-[250px] bg-slate-300 rounded-full flex flex-col justify-center items-center drop-shadow-lg">
            <img
              src="src/assets/category/jwellery.png"
              alt=""
              className="w-[150px] h-[150px]"
            />
            <p className="text-2xl text-slate-800">Jwellery</p>
          </div>
          <p className="text-center mt-3 text-xl font-mono font-semibold text-pink-700">4 Products</p>

          </div>
          <div>
          <div className="p-5 h-[250px] w-[250px] bg-slate-300 rounded-full flex flex-col justify-center items-center drop-shadow-lg">
            <img
              src="src/assets/category/beauty.png"
              alt=""
              className="w-[150px] h-[150px]"
            />
            <p className="text-2xl text-slate-800">Beauty</p>
          </div>
          <p className="text-center mt-3 text-xl font-mono font-semibold text-pink-700">0 Products</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
