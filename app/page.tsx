"use client";
import React, { useContext } from 'react';
import { TransactionContext } from '@/context/TransactionContext';
import Loader from "./loader";

const Input = ({ placeholder, name, type, value, handleChange }: any) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-gray-100 text-gray-800 border border-gray-300 text-sm placeholder-gray-400 focus:ring focus:ring-blue-300"
  />
);

export default function Home() {
  const darkBackground = {
    background: 'linear-gradient(to top, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))',
  };
  const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e:any) => {
    // Add your submit logic here
    const {addressTo,amount,keyword,message} = formData;
    e.preventDefault();

    if(!addressTo||!amount||!keyword||!message) return;

    sendTransaction();
  };

  return (
    <div style={darkBackground} className="min-h-screen text-gray-800">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="rounded-lg border-2 border-white h-12 w-12 flex items-center justify-center overflow-hidden">
            <img src="/logo.jpg" alt="Logo" className="h-12 w-12" />
          </div>
          <h1 className="text-3xl font-bold ml-2 text-gray-800">Cryptosend</h1>
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
        <section className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center mt-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Send Crypto</h2>
          <p className="text-gray-600 mb-4">
            Cryptosend allows you to securely send and receive cryptocurrencies. Start your crypto journey with us!
          </p>

          {!currentAccount && (
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}

          <div style={darkBackground} className="p-5 sm:w-96 w-full flex flex-col items-center rounded-lg mt-4">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 focus:ring focus:ring-blue-300"
              >
                Send now
              </button>
            )}
          </div>
        </section>
      </main>

      <footer className="text-center p-4">
        &copy; 2023 Cryptosend. All rights reserved.
      </footer>
    </div>
  );
}
