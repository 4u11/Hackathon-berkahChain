'use client'
import React from "react";

const DonationPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 border-b border-blue-500">
        <div className="flex space-x-6">
          <a href="/home" className="font-bold">Home</a> {/* Changed from <link> to <a> */}
          <a href="/donation" className="font-bold">Donation</a>
          <a href="/about" className="font-bold">About Us</a>
          <a href="/market" className="font-bold">Market</a>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
          <button className="text-sm">▼</button>
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
