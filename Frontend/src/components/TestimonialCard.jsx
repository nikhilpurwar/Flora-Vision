import React from "react";

export default function TestimonialCard({ name, rating, text, avatar }) {
  return (
    <blockquote className="glass p-6 rounded-lg shadow-soft">
      <div className="flex items-center gap-4">
        <img src={avatar || "/images/avatar-placeholder.jpg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-yellow-400 text-sm">{"★".repeat(rating)}{"☆".repeat(5-rating)}</div>
        </div>
      </div>
      <p className="mt-4 text-gray-300">{text}</p>
    </blockquote>
  );
}
