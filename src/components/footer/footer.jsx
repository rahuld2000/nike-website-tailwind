import React from "react";
import { footerLogo } from "../../assets/images";
import { footerLinks, socialMedia } from "../../constants/data";
let Footer=()=>{
    <div>
        <div>
            <img src={footerLogo} alt="" />
            <p>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
            <div>
                {
                 socialMedia.map((socialMedia)=>(
                    <div key={socialMedia.alt}>
                        <img src={socialMedia.src} alt={socialMedia.alt} />
                    </div>
                 ))   
                }
            </div>
        </div>
        <div>
            <p>Products</p>
            {
              footerLinks.map((footerLinks)=>(
                <div key={footerLinks.products.name}>
                    <p>{products.name}</p>
                </div>
              ))
            }
        </div>
    </div>
}