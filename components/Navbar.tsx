"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="  bg-white backdrop-filter backdrop-blur-md text-black p-4 flex justify-between items-center fixed w-full z-50">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-lg font-bold cursor-pointer">JK Fashion</h1>
      </Link>

      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-black focus:outline-none"
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

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
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

      {/* Mobile Menu */}
      <ul
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-white text-black p-6 pt-12 space-y-4 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <li className="absolute top-2 right-4">
          <button
            onClick={closeMenu}
            className="text-black text-xl"
            aria-label="Close menu"
          >
            &times;
          </button>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-400" onClick={closeMenu}>
            Home
          </Link>
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
