"use client"

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 font-sans bg-gradient-to-r from-blue-200 to-cyan-200">
      <header className="p-4 flex justify-between bg-gradient-to-r from-blue-200 to-cyan-200 items-center shadow-md">
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center overflow-hidden m-1 custom-border">
            <img src="/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
          </div>
          <h1 className="text-4xl font-bold ml-4 text-gray-800">Cryptosend</h1>
        </div>
        <nav className="text-lg">
          <ul className="flex space-x-6">
            <li>
              <a href="/market" className="cursor-pointer hover:underline">Market</a>
            </li>
            <li>
              <a href="/exchange" className="cursor-pointer hover:underline">Exchange</a>
            </li>
            <li>
              <a href="/wallets" className="cursor-pointer hover:underline">Wallets</a>
            </li>
          </ul>
        </nav>
      </header>

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
