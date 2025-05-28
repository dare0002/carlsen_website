"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownMobileOpen, setDropdownMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (evennt) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-20 z-20 md:static md:z-0 bg-offwhite">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-5">
          {/* Burgermenu starter */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>{menuOpen ? <FiX className="text-green text-3xl" /> : <FiMenu className="text-green text-3xl" />}</button>
          </div>

          <Link href="/" className="flex-shrink-0">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image src="/logo.svg" alt="logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop menu */}

          <ul className="hidden md:flex space-x-8 text-green font-semibold text-base md:text-base lg:text-base items-center relative">
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} 
                      aria-expanded={dropdownOpen}
                      aria-controls="desktop-dropdown"
              className="flex items-center gap-1 hover:underline text-green transition duration-200 ease-in-out">
                Undervisningsmateriale <FiChevronDown className={`text-sm text-green transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <ul 
                id="desktop-dropdown"
                className="absolute top-full mt-2 left-0 bg-offwhite shadow-md rounded min-w-[180px] z-50 overflow-hidden text-[0.95rem]">
                  {["førskole", "indskoling", "mellemtrin", "udskoling"].map((level) => (
                    <li key={level}>
                      <Link href={{ pathname: `/Category/${level}`, query: { grade: level } }} className="block px-4 py-2 hover:bg-lightgreen transition duration-200 ease-in-out">
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/Toplisten" className="transition duration-200 hover:underline">
                Toplisten
              </Link>
            </li>
            <li>
              <Link href="/About" className="transition duration-200 hover:underline">
                Om os
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="transition duration-200 hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobil menu */}
      </nav>
      {menuOpen && (
        <ul className="md:hidden pb-10  mt-4 space-y-4 text-green font-semibold text-lg text-center z-30 relative">
          <li>
            <button onClick={() => setDropdownMobileOpen(!dropdownMobileOpen)}
                    aria-expanded={dropdownMobileOpen}
                    aria-controls="mobile-dropdown"
                    className="flex items-center justify-center gap-1 w-full">
              Undervisningsmateriale
              <FiChevronDown className={`text-green transition-transform duration-200 ${dropdownMobileOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownMobileOpen && (
              <ul id="mobile-dropdown" className="mt-2 space-y-2 text-sm text-green">
                {["førskole", "indskoling", "mellemtrin", "udskoling"].map((level) => (
                  <li key={level}>
                    <Link
                      href={{ pathname: `/Category/${level}`, query: { grade: level } }}
                      onClick={() => {
                        setMenuOpen(false);
                        setDropdownMobileOpen(false);
                      }}
                      className="block px-4 py-2 hover:bg-lightgreen"
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/Toplisten">Toplisten</Link>
          </li>
          <li>
            <Link href="/About">Om os</Link>
          </li>
          <li>
            <Link href="/Contact">Kontakt</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
