import React from 'react'

const CategoryCards = ({image,title,category,price,id}) => {

  if(id==2 || id==5 ||id==13 ||id==4 ){
  return (
    <div className='my-7'>
      <div className=" bg-white rounded-lg w-64 sm:w-96 p-3 shadow-lg shadow-slate-400 h-full *:mt-2 ">
        <img src={image} alt="" className="ml-6 w-40 h-40 sm:w-60 sm:h-60 " />
        <hr className='m' />
        <p className="text-slate-800  text-lg font-medium underline">{category}</p>
        <h2 className="text-black text-xl font-medium ">{title}</h2>

        <p className='text-lg font-semibold text-red-700'>{price}$</p>
      </div>
    </div>
  )
}
}

export default CategoryCards;