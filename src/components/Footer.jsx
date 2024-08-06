import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-slate-500 flex justify-around items-center h-[210px] w-full  relative bottom-0'>
      <div>
        <img src="src/assets/emall.png" alt="" className='hidden lg:flex w-[190px] h-[210px] '/>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='text-lg font-medium'>Connect us with:</p>
        <a className='flex items-center gap-2 '><FaFacebookSquare />  facebook</a>
        <a className='flex items-center gap-2'><FaInstagram />instagram</a>
        <a className='flex items-center gap-2'><CiYoutube />youtube</a>
        <a className='flex items-center gap-2'><FaTwitterSquare />        twitter</a>
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-lg font-medium'>Pages:</h2>
          <Link to="/" className='underline'>Home</Link >
          <Link to="/about"className='underline'>About</Link >
          <Link to="/products"className='underline'>Products</Link >
          <Link to="/login"className='underline'>Login</Link>
        
      </div>
    </div>
  )
}

export default Footer