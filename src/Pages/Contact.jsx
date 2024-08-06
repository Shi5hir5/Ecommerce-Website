import React from "react";

const Contact = () => {
  return (
    <div className="h-[688px]  bg-[url('src/assets/bg-img5.png')] bg-cover flex justify-center items-center  ">
      <div className=" flex flex-col items-center p-10 ">
      <h1 className="text-[55px] text-slate-700 mb-8">Contact Us</h1>
        <div className=" bg-slate-300 gap-6 p-10 rounded-md bg-opacity-70 ">
          
          <div className="flex flex-col">
            <form action="" className="gap-9">
              <label htmlFor="">Username:</label><br />
              <input type="text" className="my-5 text-lg  px-5 py-2"  placeholder="Your username..." />
              <br />
              <label htmlFor="">Email:</label><br />
              <input type="text" className="my-5 text-lg px-5 py-2" placeholder="Your email..."/>
              <br />
              <label htmlFor="">Your Message:</label><br />
              <textarea className=' p-2 my-5 w-full' name="message" rows="4" placeholder='Message...'></textarea>
              <br />
              <input type="submit" className="bg-violet-500 text-lg px-5  py-2 rounded-lg ml-24 cursor-pointer" />
            </form>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
