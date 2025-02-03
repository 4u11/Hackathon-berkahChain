'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for sticky navbar height
      const startPosition = window.scrollY;
      const targetPosition = element.getBoundingClientRect().top + startPosition - offset;
      const duration = 1000; // Scroll duration in milliseconds
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / duration, 1);
        const easedProgress = easeInOutQuad(progressRatio);

        window.scrollTo(0, startPosition + (targetPosition - startPosition) * easedProgress);

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsAboutVisible(true); // Trigger fade-in animation
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    const aboutSection = document.getElementById('about-us');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              BerkahChain
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/donations" className="text-gray-300 hover:text-white transition-colors">Donation</a>
              <a 
                href="#about-us" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about-us');
                }}
              >
                About
              </a>
              <a href="/market" className="text-gray-300 hover:text-white transition-colors">Market</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => {
                setIsAuthOpen(true);
                setAuthMode('signin');
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 rounded-full text-white hover:shadow-lg transition-all"
            >
              Sign In
            </button>
            <button 
              onClick={() => {
                setIsAuthOpen(true);
                setAuthMode('signup');
              }}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 px-6 py-2 rounded-full text-white hover:shadow-lg transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Pop-Up */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800/90 p-8 rounded-2xl border border-gray-700 w-full max-w-md">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setAuthMode('signin')}
                className={`text-xl font-bold transition-all ${
                  authMode === 'signin' 
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`text-xl font-bold transition-all ${
                  authMode === 'signup'
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-6">
              {authMode === 'signup' && (
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your username"
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                />
              </div>

              {authMode === 'signup' && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 rounded-full text-white hover:shadow-lg transition-all"
              >
                {authMode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <button
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

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
          <a href="/donations" className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105">
            Start Funding Now
          </a>
        </div>
      </section>

      {/* About Section with Dropdown */}
      <section 
        id="about-us" 
        className={`container mx-auto px-4 py-16 transition-opacity duration-500 ${isAboutVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">About BerkahChain</h2>
            <button 
              className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {isDropdownOpen ? '▲' : '▼'}
            </button>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Were revolutionizing crowdfunding through blockchain technology, creating a transparent platform that connects donors directly with those in need.
          </p>
          {isDropdownOpen && (
            <div className="mt-4 p-4 bg-gray-700/30 rounded-lg animate-fade-in">
              <p className="text-gray-300">
                Whether its medical emergencies, disaster relief, or community projects, we ensure every contribution makes a real impact. Our platform uses smart contracts to guarantee transparency and accountability in every transaction.
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