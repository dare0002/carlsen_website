import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const images = [
    "/insta1.jpg",
    "/insta2.jpg", 
    "/insta3.jpg", 
    "/insta4.jpg", 
    "/insta5.jpg", 
    "/insta6.jpg", 
    "/insta7.jpg", 
    "/insta8.jpg",
];

const Instagram = () => {
    return (
        <section className="py-12 bg-offwhite">
            <div className="max-w-2xl md:max-w-3xl mx-auto px-4">
                <h2 className="text-lg md:text-xl font-bold text-center mb-8">Følg os på Instagram</h2>
                <div className="grid grid-cols-4 md:grid-cols-4 grid-rows-2 gap-2">
                    {images.map((src, index) => (
                        <Link
                        href="https://www.instagram.com/carlsenekstra"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="relative group overflow-hidden rounded"
                        >
                            <Image
                            src={src}
                            alt={`Instagramp post ${index + 1}`}
                            width={500}
                            height={500}
                            className="object-cover aspect-[1/1] w-full h-full transition-opacity duration-300 group-hover:opacity-20"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FaInstagram className="text-green text-4xl"/>
                            </div>
                        </Link>
                    )
                )}
                </div>
            </div>
        </section>
      );
}
 
export default Instagram;