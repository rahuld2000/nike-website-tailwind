import React from "react";
let Letter=()=>{
    return(
   <div className="flex justify-between p-20 items-center max-md:flex-col">
    <div className="w-64  text-5xl font-semibold">
        Sign Up From <span className="text-orange-500">Updates & Newsletter</span> 
    </div>
    <div className="flex flex-row w-[600px] items-center max-md:w-[400px] mt-10">
        <input className="w-[90%] h-16 border-2 rounded-3xl p-2 border-slate-300 " type="text" placeholder="Enter Your Email!" />
        <button className=" w-28 h-10 bg-orange-500 rounded-full flex justify-center items-center text-white hover:bg-orange-600 relative right-32">Sign Up</button>
    </div>
   </div>
    )
}
export default Letter