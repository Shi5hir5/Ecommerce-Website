import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector  } from 'react-redux'


const Navbar = () => {

  const cartCount = useSelector((state)=>state.cart.cartCount);

  return (
    <div className='flex justify-around items-center bg-slate-200 text-xl py-4 '>
      <div className='flex items-center text-2xl font-medium '>
        <img src="src/assets/elogo.png" alt="logo" className='w-12' />
        <p>E-Mall</p>
      </div>
      <div className='hidden   lg:flex'>
        <ul className=' *:mx-5 *:text-slate-700'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>

        </ul>
      </div>
      <div className='flex '>
        <Link to="/login"><button className='bg-slate-100 px-5 py-1 rounded-3xl mx-5 hover:bg-pink-400 hover:text-white'>Login</button></Link>
        
        <Link to="/cart"  className='flex'><img src="src/assets/cart.png" alt="cart" className='w-10 h-8' /><sup ><span className='bg-red-500 text-white text-xs px-1 rounded-[100px] mt-2 '>{cartCount}</span></sup></Link>
      </div>
    </div>
  )
}

export default Navbar