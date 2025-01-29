'use client'

import React, { useEffect, useState } from 'react';

interface Prices {
  bitcoin: { usd: number };
  ethereum: { usd: number };
  dogecoin: { usd: number };
}

const Market = () => {
  const [prices, setPrices] = useState<Prices | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd')
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
      <section style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Cryptocurrency Market Prices</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
          <div style={{ backgroundColor: 'gray', padding: '20px', borderRadius: '10px', textAlign: 'center', minWidth: '150px' }}>
            <img src="/bitcoin.png" alt="Bitcoin" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
            <h3>Bitcoin</h3>
            <p>${prices?.bitcoin?.usd ?? 'N/A'}</p>
          </div>
          <div style={{ backgroundColor: 'gray', padding: '20px', borderRadius: '10px', textAlign: 'center', minWidth: '150px' }}>
            <img src="/ethereum.png" alt="Ethereum" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
            <h3>Ethereum</h3>
            <p>${prices?.ethereum?.usd ?? 'N/A'}</p>
          </div>
          <div style={{ backgroundColor: 'gray', padding: '20px', borderRadius: '10px', textAlign: 'center', minWidth: '150px' }}>
            <img src="/dogecoin.png" alt="Dogecoin" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
            <h3>Dogecoin</h3>
            <p>${prices?.dogecoin?.usd ?? 'N/A'}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;