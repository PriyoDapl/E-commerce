"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <div className="flex items-center gap-2">
        <Image
          className="cursor-pointer"
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        />
        <div>
          <span className="text-2xl font-bold ml-2">An E-commerce</span>
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">Home</Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">Shop</Link>
        <Link href="/" className="hover:text-gray-900 transition">About Us</Link>
        <Link href="/" className="hover:text-gray-900 transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
