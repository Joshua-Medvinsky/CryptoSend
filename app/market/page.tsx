"use client"
import React, { useEffect, useState } from 'react';
import { FaDollarSign } from 'react-icons/fa'; // Import React Icons for the dollar sign
import Navbar from '../components/navbar';

export default function Home() {
  const [marketData, setMarketData] = useState<any[]>([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="min-h-screen text-gray-800 font-sans bg-gradient-to-r from-blue-200 to-cyan-200">
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen">
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center mt-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Cryptocurrency Market Overview</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>Cryptocurrency</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((coin) => (
                <tr key={coin.id}>
                  <td className="py-2">
                    <div className="flex items-center">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        style={{ width: '20px', height: '20px', marginRight: '8px' }} // Define image styles
                      />
                      <span>{coin.name}</span>
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="flex items-center">
                      <FaDollarSign className="text-sm mr-2" />
                      {coin.current_price.toFixed(2)} USD
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer className="text-center p-4 shadow-md text-black">
        &copy; 2023 Cryptosend. All rights reserved.
      </footer>
    </div>
  );
}
