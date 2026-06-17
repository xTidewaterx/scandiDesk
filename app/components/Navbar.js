"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div
        className={`relative md:px-14 px-6 py-6 flex justify-between items-center z-50 transition-colors duration-300 ${
          open ? "text-[#1a1a1a]" : "text-white"
        }`}
      >
        <h1 className="text-2xl md:text-3xl font-light tracking-[0.05em] transition-colors duration-300">
          ScandiDesk
        </h1>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              open ? "translate-y-2 rotate-45 bg-[#1a1a1a]" : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100 bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45 bg-[#1a1a1a]" : "bg-white"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-[50vh] bg-white transition-all duration-500 ease-in-out ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 text-[#1a1a1a] text-lg font-light tracking-[0.2em] px-6 pt-24 items-end">
          <li className="hover:opacity-60 transition cursor-pointer pb-2 border-b border-[#1a1a1a]/10">
            HOME
          </li>
          <li className="hover:opacity-60 transition cursor-pointer pb-2 border-b border-[#1a1a1a]/10">
            PRODUKTER
          </li>
          <li className="hover:opacity-60 transition cursor-pointer pb-2 border-b border-[#1a1a1a]/10">
            OM OSS
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex gap-12 absolute right-14 top-1/2 -translate-y-1/2 text-white text-sm font-light tracking-[0.2em] drop-shadow">
        <li className="hover:opacity-80 transition cursor-pointer">HOME</li>
        <li className="hover:opacity-80 transition cursor-pointer">PRODUKTER</li>
        <li className="hover:opacity-80 transition cursor-pointer">OM OSS</li>
      </ul>
    </nav>
  );
}
