import React from "react";
import { offer } from "../../assets/images";
let Offer=()=>{
    return(
        <div className="flex p-20 space-x-24 mt-20 max-md:flex-col space-x-0 gap-8">
            <div className="w-[600px] max-md:w-[330px]"><img src={offer} alt="offer"  /></div>
           <div className="flex flex-col max-w-2xl justify-center space-y-8">
            <p className="text-orange-500 text-4xl font-semibold">Special Offer</p>
            <p className="text-lg text-gray-500">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p className="text-lg text-gray-500">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            <div className="flex space-x-5">
                <button className="w-44 h-12 bg-orange-500 rounded-full flex justify-center items-center text-white hover:bg-orange-600">View details</button>
                <button  className="w-44 h-12 border-slate-300 border-2 rounded-full flex justify-center items-center text-slate-600">Learn more</button>
            </div>
           </div>
        </div>
    )
}
export default Offer;