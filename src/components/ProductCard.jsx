"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  const product = [
    {
      id: "1",
      name: "Sample Product",
      description: "This is a sample product description.",
      price: 29.99,
      image: "",
    },
    {
      id: "2",
      name: "Another Product",
      description: "This is another product description.",
      price: 49.99,
      image: "",
    },
    {
      id: "3",
      name: "Third Product",
      description: "This is the third product description.",
      price: 19.99,
      image: "",
    },
    {
      id: "4",
      name: "Fourth Product",

      description: "This is the fourth product description.",
      price: 39.99,
      image: "",
    },
    {
      id: "5",
      name: "Fifth Product",
      description: "This is the fifth product description.",
      price: 24.99,
      image: "",
    },
    {
      id: "6",
      name: "Sixth Product",
      description: "This is the sixth product description.",
      price: 59.99,
      image: "",
    },
    {
      id: "7",
      name: "Seventh Product",
      description: "This is the seventh product description.",
      price: 34.99,
      image: "",
    },
    {
      id: "8",
      name: "Eighth Product",
      description: "This is the eighth product description.",
      price: 44.99,
      image: "",
    },
    {
      id: "9",
      name: "Ninth Product",
      description: "This is the ninth product description.",
      price: 15.99,
      image: "",
    },
    {
      id: "10",
      name: "Tenth Product",
      description: "This is the tenth product description.",
      price: 22.99,
      image: "",
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-32 py-12">
      <h3 className="text-2xl font-bold mb-8">Popular Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col hover:shadow-xl transition-shadow"
          >
            <Image
              src={item.image || "/headphone.png"}
              alt={item.name}
              width={200}
              height={200}
              className="object-contain mb-4 hover:scale-105 transition-transform rounded-md"
            />
            <p className="text-md font-semibold mb-0">
              {item.name}
            </p>
            <p className="text-xs text-gray-600 mb-2 truncate w-full">
              {item.description}
            </p>
            <div className="flex justify-between text-center items-center w-full">
              <p className="text-gray-600 font-bold">${item.price}</p>
              <Link
                href={`/products/${item.id}`}
                className="text-black border border-black px-2 py-0.5 text-sm rounded-md hover:bg-stone-800 hover:text-white transition text-center"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProductCard;
