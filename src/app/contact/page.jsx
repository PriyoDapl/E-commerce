"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen py-12 px-6 md:px-16 lg:px-32">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <p className="text-lg text-gray-600 mb-6 text-center">
                            If you have any questions, feel free to reach out!
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                                <div className="space-y-3">
                                    <p className="text-gray-600">
                                        <strong>Phone:</strong> +1234567890
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Email:</strong> contact@ecommerce.com
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Address:</strong> 123 Business St, City, State 12345
                                    </p>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                                <form className="space-y-4">
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <textarea 
                                        placeholder="Your Message" 
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                    <button 
                                        type="submit"
                                        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;