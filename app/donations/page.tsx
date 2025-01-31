'use client'
import React from "react";

const DonationPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/home" className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              BerkahChain
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/donations" className="text-gray-300 hover:text-white transition-colors">Donation</a>
              <a href="#about-us" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/market" className="text-gray-300 hover:text-white transition-colors">Market</a>
            </div>
          </div>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 rounded-full text-white hover:shadow-lg transition-all">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Donation Grid */}
      <div className="grid grid-cols-3 gap-6 p-10">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-4">
            <div className="bg-black h-40 rounded-t-lg"></div>
            <div className="bg-gray-300 h-20 flex justify-end items-center p-2 rounded-b-lg">
              <button className="bg-black text-white px-4 py-2 rounded">Donate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationPage;
