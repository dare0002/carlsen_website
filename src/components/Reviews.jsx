"use client";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        text: "Materialet var rigtig godt udført og nemt at tilgå. Jeg vil helt sikkert vende tilbage til Carlsen Ekstra.",
        name: "Karin, Islands Brygge Skole",
        rating: 5,
    }, 
    {
        text: "God variation i materialet og børnene var engagerede hele vejen. Jeg kan varmt anbefale Carlsen Ekstra til andre.",
        name: "Lars, Nørrebro Skole",
        rating: 4,
    },
    {
        text: "Det kunne godt være lidt mere differentieret, men ellers super godt og nemt at bruge for alle lærere.",
        name: "Anne, Valby Skole",
        rating: 3,
    }, 
    {
        text: "Meget brugervenligt og lige til at gå til. En fornøjelse at arbejde med Carlsen Ekstra-materialerne.",
        name: "Mette, Hellerup Skole",
        rating: 5,
    },
];


const Reviews = () => {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? reviews.length -1 : prev -1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === reviews.length -1 ? 0 : prev +1));
    };

    const { text, name, rating } = reviews[current];

    return (
        <div className="flex items-center justify-center gap-4 my-20">
            <IoIosArrowBack onClick={handlePrev}  className="text-4xl md:text-2xl cursor-pointer text-green"/>
            <div className="max-w-2xl bg-lightgreen rounded-3xl px-10 py-10">
                <div className="text-base text center space-y-4">
                    <RiDoubleQuotesL />
                    <blockquote className="text-center">{text}</blockquote>
                    <p className="text-center font-base">{name}</p>
                        <div className="flex justify-end">
                          <RiDoubleQuotesR />
                        </div>
                </div>
                <div className="flex justify-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_,i) => (
                        <FaStar key={i}className={i < rating ? "text-2xl" : "text-2xl text-offwhite"}  />
                    ))}
                </div>
            </div>
            <IoIosArrowForward onClick={handleNext}   className="text-4xl md:text-2xl cursor-pointer text-green"/>
        </div>
      );
};
 
export default Reviews;