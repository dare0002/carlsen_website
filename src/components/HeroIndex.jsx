"use client";

import Button from "./Button";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("materiale");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-lightgreen text-green w-full py-6 mb-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 relative">
        <div className="hidden md:flex justify-center">
          <motion.img
            src="/girlDog.svg"
            alt="Pige med en hund illustration"
            className="w-48 max-h-[250px] h-auto object-contain sm:w-64 sm:max-h-[350px] md:w-80 md:max-h-[450px] lg:w-96 lg:max-h-[600px]"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
        <div className="flex flex-col items-center text-center z-10 relative">
          <h1 className="text-4xl md:text-8xl font-bold mb-1">CARLSEN</h1>
          <p className="text-2xl md:text-3xl font-semibold font-updock">Ekstra</p>
          {/* <h5 className="text-2xl md:text-3xl font-semibold">Ekstra</h5> */}
          <p className="text-base md:text-lg font-semibold space-y-2">
            Gratis undervisningsmateriale
          </p>
          <p className="text-base md:text-lg font-semibold mb-6">
            fra Danmarks største børnebogsforlag
          </p>
          <Button onClick={handleScroll}>Find materiale nu</Button>
        </div>
        <div className="hidden md:flex justify-center">
          <motion.img
            src="/sallysFarKids.svg"
            alt="Sallys far og to børn illustration"
            className="w-48 max-h-[250px] h-auto object-contain sm:w-64 sm:max-h-[350px] md:w-80 md:max-h-[450px] lg:w-96 lg:max-h-[600px]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;


