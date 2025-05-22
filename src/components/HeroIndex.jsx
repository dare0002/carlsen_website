"use client";

import Image from "next/image";
import Button from "./Button";
import { motion } from "@motionone/react";

const Hero = () => {
    const handleScroll = () => {
        const section = document.getElementById("materiale");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-lightgreen text-green w-full py-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 relative">
                <motion.img
                    src="/sallysFarKids.svg"
                    alt="Sallys far og to børn illustration"
                    className="w-54 scale-125 max-h-[400px] hidden md:block object-contain mx-auto z-0"
                    initial={{ x: '-100%', opacity: 1 }}
                    animate={{ x: '40%', opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />
                <motion.img
                src="/girlDog.svg"
                alt="Pige med en hund illustration"
                className="absolute w-54 scale-100 max-h-[250px] hidden md:block object-contain mx-auto z-0"
                initial={{ x: '-120%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay:0.5 }}
                />

                <div className="flex flex-col items-center text-center z-10 relative">
                    <h1 className="text-4xl md:text-8xl font-bold mb-1">CARLSEN</h1>
                    <h4 className="text-2xl md:text-3xl font-semibold">Ekstra</h4>
                    <p className="text-base md:text-lg font-semibold space-y-2">Gratis undervisningsmateriale </p>
                    <p className="text-base md:text-lg font-semibold mb-6">fra Danmarks største børnebogsforlag </p>
                    < Button onClick={handleScroll}>Find materiale nu</Button>
                </div>

                <motion.img
                src="/girlDog.svg"
                alt="Pige med en hund illustration"
                className="absolute left-1/2 transform -translate-x-1/2 w-54 scale-100 max-h-[250px] hidden md:block object-contain mx-auto z-0"
                initial={{ x: 150, opacity: 1 }}
                animate={{ x: '120%', opacity: 0 }}
                transition={{ duration: 1 , ease: 'easeInOut' }}
                />
                <motion.img
                    src="/sallysFarKids.svg"
                    alt="Sallys far og to børn illustration"
                    className="absolute left-1/2 transform -translate-x-1/2 w-54 scale-125 max-h-[400px] hidden md:block object-contain mx-auto z-0"
                    initial={{ x: '40%', opacity: 0 }}
                    animate={{ x: 300, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.9 }}
                />
            </div>
        </div>
     );
}
 
export default Hero;