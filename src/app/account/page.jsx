"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AccountPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Account Page</h1>
        <p className="text-gray-700 mb-2">This is your account page.</p>
        <p className="text-gray-500">
          Here you can manage your account settings.
        </p>
        <p>
          Currently the page is under construction and we will come back to this
          later
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
