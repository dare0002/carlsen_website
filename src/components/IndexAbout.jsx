import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const IndexAbout = () => {
    return (
        <div className="max-w-4xl grid md:grid-cols-2 mt-20">
            <div>
                <div className="relative mx-auto" style={{ width: 276, height: 276 }}>
                    <Image
                    src="/indexabout.png" 
                    alt="Cirkel med bog"
                    layout="fill"
                    objectFit="contain"
                    className="absolute top-4 left-4"
                    priority
                    />
                </div>
            </div>
            <div className="space-y-2 flex flex-col justify-center">
                <h2 className="text-lg md:text-xl font-bold mb-2  ">80 år med læseglæde</h2>
                <p className="mx-auto text-base">I mere end 80 har Forlaget Carlsen været med til at skabe læseglæde hos børn og unge. Vi har altid barnet i fokus og vi ser det som vores fineste opgave at få flere børn og unge til at læse.</p>
                <Link href="/About">
                <Button className="mt-6 ">Læs mere om os</Button>
                </Link>
            </div>
            
        </div>
      );
}
 
export default IndexAbout;