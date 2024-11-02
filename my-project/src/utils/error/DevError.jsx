import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    onclick,
    ...props
}) {
    return (
    <>
        <span>  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
        </span>
         

        <div 
        className={`flex bg-[linear-gradient(#D30000,#800000_100%,#B22222)]  justify-center p-5 m-10 h-16 w-50 rounded-lg bg-red-700 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
            <button
            type={type}
            onClick={onclick}
            className={`-mt-3.5 -mr-[37rem]`}
            >
               
            </button>
            
        </div>
    </>
    );
}
   