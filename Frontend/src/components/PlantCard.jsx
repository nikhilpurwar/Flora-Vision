import React from "react";
import clsx from "clsx";

export default function PlantCard({ id, title, name, price, excerpt, desc, img, variant }) {
  const isLarge = variant === "large";
  return (
    <article className={clsx("glass rounded-lg p-6 shadow-card transition-transform hover:-translate-y-1", { "flex gap-6 items-center": isLarge })}>
      <img src={img || "/images/placeholder.jpg"} alt={title || name} className={clsx("rounded-lg object-cover", { "w-48 h-48": isLarge, "w-full h-48": !isLarge })} />
      <div className="flex-1">
        <p className="text-green-200 text-sm mb-1">{name || title}</p>
        <h3 className="text-xl font-semibold text-white">{title || name}</h3>
        <p className="mt-3 text-gray-300">{excerpt || desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold">{price}</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 border rounded-md hover:bg-white/6">Explore</button>
            <button className="p-2 rounded-md hover:bg-white/6" aria-label="add to cart">🛒</button>
          </div>
        </div>
      </div>
    </article>
  );
}
