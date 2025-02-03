'use client'
import React, { useState } from "react";

const AboutPage = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
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
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
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

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About BerkahChain
          </h1>
          <p className="text-xl text-gray-300 mb-8">
          Berkahchain is a fundraising application program that functions using the ICP and Web3 ecosystems. By using both of these things, we can create a program to raise funds using cryptocurrencies. The purpose of this program is flexibility in making donations by paying using advanced digital currencies or more precisely cryptocurrencies.

This program focuses on all types of fundraising such as natural disasters, project fundraising, medical needs, and other such things.

We hope that by using the ICP and Web3 ecosystems, we can motivate digital currency or cryptocurrency owners to donate or give alms using the Berkahchain program.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-400">
              We aim to create a world where financial assistance is transparent, efficient, and accessible to everyone. By leveraging blockchain technology, we ensure that every donation is traceable and used for its intended purpose.
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-gray-400">
              To become the leading platform for decentralized crowdfunding, empowering individuals and communities to create positive change through transparent and accountable financial support.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-xl font-bold text-gray-100">Naufal Nanda</h3>
              <p className="text-gray-400">Project Lead</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-xl font-bold text-gray-100">Azzam Rabbani</h3>
              <p className="text-gray-400">UI Designer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-xl font-bold text-gray-100">Miftahul Maulana</h3>
              <p className="text-gray-400">Fullstack Developer</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-xl font-bold text-gray-100">Radithya Kinan</h3>
              <p className="text-gray-400">Database Handler</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
