import React from "react";
import Button1 from './Button.png'
import Button2 from './Button (1).png'
export default function Button(){
    return(
        <div className="flex mx-5 my-5">
            <img className="mx-3" src={Button2}/>
           <img src={Button1}/>
           

        </div>
    )
}