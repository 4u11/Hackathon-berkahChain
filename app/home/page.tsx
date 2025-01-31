// page.tsx
'use client'

import { FC, useState } from "react";
import Image from "next/image";

const Home: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Modern Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              BerkahChain
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/donations" className="text-gray-300 hover:text-white transition-colors">Donation</a>
              <a href="#about-us" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollToSection('about-us')}>About</a>
              <a href="/market" className="text-gray-300 hover:text-white transition-colors">Market</a>
            </div>
          </div>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 rounded-full text-white hover:shadow-lg transition-all">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/hero-image.png" 
            alt="Funding" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Transform Funding with Blockchain
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Empower communities through decentralized crowdfunding and transparent donations
          </p>
          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105">
            Start Funding Now
          </button>
        </div>
      </section>

      {/* Wallet Connect */}
      <div className="container mx-auto px-4 py-8 text-center">
        <button className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all">
          <Image src="/wallet-icon.png" alt="Wallet" width={24} height={24} className="filter invert" />
          <span className="text-gray-100 font-medium">Connect Wallet</span>
        </button>
      </div>

      {/* About Section */}
      <section id="about-us" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">About BerkahChain</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            We're revolutionizing crowdfunding through blockchain technology, creating a transparent platform that connects donors directly with those in need. Whether it's medical emergencies, disaster relief, or community projects, we ensure every contribution makes a real impact.
          </p>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors"
          >
            <span>Learn More</span>
            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="mt-4 p-4 bg-gray-700/30 rounded-lg animate-fade-in">
              <p className="text-gray-300">
                Our platform uses smart contracts to ensure complete transparency. Every transaction is recorded on the blockchain, providing donors with real-time tracking of their contributions.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 transition-transform group-hover:scale-95" />
              <h3 className="text-gray-200 text-lg font-semibold mb-2">Feature {item}</h3>
              <p className="text-gray-400">Transparent blockchain-powered solution for modern funding needs</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;