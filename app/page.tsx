"use client"
import React, { useContext, useState } from 'react';
import { TransactionContext } from '@/context/TransactionContext';
import Loader from './loader';
import Services from './components/services'
import Navbar from './components/navbar';

const Input = ({ placeholder, name, type, value, handleChange, disabled }: any) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className={`my-2 w-full rounded-sm p-2 outline-none bg-gray-100 text-gray-800 border border-gray-300 text-sm placeholder-gray-400 focus:ring focus:ring-blue-300 ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`}
    disabled={disabled}
  />
);

export default function Home() {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const [showConnectWalletError, setShowConnectWalletError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { addressTo, amount, keyword, message } = formData;

    if (!currentAccount) {
      setShowConnectWalletError(true);
      return;
    }

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const handleConnectWalletClick = () => {
    setShowConnectWalletError(false);
    connectWallet();
  };

  return (
    <div className="min-h-screen text-gray-800 font-sans bg-gradient-to-r from-blue-200 to-cyan-200">

      <Navbar/>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center mt-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Crypto Across the World</h2>
          <p className="text-gray-600 mb-6">
            Explore the crypto world with ease. Buy cryptocurrencies easily with CryptoSend.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={handleConnectWalletClick}
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Connect Wallet
            </button>
          )}

          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-6 sm:w-96 w-full flex flex-col items-center rounded-lg mt-8">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              value={formData.addressTo}
              handleChange={handleChange}
              disabled={!currentAccount}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              value={formData.amount}
              handleChange={handleChange}
              disabled={!currentAccount}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              value={formData.keyword}
              handleChange={handleChange}
              disabled={!currentAccount}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              value={formData.message}
              handleChange={handleChange}
              disabled={!currentAccount}
            />

            <div className="h-[1px] w-full bg-gray-400 my-4" />

            {isLoading ? (
              <Loader />
            ) : (
              <>
                {showConnectWalletError && (
                  <p className="text-red-600 text-sm mt-2">Connect your wallet first</p>
                )}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`text-white w-full py-2 px-4 bg-blue-500 rounded-full hover:bg-blue-600 focus:ring focus:ring-blue-300 ${(!currentAccount || showConnectWalletError) ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                  disabled={!currentAccount || showConnectWalletError}
                >
                  Send Now
                </button>
              </>
            )}
          </div>
        </section>
      </main>


           <Services/>


      <footer className="text-center p-4  shadow-md text-black">
        &copy; 2023 Cryptosend. All rights reserved.
      </footer>
    </div>

    
  );
}
