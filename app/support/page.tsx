"use client"
import React from 'react';
import Navbar from "../components/navbar";

export default function Support() {
  // FAQ questions and answers
  const faqData = [
    {
      question: "How is the market crypto prices kept up to date?",
      answer: "Our platform continuously updates cryptocurrency market prices to provide you with the most recent data."
    },
    {
      question: "Are the transactions secure?",
      answer: "Yes, our platform ensures secure and lightning-fast transactions for all users."
    },
    {
      question: "Is my data secure?",
      answer: "We take data security seriously and use industry-standard encryption to protect your information."
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 font-sans bg-gradient-to-r from-blue-200 to-cyan-200">
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen">
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center mt-2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Support Center</h2>
          <p className="text-gray-600 mb-4">
            Welcome to our support center. We're here to assist you with any questions or issues you may have.
          </p>
     
          {/* Use pt- to add padding-top */}
          <div className="my-2"></div>
          <div className="text-gray-600 text-left pt-6 mb-6">
            <h3 className="text-xl font-semibold mb-2"><strong>Frequently Asked Questions (FAQs):</strong></h3>
            <div className="my-4"></div>
            <ul>
              {faqData.map((faq, index) => (
                <li key={index} className="mb-2">
                  <strong>{faq.question}</strong>
                  <p>{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => window.location.href = 'mailto:joshuamedvinsky33@gmail.com'}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Contact Us
          </button>
        </section>
      </main>

      <footer className="text-center p-4 shadow-md text-black">
        &copy; 2023 Cryptosend. All rights reserved.
      </footer>
    </div>
  );
}
