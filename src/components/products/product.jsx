import React from "react";
import { products } from "../../constants/data";
import { star } from "../../assets/icons";
let Product=()=>{

    return(
     <div>
      <div className="m-20">
        <p className="text-orange-500 text-6xl font-medium">Our Popular Products</p>
        <p className="text-gray-500 text-lg font-normal max-w-xl mt-6">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className="flex space-x-20 m-14 justify-center items-center mt-52 max-md:flex-col max-md:space-x-0">
        {
      products.map((products)=>(
        <div key={products.name}>
            <img src={products.imgURL} alt="error" width="250px" />
            <div className="flex space-x-1"><img src={star} alt="error" width="16px" /> <span>4.6</span></div>
  
            <p className="text-lg font-bold">{products.name}</p>
            <p className="text-orange-500 text-base font-semibold">{products.price}</p>
        </div>
      ))
        }
      </div>
     </div>
    )
}
export default Product