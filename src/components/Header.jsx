"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const Header = () => {

    const [menuOpen, setMenuOpen ] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    useEffect(()=> {
        const handleClickOutside = (evennt) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[]);


    return (
        <>
        <nav className="sticky top-12 z-40 bg-offwhite">
            <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-5">
                {/* Burgermenu starter */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <FiX className="text-green text-3xl" /> ):(

                             <FiMenu className="text-green text-3xl" />
                            )}
                    </button>
                </div>

                <Link href="/" className="flex-shrink-0">
                <img
                src="/logo.svg"
                alt="logo"
                className="h-10 w-auto md:h-20 transition-all"
                />
                </Link>

                {/* Desktop menu */}

                <ul className="hidden md:flex space-x-8 text-green font-semibold text-lg items-center relative">
                    <li className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center gap-1 hover:underline text-green transition duration-200 ease-in-out"
                            >
                                Undervisningsmateriale <FiChevronDown className={`text-sm text-green transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                        {dropdownOpen && (
                        <ul className="absolute top-full mt-2 left-0 bg-offwhite shadow-md rounded min-w-[180px] z-50 overflow-hidden">
                            {["forskole", "indskoling", "mellemtrin", "udskoling"].map((level) => (
                            <li key={level}>
                                <Link
                                href={`/Category/${level}`}
                                className="block px-4 py-2 hover:bg-lightgreen transition duration-200 ease-in-out"
                                >
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        )}
                    </li>
                     <li><Link href="/toplisten" className="transition duration-200 hover:underline">Toplisten</Link></li>
                     <li><Link href="/about" className="transition duration-200 hover:underline">Om os</Link></li>
                     <li><Link href="/contact" className="transition duration-200 hover:underline">Kontakt</Link></li>
                </ul>
            </div>

            {/* Mobil menu */}
        </nav>
        {menuOpen && (
                <ul className="md:hidden pb-10  mt-4 space-y-4 text-green font-semibold text-lg text-center z-30">
                    <li>
                        <button onClick={toggleDropdown}>Undervisningsmateriale</button>
                        {dropdownOpen && (
                            <ul className="mt-2 space-y-2 text-sm text-green">
                                <li><Link href="/Category/forskole" className="block px-4 py-2 hover:bg-lightgreen">Førskole</Link></li>
                                <li><Link href="/Category/indskoling" className="block px-4 py-2 hover:bg-lightgreen">Indskoling</Link></li>
                                <li><Link href="/Category/mellemtrin" className="block px-4 py-2 hover:bg-lightgreen">Mellemtrin</Link></li>
                                <li><Link href="/Category/udskoling" className="block px-4 py-2 hover:bg-lightgreen">Udskoling</Link></li>
                            </ul>
                        )}
                    </li>
                     <li><Link href="/toplisten">Toplisten</Link></li>
                     <li><Link href="/about">Om os</Link></li>
                     <li><Link href="/contact">Kontakt</Link></li>
                </ul>
            )}
            </>
    );
};
 
export default Header;