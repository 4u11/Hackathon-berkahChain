'use client'

import React, { useEffect, useState } from 'react';

const Market = () => {
  const [prices, setPrices] = useState<any>({});

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd')
      .then(response => response.json())
      .then(data => setPrices(data))
      .catch(error => console.error('Error fetching prices:', error));
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
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '10px' }}>
            <h3>Bitcoin</h3>
            <p>${prices.bitcoin?.usd ?? 'Loading...'}</p>
          </div>
          <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '10px' }}>
            <h3>Ethereum</h3>
            <p>${prices.ethereum?.usd ?? 'Loading...'}</p>
          </div>
          <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '10px' }}>
            <h3>Dogecoin</h3>
            <p>${prices.dogecoin?.usd ?? 'Loading...'}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;
