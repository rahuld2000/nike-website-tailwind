import React from "react";
import { offer } from "../../assets/images";
let Offer=()=>{
    return(
        <div>
            <div><img src={offer} alt="offer" /></div>
           <div>
            <p>Special Offer</p>
            <p>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            <div>
                <button>View details</button>
                <button>Learn more</button>
            </div>
           </div>
        </div>
    )
}
export default Offer;