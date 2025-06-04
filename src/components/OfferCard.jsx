"use client";
import React from "react";
import Image from "next/image";

const OfferCard = ({ data }) => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-purple-50 rounded-lg p-6 flex items-center justify-between min-h-[200px] shadow-md">
      {/* Left side - Text content */}
      <div className="flex-1 pr-6">
        <p className="text-sm text-gray-600 mb-2">
          {data.offerText}
        </p>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {data.advertisingTag}
        </h3>
        <div className="flex gap-3">
          <a 
            href={data.shopLink || "#"}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition inline-block text-center"
          >
            Shop
          </a>
          <a 
            href={data.learnMoreLink || "#"}
            className="border border-black text-black px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white cursor-pointer transition inline-block text-center"
          >
            View Similar
          </a>
        </div>
      </div>

      {/* Right side - Product image */}
      <div className="flex-shrink-0">
        <Image
          src={data.image || "/headphone.jpeg"} // Default image if none provided
          alt={data.productName || "Productunnamed"} // Default alt text
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default OfferCard;