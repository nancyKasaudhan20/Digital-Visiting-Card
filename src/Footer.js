import React from "react";
import Facebook from './Facebook Icon.png'
import Github from './GitHub Icon.png'
import Twitter from './Twitter Icon.png'
import Insta from './Instagram Icon.png'
export default function Footer(){
    return(
        <div className="flex mt-14 bg-black  px-12">
            <img className=" my-4 inline px-3" src={Facebook} alt="helloo" />
            <img className=" my-4 inline px-3" src={Github} alt="helloo" />
            <img className=" my-4 inline px-3" src={Twitter} alt="helloo" />
            <img className=" my-4 inline px-3" src={Insta} alt="helloo" />
        </div>
    )
}