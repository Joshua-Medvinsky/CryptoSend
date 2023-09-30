const Navbar=()=>(
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
          <a href="/" className="cursor-pointer hover:underline">Home</a>
        </li>
        <li>
          <a href="/market" className="cursor-pointer hover:underline">Market</a>
        </li>
        <li>
          <a href="/support" className="cursor-pointer hover:underline">Support</a>
        </li>
      </ul>
    </nav>
  </header>


);

export default Navbar;