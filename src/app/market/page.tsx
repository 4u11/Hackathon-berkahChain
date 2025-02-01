'use client'

import React, { useEffect, useState } from 'react';

interface Prices {
  bitcoin: { usd: number };
  ethereum: { usd: number };
  dogecoin: { usd: number };
  binancecoin: { usd: number };
  cardano: { usd: number };
  solana: { usd: number };
  ripple: { usd: number };
  polkadot: { usd: number };
}

const Market = () => {
  const [prices, setPrices] = useState<Prices | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,binancecoin,cardano,solana,ripple,polkadot&vs_currencies=usd'
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPrices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching prices:', error);
        setError('Failed to fetch prices. Please try again later.');
        setLoading(false);
      });
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
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/market" className="text-gray-300 hover:text-white transition-colors">Market</a>
            </div>
          </div>
          <button 
            onClick={() => setIsSignInOpen(true)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 rounded-full text-white hover:shadow-lg transition-all"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Sign-In Pop-Up */}
      {isSignInOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800/90 p-8 rounded-2xl border border-gray-700 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Sign In
            </h2>
            <form className="space-y-6">
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
                Sign In
              </button>
            </form>
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Market Prices Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Cryptocurrency Market Prices
        </h2>
        {loading && <p className="text-gray-400 text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bitcoin */}
          <div className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/bitcoin.png" alt="Bitcoin" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-100">Bitcoin</h3>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ${prices?.bitcoin?.usd?.toLocaleString() ?? 'N/A'}
            </p>
          </div>

          {/* Ethereum */}
          <div className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/ethereum.png" alt="Ethereum" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-100">Ethereum</h3>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ${prices?.ethereum?.usd?.toLocaleString() ?? 'N/A'}
            </p>
          </div>

          {/* Dogecoin */}
          <div className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/dogecoin.png" alt="Dogecoin" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-100">Dogecoin</h3>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ${prices?.dogecoin?.usd?.toLocaleString() ?? 'N/A'}
            </p>
          </div>

          {/* Binance Coin */}
          <div className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/binancecoin.png" alt="Binance Coin" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-100">Binance Coin</h3>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ${prices?.binancecoin?.usd?.toLocaleString() ?? 'N/A'}
            </p>
          </div>

          {/* Cardano */}
          <div className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/cardano.png" alt="Cardano" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-100">Cardano</h3>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ${prices?.cardano?.usd?.toLocaleString() ?? 'N/A'}
            </p>
          </div>

          {/* Solana */}
          <div className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/solana.png" alt="Solana" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-100">Solana</h3>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ${prices?.solana?.usd?.toLocaleString() ?? 'N/A'}
            </p>
          </div>

          {/* Ripple */}
          <div className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/ripple.png" alt="Ripple" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-100">Ripple</h3>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ${prices?.ripple?.usd?.toLocaleString() ?? 'N/A'}
            </p>
          </div>

          {/* Polkadot */}
          <div className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/polkadot.png" alt="Polkadot" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-100">Polkadot</h3>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ${prices?.polkadot?.usd?.toLocaleString() ?? 'N/A'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;