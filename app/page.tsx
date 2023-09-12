"use client";
import React, {useContext} from 'react';
import { TransactionContext } from '@/context/TransactionContext';

export default function Home() {
  const darkBackground = {
    background: 'linear-gradient(to top, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))', 
  
  };
  const{connectWallet, currentAccount} = useContext(TransactionContext);
 
  return (
    <div style={darkBackground} className="min-h-screen text-white">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="rounded-lg border-2 border-white h-12 w-12 flex items-center justify-center overflow-hidden">
            <img src="/logo.jpg" alt="Logo" className="h-12 w-12" />
          </div>
          <h1 className="text-3xl font-bold ml-2">Cryptosend</h1>
        </div>
        <nav className="text-lg">
          <ul className="flex space-x-4">
            <li className="cursor-pointer hover:underline">Market</li>
            <li className="cursor-pointer hover:underline">Exchange</li>
            <li className="cursor-pointer hover:underline">Wallets</li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center h-screen">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Send Crypto</h2>
          <p className="text-gray-600 mb-4">
            Cryptosend allows you to securely send and receive cryptocurrencies. Start your crypto journey with us!
          </p>
          
          {!currentAccount &&(
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                  onClick={connectWallet}>
              Connect Wallet</button>
          )}
        </section>
      </main>

      <footer className="text-center p-4">
        &copy; 2023 Cryptosend. All rights reserved.
      </footer>
    </div>
  );
}
