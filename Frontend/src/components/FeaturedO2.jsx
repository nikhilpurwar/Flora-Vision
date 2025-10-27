import React from "react";

export default function FeaturedO2() {
  return (
    <div className="glass rounded-xl p-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-card">
      <img src="/images/feature-o2.jpg" alt="O2 plant" className="w-full h-64 object-cover rounded-lg" />
      <div>
        <h3 className="text-2xl font-bold">We Have Small And Best O2 Plants Collection's</h3>
        <p className="mt-3 text-gray-300">Oxygen-producing plants, often referred to as "O2 plants", are those that release oxygen into the atmosphere through photosynthesis.</p>
        <div className="mt-4">
          <a className="px-4 py-2 bg-fv-accent text-black rounded-lg font-semibold">Explore</a>
        </div>
      </div>
    </div>
  );
}
