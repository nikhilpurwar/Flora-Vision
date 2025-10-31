import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedO2({ plant }) {
  return (
    <>
      <section className="w-[1600px] h-[600px] mx-auto mt-44 bg-[rgba(255,255,255,0.05)] rounded-[92px] backdrop-blur-[10px] shadow-[0_9px_18.4px_rgba(0,0,0,0.25)] flex items-center">
        {/* Left — Image */}
        <img
          src={plant}
          alt="Oxygen Plant"
          className="w-[877px] h-[877px] absolute -left-[162px] -top-[90px]"
        />

        <div className="w-1/2"></div>

        {/* Right — Text Content */}
        <div className="flex flex-col justify-center max-w-[700px] text-white">
          <h2 className="text-[48px] font-semibold leading-[58px] mb-6">
            We Have Small And Best O₂ Plants Collection's
          </h2>

          <p className="text-[24px] font-normal leading-[32px] text-white/75 mb-10">
            Oxygen-producing plants, often referred to as “O₂ plants,” are those that
            release oxygen into the atmosphere through photosynthesis.
          </p>

          {/* Footer Actions */}
          <div className="flex items-center justify-between w-full">
            <button className="flex justify-center items-center w-[217px] h-[64px] border-2 border-white/40 rounded-[12px] text-[28px] font-medium hover:bg-white/10 transition-all">
              Explore
            </button>

            {/* Pagination */}
            <div className="flex items-center gap-6 text-[22px] text-white/80">
              <ChevronLeft className="cursor-pointer hover:scale-110 transition-transform" />
              <span className="tracking-wider">01 / 04</span>
              <ChevronRight className="cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </section>
      {/* Dots */}
      <div className="flex justify-center gap-[8px] mt-24">
        <div className="w-[21px] h-[6px] bg-white rounded-[46px]" />
        <div className="w-[6px] h-[6px] bg-white rounded-full" />
        <div className="w-[6px] h-[6px] bg-white rounded-full" />
      </div>
    </>

  );
}
