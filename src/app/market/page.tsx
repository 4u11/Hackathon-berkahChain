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
    <div>
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

      <section className="p-5">
        <h2 className="text-white text-center text-2xl mb-6">Cryptocurrency Market Prices</h2>
        {loading && <p className="text-white text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Bitcoin Card */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <img src="/bitcoin.png" alt="Bitcoin" className="w-8 h-8" />
              <h3 className="text-lg font-semibold">Bitcoin</h3>
            </div>
            <p className="text-xl font-bold">${prices?.bitcoin?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>

          {/* Ethereum Card */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <img src="/ethereum.png" alt="Ethereum" className="w-8 h-8" />
              <h3 className="text-lg font-semibold">Ethereum</h3>
            </div>
            <p className="text-xl font-bold">${prices?.ethereum?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>

          {/* Dogecoin Card */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <img src="/dogecoin.png" alt="Dogecoin" className="w-8 h-8" />
              <h3 className="text-lg font-semibold">Dogecoin</h3>
            </div>
            <p className="text-xl font-bold">${prices?.dogecoin?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>

          {/* Binance Coin Card */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <img src="/binancecoin.png" alt="Binance Coin" className="w-8 h-8" />
              <h3 className="text-lg font-semibold">Binance Coin</h3>
            </div>
            <p className="text-xl font-bold">${prices?.binancecoin?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>

          {/* Cardano Card */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <img src="/cardano.png" alt="Cardano" className="w-8 h-8" />
              <h3 className="text-lg font-semibold">Cardano</h3>
            </div>
            <p className="text-xl font-bold">${prices?.cardano?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>

          {/* Solana Card */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <img src="/solana.png" alt="Solana" className="w-8 h-8" />
              <h3 className="text-lg font-semibold">Solana</h3>
            </div>
            <p className="text-xl font-bold">${prices?.solana?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>

          {/* Ripple Card */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <img src="/ripple.png" alt="Ripple" className="w-8 h-8" />
              <h3 className="text-lg font-semibold">Ripple</h3>
            </div>
            <p className="text-xl font-bold">${prices?.ripple?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>

          {/* Polkadot Card */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <img src="/polkadot.png" alt="Polkadot" className="w-8 h-8" />
              <h3 className="text-lg font-semibold">Polkadot</h3>
            </div>
            <p className="text-xl font-bold">${prices?.polkadot?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;