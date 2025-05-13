import Image from "next/image";

const Hero = () => {
    return (
        <div className="bg-lightgreen text-green w-full py-16 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8">
                <img
                src="/sallysfar.svg"
                alt="Sallys far illustration"
                className="w-54 scale-125 max-h-[300px] hidden md:block object-contain mx-auto z-0"
                />
                <div className="flex flex-col items-center text-center z-10 relative">
                    <h1 className="text-4xl md:text-8xl font-bold mb-2">CARLSEN</h1>
                    <h3 className="text-2xl italic md:text-2xl font-semibold">Ekstra</h3>
                    <p className="text-base md:text-lg font-semibold mb-2">Gratis undervisningsmateriale </p>
                    <p className="text-base md:text-lg font-semibold mb-2">fra Danmarks største børnebogsforlag </p>
                </div>

                <img
                src="/turtle.svg"
                alt="Turtle illustration"
                className="w-54 scale-125 max-h-[300px] hidden md:block object-contain mx-auto z-0"
                />
            </div>
        </div>
     );
}
 
export default Hero;