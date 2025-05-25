"use client";

import { useEffect } from "react";

const StickyBar = () => {
    const handleScrollToNewsletter = () => {
        const newsletterSection = document.getElementById("newsletter");
        if(newsletterSection){
            newsletterSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className="fixed top-0 w-full bg-green text-offwhite px-6 py-3 shadow-lg z-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-center">
                <p className="text-[0.95rem]">Få inspiration til din undervisning - gratis materialer & populære top-ressourcer direkte i din inbox!</p>
                <button onClick={handleScrollToNewsletter} className="bg-lightgreen text-green font-semibold px-3 py-1 rounded hover:bg-offwhite transition leading-none text-[0.95rem]"
                > 
                    Tilmeld dig her
                </button>
            </div>
        </div>
      );
}
 
export default StickyBar;