import React from "react";
import Rectangle from "./Rectangle.png"
export default function Navbar(){
    return(
        <div>
          <img src={Rectangle} className="inline" alt="photuu"  />
          <div className="font-bold mt-4 text-4xl ">Laura Smith</div>
          <div className="text-1xl text-orange-400 py-1">Frontend Developer</div>
          <div className="country">India</div>
        </div>
    )
}