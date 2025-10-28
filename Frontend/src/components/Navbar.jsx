import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import logo from '/logo.png'
import bagIcon from '../assets/bag.png'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-transparent sticky top-0 z-40">
        <div className="px-6 flex items-center justify-between pt-8">
          <div className="flex justify-center items-center gap-2">
            <img className="h-[48px] w-[48px]" src={logo} alt="logo" />
            <p className="font-inter font-black text-[28px] leading-[100%] tracking-[0%]">FloraVision.</p>
          </div>
          <div className="flex items-center gap-4 ">

            <nav className="hidden md:flex items-center gap-12 font-IndieFlower font-normal text-[24px] leading-[35px] text-white">
              <a href="#" className="hover:text-fv-accent">Home</a>
              <a href="#" className="hover:text-fv-accent flex justify-center items-center gap-2">
                Plants Type
                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.19617 5.25L1.47998e-05 2.51244e-08L10.3923 -8.834e-07L5.19617 5.25Z" fill="white" />
                </svg>
              </a>
              <a href="#" className="hover:text-fv-accent">More</a>
              <a href="#" className="hover:text-fv-accent">Contact</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <button aria-label="search" className="p-2 rounded-md hover:bg-white/6">
              <FiSearch size={26} />
            </button>
            <button aria-label="cart" className="p-2 rounded-md hover:bg-white/6">
              <img className="w-[26px] h-[26px]" src={bagIcon} alt="" />
            </button>

            <button onClick={() => setOpen(false)} aria-label="menu" className="flex flex-col gap-2 items-end p-2 rounded-md hover:bg-white/6">
              <hr className="w-8 border-2 rounded-xl" />
              <hr className="w-5 border-2 rounded-xl" />
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
    </>
  );
}
