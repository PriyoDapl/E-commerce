"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-white">
        <div className="w-4/5">
        <Link className="flex items-center gap-2" href="/">
          <Image
            className="w-28 md:w-32"
            src="/logo.svg"
            width={128}
            height={32}
            alt="logo"
          />
          </Link>
          <p className="mt-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            atque excepturi accusamus incidunt quos? Ea corrupti ut officia
            deserunt iusto necessitatibus dolorem modi distinctio eius. Hic unde
            suscipit corrupti adipisci?
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1234567890</p>
              <p>contact@ecommerce.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © E-commerce All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
