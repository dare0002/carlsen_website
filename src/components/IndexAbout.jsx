import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const IndexAbout = () => {
    return (
        <div className="max-w-4xl grid md:grid-cols-2 mt-20">
            <div>
                <div className="relative w-64 h-64 rounded-full bg-lightblue mx-auto gap-50">
                    <img
                    src="/indexBook1.png" 
                    alt="Bog 1"
                    className="absolute top-4 left-4 w-28 h-28 object-contain rotate-[-12deg]"
                    />
                     <img
                    src="/indexBook2.png" 
                    alt="Bog 1"
                    className="absolute top-8 left-16 w-28 h-28 object-contain rotate-[12deg]"
                    />
                </div>

            </div>
            <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-bold mb-2">80 år med læseglæde</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod  tempor incididunt ut labore e Lorem ipsum.</p>
                <Link href="/About">
                <Button className="mt-4">Læs mere om os</Button>
                </Link>
            </div>
            
        </div>
      );
}
 
export default IndexAbout;