// components/Navbar.tsx
"use client"; // Mark this file as a client component

import { useState } from "react";
import Link from "next/link"; // Import Link from next/link

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false); // Close menu when clicking the close button

  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      {/* <h1 className="text-lg font-bold">JK Fashion</h1> */}
      <Link href="/">
        <h1 className="text-lg font-bold cursor-pointer">JK Fashion</h1>
      </Link>

      {/* Hamburger Menu (Visible on mobile) */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Menu (Visible on large screens) */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="hover:text-gray-400">
            Products
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-400">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile Menu (Visible on small screens) */}
      <ul
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-gray-800 text-white space-y-4 p-4 transition-all transform ease-in-out duration-300`}
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Close Button */}
        <li className="absolute top-4 right-4">
          <button
            onClick={closeMenu}
            className="text-white text-xl"
            aria-label="Close menu"
          >
            &times;
          </button>
        </li>

        <li>
          <a href="/" className="hover:text-gray-400" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a
            href="/products"
            className="hover:text-gray-400"
            onClick={closeMenu}
          >
            Products
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="hover:text-gray-400"
            onClick={closeMenu}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
