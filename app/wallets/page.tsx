"use client"

import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 font-sans bg-gradient-to-r from-blue-200 to-cyan-200">
      <Navbar/>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center mt-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Work in progress</h2>
        </section>
      </main>

      <footer className="text-center p-4 shadow-md text-black">
        &copy; 2023 Cryptosend. All rights reserved.
      </footer>
    </div>
  );
}
