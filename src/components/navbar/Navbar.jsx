import React from "react";
import {headerLogo} from "../../assets/images";
import {hamburger} from "../../assets/icons"
import { NavLink } from "react-router-dom";
let Navbar=()=>{
    return(
        <div className="flex p-6 w-full h-26 justify-between absolute bg-white">
             <div>
   <img src={headerLogo} alt="error" />
        </div>
        <div className="flex">
            <ul className="flex space-x-6 text-gray-500 max-md:hidden">
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Contact Us</li>
                <li className="text-black">Sign IN/ Explore Now</li>
            </ul>
            <div className="hidden max-md:block "> <img src={hamburger} alt="hamburger" width="25px" /></div>
        </div>
        </div>
       
    )
}


export default Navbar