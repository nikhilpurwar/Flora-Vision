import React from "react";

export default function SectionTitle({ title, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="h-0.5 w-16 bg-fv-accent rounded"></div>
    </div>
  );
}
