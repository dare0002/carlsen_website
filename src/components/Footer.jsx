import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 bg-lightgreen text-green p-8 px-10 lg:px-40 gap-x-10">
            <div className="mx-auto md:mx-auto">
              <div className="relative w-16 h-16 md:w-20 md:h-20 mb-2 mx-auto">
              <Image
                src="/logo.svg"
                alt="logo"
                fill
                className="object-contain"
                priority
              />
            </div>
              <div>
                <h3>Forlaget Carlsen</h3>
                <h3>CVR 76351910</h3>
              </div>
            </div>
            <article className="space-y-2">
              <h3 className="font-bold">Adresse</h3>
              <p className="border-t border-green pt-2 mb-2">Vognmagergade 11</p>
              <p>1120 København K</p>
            </article>
            <article className="space-y-2">
              <h3 className="font-bold">Kontakt</h3>
              <h4 className="font-semibold border-t border-green pt-2 mb-2">Kundeservice</h4>
              <p className="flex items-center gap-2">
                <CiMail className="w-6 h-6 md:w-6 md:h-6"/>
                kundeservice@lrforlag.dk
              </p>
              <p className="flex items-center gap-2">
                <MdLocalPhone className="w-6 h-6 md:w-6 md:h-6"/>
                +45 70 22 66 69
              </p>
              <h4 className="font-semibold">Receptionen</h4>
              <p className="flex items-center gap-2">
                <MdLocalPhone className="w-6 h-6 md:w-6 md:h-6"/>
                +45 70 22 66 66
              </p>
              <h4 className="font-semibold">Salgsafdelningen</h4>
              <p className="flex items-center gap-2">
                <CiMail className="w-6 h-6 md:w-6 md:h-6"/>
                salg@carlsen.dk
              </p>
            </article>
             <article className="space-y-2">
              <h3 className="font-bold">Følg os</h3>
              <div className="flex items-center gap-2 border-t border-green pt-2 mb-2">
                <a
                  href="https://www.facebook.com/carlsenekstra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 md:w-6 md:h-6"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-full h-full" />
                </a>
                  <a
                    href="https://www.instagram.com/carlsenekstra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 md:w-6 md:h-6"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-full h-full" />
                  </a>
              </div>
            </article>
        </footer>
      );
}
 
export default Footer;