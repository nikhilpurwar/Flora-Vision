import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-transparent sticky top-0 z-40">
      <div className="container-lg px-6 lg:px-0 flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="bg-fv-accent w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">FV</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-fv-accent">Home</a>
            <a href="#" className="hover:text-fv-accent">Plants Type</a>
            <a href="#" className="hover:text-fv-accent">More</a>
            <a href="#" className="hover:text-fv-accent">Contact</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="search" className="p-2 rounded-md hover:bg-white/6">
            <FiSearch size={18} />
          </button>
          <button aria-label="cart" className="p-2 rounded-md hover:bg-white/6">
            <FiShoppingCart size={18} />
          </button>

          <button onClick={() => setOpen(true)} aria-label="menu" className="md:hidden p-2 rounded-md hover:bg-white/6">
            <FiMenu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 w-72 h-full bg-gradient-to-b from-[#0f2214] to-[#08140b] p-6 glass">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-fv-accent w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">FV</div>
                <div className="text-lg font-semibold">FloraVision.</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="close">
                <FiX size={22} />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-4 text-lg">
              <a href="#" className="py-2">Home</a>
              <a href="#" className="py-2">Plants Type</a>
              <a href="#" className="py-2">More</a>
              <a href="#" className="py-2">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
