import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfferSection from "@/components/OfferSection";

export default function Home() {
  return (
    <>
     <Navbar />
     <OfferSection />
     <Footer />
    </>
  );
}
