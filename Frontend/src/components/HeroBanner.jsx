import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative">
      <div className="container-lg px-6 lg:px-0 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="text-white">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight">Earth’s Exhale</h1>
          <p className="text-base lg:text-lg text-gray-200 max-w-xl">“Earth Exhale” symbolizes the purity and vitality of the Earth’s natural environment and its essential role in sustaining life.</p>

          <div className="mt-6 flex gap-4">
            <a href="#" className="inline-block px-6 py-3 bg-white text-black rounded-lg font-semibold shadow-soft hover:scale-105 transition">Buy Now</a>
            <button className="inline-flex items-center gap-2 px-4 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition">Live Demo</button>
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-xl p-6 shadow-card flex items-center gap-6">
            <img src="/images/hero-plant.jpg" alt="hero plant" className="w-40 h-40 object-cover rounded-md shadow-soft" />
            <div className="flex-1">
              <div className="text-sm text-gray-300">Indoor Plant</div>
              <h3 className="text-2xl font-semibold">Aglaonema plant</h3>
              <div className="mt-4">
                <a className="px-4 py-2 bg-fv-accent text-black rounded-lg font-semibold">Buy Now</a>
              </div>
            </div>
          </div>

          {/* background big image */}
          <div className="absolute -right-8 -top-12 w-80 h-80 rounded-full bg-gradient-to-b from-[#193219] to-transparent opacity-50 mix-blend-overlay pointer-events-none">
            
          </div>
        </div>
      </div>
    </section>
  );
}
