import React from "react";
import { reviews } from "../../constants/data";
import { star } from "../../assets/icons";
let Feedback=()=>{
    return(
   <div className="w-full min-h-screen bg-purple-100 flex justify-center flex-col items-center space-y-44 max-md:p-4">
    <div className="flex flex-col items-center gap-4">
        <p className="text-5xl font-semibold">What Our Customers Say?</p>
        <p className="text-lg text-slate-600">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
    </div>
    <div className="flex gap-32 max-md:flex-col">
        {
            reviews.map((reviews)=>(
                <div className=" felx flex-col w-96 space-y-4" key={reviews.customerName}>
                    <img className="rounded-full" src={reviews.imgURL} alt="error" width="150px"/>
                    <p>{reviews.feedback}</p>
                    <div className="flex gap-2">
                    <img src={star} alt="star" width="16px" />
                    <p>{reviews.rating}</p>
                    </div>
                    <p className="text-2xl font-semibold">{reviews.customerName}</p>
                   
                </div>
            ))
        }
    </div>
   </div>
    )
}
export default Feedback