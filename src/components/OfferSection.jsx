"use client";
import React, { useState, useEffect } from "react";
import OfferCard from "./OfferCard";

const OfferSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  
  // Sample data - you can replace this with your actual data
  const offersData = [
    {
      offerText: "Limited Time Deal - 50% offer!",
      advertisingTag: "Experience the Sound of Luxury at the price of a budget!",
      shopLink: "/",
      learnMoreLink: "/",
      image: "/headphone.png",
      productName: "Premium Wireless Headphones"
    },
    {
      offerText: "Flash Sale - Today Only!",
      advertisingTag: "Gaming Headset 45% OFF",
      shopLink: "/",
      learnMoreLink: "/",
      image: "/headphone.png",
      productName: "Gaming Headset Pro"
    },
    {
      offerText: "Best Seller - Customer Favorite!",
      advertisingTag: "Noise Cancel Headphones 30% OFF",
      shopLink: "/",
      learnMoreLink: "/",
      image: "/headphone.png",
      productName: "Noise Cancelling Headphones"
    },
    {
      offerText: "New Arrival - Be the First!",
      advertisingTag: "Smart Headphones with AI Assistant",
      shopLink: "/",
      learnMoreLink: "/",
      image: "",
      productName: "Smart Headphones"
    },
    {
      offerText: "Bundle Offer - Save More!",
      advertisingTag: "Headphones + Accessories 40% OFF",
      shopLink: "/",
      learnMoreLink: "/",
      image: "",
      productName: "Headphones Bundle"
    },
    {
      offerText: "Exclusive Offer - Members Only!",
      advertisingTag: "Wireless Earbuds 35% OFF",
      shopLink: "/",
      learnMoreLink: "/",
      image: "",
      productName: "Wireless Earbuds"
    }
  ];

  // Auto-slide every x seconds (this iwll also pause when dragging)
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offersData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [offersData.length, isDragging]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const currentPosition = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    
    // If moved enough negative (drag left), go to next slide
    if (movedBy < -30) {
      setCurrentSlide((prev) => (prev + 1) % offersData.length);
    }
    // If moved enough positive (drag right), go to previous slide
    else if (movedBy > 30) {
      setCurrentSlide((prev) => (prev - 1 + offersData.length) % offersData.length);
    }
    
    // Reset translate
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  return (
    <section className="px-6 md:px-16 lg:px-32 py-4">
      {/* <h2 className="text-2xl font-bold text-center mb-8">Special Offers</h2> */}
      
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'} cursor-grab active:cursor-grabbing`}
          style={{ 
            transform: `translateX(${isDragging ? 
              (-currentSlide * 100) + (currentTranslate / window.innerWidth * 100) : 
              (-currentSlide * 100)
            }%)` 
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {offersData.map((offer, index) => (
            <div key={index} className="w-full flex-shrink-0 select-none">
              <OfferCard data={offer} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-1 space-x-1">
        {offersData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-1 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;