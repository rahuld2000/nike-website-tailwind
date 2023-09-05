import React from "react";
import { arrowRight } from "../../assets/icons";
import { shoe8 } from "../../assets/images";
import { services } from "../../constants/data";
let About = () => {
    return (
        <div>
        <div className="flex w-full justify-center items-center space-x-80 mt-36 max-md:flex-col max-md:space-x-0 max-md:p-5">
            <div className="flex flex-col space-y-6 max-w-xl">
                <p className="text-5xl font-semibold text-orange-500">We Provide You Super Quality Shoes</p>
                <p className="text-gray-600 text-lg">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="text-gray-600 text-lg">Our dedication to detail and excellence ensures your satisfaction</p>
                <button className="w-44 h-12 bg-orange-500 rounded-full flex justify-center items-center text-white hover:bg-orange-600">Shop now <img className="ml-3"src={arrowRight} alt="arrow" /></button>
            </div>
            <div className="w-[450px] max-md:w-[300px] pt-10">
                <img src={shoe8} alt="shoes" />
            </div>
        </div>
        <div className="flex w-full justify-center">
        <div className="flex space-x-10 text-center items-center mt-40 max-md:flex-col max-md:space-x-0">
            {
                services.map((services)=>(
        <div key={services.label} className="flex flex-col items-center space-y-3 shadow-3xl rounded-2xl h-72 p-14 w-[400px] max-md:w-[350px]">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <img  src={services.imgURL} width="30px" alt="error" />
            </div>
            <p className="text-2xl font-bold">{services.label}</p>
            <p className=" text-gray-600">{services.subtext}</p>
        </div>
                ))
            }
        </div>
        </div>
        </div>
    )
}
export default About;