"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex bg-white items-center justify-between px-6 md:px-16 lg:px-6 py-3 border-b border-gray-300 text-gray-700">
      <Link href="/" className="flex items-center gap-2">
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
      </Link>
      <div className="relative flex items-center">
        <input type="text" placeholder="Search..." className="bg-gray-200 rounded-md px-4 py-1 pr-10 outline-none" />
        <IoIosSearch className="absolute right-3 text-gray-500 text-xl" />
      </div>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/account" className="hover:bg-blue-500 hover:text-white px-4 py-1 rounded transition">Account</Link>
        <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
