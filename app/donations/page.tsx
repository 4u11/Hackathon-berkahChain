'use client'
import React from "react";

const DonationPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-black shadow-md">
        <div className="flex space-x-4">
          <a href="/home" className="font-semibold">Home</a>
          <a href="/donations" className="font-semibold text-white">Donation</a>
          <a href="#" className="font-semibold">About Us</a>
          <a href="/market" className="font-semibold">Market</a>
        </div>
        <div className="rounded-full overflow-hidden w-10 h-10">
          <button className="signup-btn bg-green-500 px-4 py-2 rounded text-white">Sign Up</button>
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
