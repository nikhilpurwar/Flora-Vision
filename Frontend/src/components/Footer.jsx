import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#07110a] py-12">
      <div className="container-lg px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-fv-accent w-10 h-10 rounded-full flex items-center justify-center text-black font-bold">FV</div>
            <div className="text-white font-semibold">FloraVision.</div>
          </div>
          <p className="text-gray-400">From lush indoor greens to vibrant outdoor blooms, our plants are crafted to uplift and elevate your living environment.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="text-gray-400">
            <li><a href="#" className="hover:text-fv-accent">Home</a></li>
            <li><a href="#" className="hover:text-fv-accent">Types Of plants</a></li>
            <li><a href="#" className="hover:text-fv-accent">Contact</a></li>
            <li><a href="#" className="hover:text-fv-accent">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">For Every Update.</h4>
          <form className="flex gap-2">
            <input aria-label="email" type="email" placeholder="Enter Email" className="flex-1 rounded-lg p-2 bg-transparent border border-white/10" />
            <button className="px-4 py-2 bg-fv-accent rounded-lg text-black font-semibold">Subscribe</button>
          </form>
          <div className="mt-6 text-gray-400">FloraVision © all rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
