'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface DonationCause {
  id: number;
  title: string;
  raisedBTC: number;
  goalBTC: number;
  category: string;
}

const DonationPage = () => {
  const [btcPrice, setBtcPrice] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const donationCauses: DonationCause[] = [
    { id: 1, title: "Children's Medical Fund", raisedBTC: 0.8, goalBTC: 2.5, category: "Healthcare" },
    { id: 2, title: "Disaster Relief Fund", raisedBTC: 1.2, goalBTC: 5, category: "Emergency" },
    { id: 3, title: "Education Blockchain Project", raisedBTC: 0.5, goalBTC: 3, category: "Education" },
    { id: 4, title: "Wildlife Conservation", raisedBTC: 0.3, goalBTC: 1.5, category: "Environment" },
    { id: 5, title: "Open Source Development", raisedBTC: 1.7, goalBTC: 4, category: "Technology" },
    { id: 6, title: "Community Food Bank", raisedBTC: 0.9, goalBTC: 2, category: "Social" },
  ];

  useEffect(() => {
    // Fetch current Bitcoin price
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then(res => res.json())
      .then(data => {
        setBtcPrice(data.bitcoin.usd);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const calculateProgress = (raised: number, goal: number) => (raised / goal) * 100;

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
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 rounded-full text-white hover:shadow-lg transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Donation Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Bitcoin Donation Causes
          </h2>
          {!loading && (
            <p className="text-gray-400">
              1 BTC = ${btcPrice?.toLocaleString() || 'N/A'}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationCauses.map((cause) => (
            <div 
              key={cause.id}
              className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:shadow-xl"
            >
              <div className="relative h-60 rounded-xl overflow-hidden">
                <Image
                  src="/donation-btc.jpg"
                  alt="Donation cause"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm">
                  {cause.category}
                </span>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{cause.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-400">
                    <span className="text-green-500">⏣ {cause.raisedBTC}</span>
                    <span className="block text-xs mt-1">
                      ${(cause.raisedBTC * btcPrice).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-blue-500">⏣ {cause.goalBTC}</span>
                    <span className="block text-xs mt-1">
                      ${(cause.goalBTC * btcPrice).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                    <div 
                      style={{ width: `${calculateProgress(cause.raisedBTC, cause.goalBTC)}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-green-500 to-blue-500"
                    ></div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-[1.02]">
                  Donate Bitcoin
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DonationPage;