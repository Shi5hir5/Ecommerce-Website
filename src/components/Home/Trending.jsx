import React from "react";
import { useState,useEffect } from "react";
import CategoryCards from "./TrendingCards";

const Trending = () => {

  const [trendingProduct,setTrendingProduct]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then((response) => response.json())
    .then((data)=> setTrendingProduct(data))
  },[]);
  
  
   


  return (
    <>
      <div className="flex flex-col gap-11 bg-slate-100 pt-11">
        <h1 className=" text-orange-700 text-[55px] pl-20 shadow-lg shadow-slate-300 drop-shadow-2xl">Trending Products</h1>
        
      </div>
      <div className='flex justify-evenly flex-wrap bg-gray-100 p-0'>
      {
        trendingProduct.map((item)=>(
          <>
          <CategoryCards key={item.id} id={item.id} title={item.title}  category={item.category} price={item.price} image={item.image}/>
          
          </>

        ))
      }
    </div>
    </>
  );

}

export default Trending;
