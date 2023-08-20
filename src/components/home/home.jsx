import React from "react";
import { arrowRight } from "../../assets/icons";
import { bigShoe1 } from "../../assets/images";
let Home = () => {
    return (
        <div className="flex w-full min-h-screen items-center max-md:flex-col ">
            <div className=" m-20 max-w-3xl max-h-6xl space-y-14">
                <div className="flex flex-col space-y-5">
                    <p className="text-xl text-orange-500">Our Summer Collection</p>
                    <h1 className="text-8xl font-semibold">The New Arrival <span className="text-orange-500 mr-2">Nike</span>Shoes</h1>
                    <p className="text-lg text-gray-500 max-w-md">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                    <button className="w-44 h-12 bg-orange-500 rounded-full flex justify-center items-center text-white hover:bg-orange-600">Shop now <img className="ml-3" src={arrowRight} alt="error" /></button>
                </div>
                <div className="flex flex-row space-x-12 text-2xl font-medium mt-6">
                    <div>
                        <p>1k+</p>
                        <p>Brands</p>
                    </div>
                    <div>
                        <p>500+</p>
                        <p>Shops</p>
                    </div>
                    <div>
                        <p>250k+</p>
                        <p>customer</p>
                    </div>
                </div>
            </div>
            <div>
                <img className="mt-24" src={bigShoe1} alt="big shoes" width="500px" />
            </div>
        </div>
    )
}
export default Home