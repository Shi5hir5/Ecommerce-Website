import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart,addToCartCount,  } from "../components/services/CartSlice";
import { RxCross1 } from "react-icons/rx";


const Products = () => {
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      setIsLoading(false);
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);


 

  const viewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // useEffect(() => {
  //   if (search === "") {
  //     fetchProducts();
  //   } else {
  //     const filteredProducts = products.filter((product) =>
  //       product.title.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setProduct(filteredProducts);
  //   }
  // } , [search]);
 

  return (
    <>
    <div className=" bg-gray-100 pb-7">
      <div className="flex justify-center py-5">
        <input
          type="text"
          placeholder="Enter your items"
          className="p-2 px-4 border-2 border-blue-600 "
        />
        <button className="bg-blue-600 border-2 border-blue-600 text-white p-2 ">
          Search
        </button>
      </div>
      

      <div className="flex justify-evenly flex-wrap bg-gray-100 p-0">
      {isLoading ? <h1 className="text-xl">Loading...</h1> : null}
        {product.map((item) => (
          
          <div className=" m-4 ">
            
            

            <div className=" bg-white rounded-lg w-96 p-3 shadow-lg shadow-slate-400 h-full *:mt-2 ">
              <img src={item.image} alt="" className="ml-3 w-60 h-60 " />
              <h2 className="text-black text-2xl font-medium ">{item.title}</h2>
              <p className="text-slate-800 font-medium">{item.category}</p>
              <p>{item.price}$</p>   

              <div className="flex justify-between relative bottom-0 ">
                <button
                  className=" bg-blue-700 text-white rounded-md cursor-pointer h-10 px-2  "
                  onClick={()=>{
                    viewDetails(item)
                  }}
                >
                  View Details
                </button>
                <button className="bg-orange-600 text-white rounded-md cursor-pointer h-10 px-2 "
                onClick={() => {dispatch(addToCart(item)),
                  dispatch(addToCartCount(item))
                  alert("Item has been added.")
                }
                }>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="float-right pb-1 cursor-pointer bg-red-300 p-1 rounded-full">
            <RxCross1 onClick={closeModal}/>
            </div>
            <h2 className="text-2xl font-bold mt-2 mb-4">{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="w-56 h-48 object-contain mb-4 ml-20 rounded-lg" />
            <p className="text-gray-600 mb-3">{selectedProduct.description}</p>
            <p className="text-lg font-bold mb-2">Price: <span className="text-red-700">${selectedProduct.price}</span></p>
            <p className="mb-4 font-medium">Rating: {selectedProduct.rating.rate}({selectedProduct.rating.count} reviews)</p>
            
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Products;
