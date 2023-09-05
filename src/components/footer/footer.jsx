import React from "react";
import { footerLogo } from "../../assets/images";
import { footerLinks, socialMedia } from "../../constants/data";
let Footer = () => {
    return (
        
<div className="max-w-full bg-black h-96 p-16 text-white max-md:p-2 h-[500px]">
        <div className="flex justify-between max-md:flex-col ">
            <div className="w-96 h-52 flex flex-col justify-around">
                <img src={footerLogo} alt="nike" width="170px" />
                <p className="text-gray-400">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                <div className="flex gap-4" >
                    {
                        socialMedia.map((socialMedia) => (
                            <div className=" flex w-12 h-12 bg-white rounded-full items-center justify-center" key={socialMedia.alt}>
                                <img  src={socialMedia.src} alt={socialMedia.alt} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex gap-14 max-md:gap-0">
                
                {footerLinks.map((section) => (
                    <div className="flex flex-col" key={section.title}>
                        <h4  className='text-2xl'>
                            {section.title}
                        </h4>
                        <ul >
                            {section.links.map((link) => (
                                <li
                                    className='text-gray-400 text-sm m-2'
                                    key={link.name}
                                >
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
           
        </div>
         <div className="flex justify-between mt-8 text-gray-300  ">
         <p >
Copyright. All rights reserved.</p>
<p>Terms & Conditions</p>
     </div>
     </div>
    )
}


export default Footer