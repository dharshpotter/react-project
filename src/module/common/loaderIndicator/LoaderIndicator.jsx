import React from "react";
import "./LoaderIndicator.style.css";

export function LoaderIndicator(){
    return(
        <div className="container m-5 text-center">
           <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>  
        </div>
    );
}

