import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../components/services/CartSlice";


const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cart);


  const dispatch = useDispatch();


  const [price,setPrice] = useState(0)

  

  const handlePrice  = () => {
    let p = 0
    cartItem.map((item)=>{
      p+= item.price
    })
    setPrice(p)
  }

  useEffect(()=>{
    handlePrice()
  })
  
  return (
    <>
      
      <div className=" ">
        <div className="bg-slate-50 py-10">
        <div className="flex justify-evenly bg-slate-50 gap-1 ">
          <p className="text-xl font-medium">Item</p>
          <p className="text-xl font-medium">Title</p>
          <p className="text-xl font-medium ml-14">Price</p>
        </div>
        </div>  
        <hr className="bg-black border border-slate-400"/>
        <div>
          {cartItem.map((item) => {
            return (
              <>
                <div className="my-10 ">
                  <div className="flex justify-evenly  mb-5">
                    <div className="flex flex-col gap-7 items-center">
                      <img
                        src={item.image}
                        alt=""
                        className="ml-3 w-40 h-40 "
                      />
                    </div>
                    <div className="flex flex-col gap-7 items-center">
                      <h2 className="text-black text-2xl font-medium w-[200px]">
                        {item.title}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-7 items-center mr-12">
                      <p className="text-red-600">{item.price}$</p>
                      <button className="p-2 bg-red-700 text-white rounded-lg" onClick={()=>{dispatch(removeFromCart(item))}} >Remove</button>
                      
                    </div>
                  </div>
                  <hr />
                </div>
                
              </>
            );
          })}
           <div className="flex justify-around my-8 text-xl font-semibold gap-[8rem]">
            <p>Total:</p>
            <p className="text-red-600"> {price}$</p>
          </div> 
        </div>
      </div>
      
    </>
  );
};

export default Cart;
