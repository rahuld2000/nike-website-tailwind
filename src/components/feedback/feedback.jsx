import React from "react";
import { reviews } from "../../constants/data";
import { star } from "../../assets/icons";
let Feedback=()=>{
    return(
   <div>
    <div>
        <p>What Our Customers Say?</p>
        <p>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
    </div>
    <div>
        {
            reviews.map((reviews)=>(
                <div key={reviews.customerName}>
                    <img src={reviews.imgURL} alt="error" />
                    <p>{reviews.feedback}</p>
                    <div>
                    <img src={star} alt="star" />
                    <p>{reviews.rating}</p>
                    </div>
                    <p>{reviews.customerName}</p>
                   
                </div>
            ))
        }
    </div>
   </div>
    )
}
export default Feedback