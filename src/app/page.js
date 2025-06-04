"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfferSection from "@/components/OfferSection";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <OfferSection />
      <ProductCard />
      <Footer />
    </>
  );
}
