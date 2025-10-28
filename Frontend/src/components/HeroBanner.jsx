import React from "react";
import { Play, ChevronRight } from "lucide-react";
import plantImg from "../assets/Rose Gold Feminine Calligraphy Monogram Logo(15).png"
// import rightArrow from "../assets/right-arrow.png"; // ensure you have this asset

export default function HeroBanner() {
  return (
    <>
      <style>
        {`
          .clip-custom {
            clip-path: path("M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z");
          }
        `}
      </style>

      <section className="relative overflow-hidden px-6 py-16">
        {/* Left Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start text-white relative z-10">
          <div>
            <h1 className="text-5xl lg:text-[118px] font-semibold leading-tight mb-0 opacity-90">
              Earth’s Exhale
            </h1>
            <p className="font-medium text-[23px] text-gray-200 max-w-3xl mb-8 opacity-80">
              “Earth Exhale” symbolizes the purity and vitality of the Earth’s natural
              environment and its essential role in sustaining life.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-4 items-center">
              <a
                href="#"
                className="w-[217px] h-[64px] inline-flex items-center justify-center border-2 text-[24px] rounded-2xl font-semibold hover:scale-105 transition"
              >
                Buy Now
              </a>

              <button className="inline-flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-white/10 transition">
                <Play size={30} fill="white" />
              </button>

              <span className="font-IndieFlower text-[25px]">Live Demo...</span>
            </div>

            {/* Small glass preview */}
            <div className="mt-8 glass inline-block p-4 rounded-xl border border-white/10 backdrop-blur-md bg-white/5">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-white/10 rounded-md shadow-lg" />
                <div>
                  <div className="text-sm text-gray-300">Indoor Plant</div>
                  <h3 className="text-2xl font-semibold">Aglaonema plant</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Plant Card */}
          <div className="relative left w-[512px] h-[719px] justify-self-center ">
            {/* Glass Background */}
            <div
              className="absolute top-[75px] w-[512px] h-[654px] glass border-[2px]
                [border-image-source:linear-gradient(149.83deg,#FFFFFF_6.85%,#000000_94.86%)]
                [border-image-slice:1]
                [border-image-width:2px]
                [border-image-outset:0]
                [border-image-repeat:stretch]
                shadow-[0_4px_30px_rgba(0,0,0,0.1)] clip-custom"
            />

            {/* Plant Image */}
            <img
              src={plantImg}
              alt="Aglaonema Plant"
              className="absolute w-[500px] h-[500px] left-0 top-[-120px] drop-shadow-[0px_-98px_80px_rgba(0,0,0,0.17)]"
            />
            <div className="absolute bottom-20 w-full px-20 flex flex-col gap-8">
              {/* Text Section */}
              <div className="">
                <p className="text-[23px] text-white/75 font-inter leading-[28px]">
                  Indoor Plant
                </p>
                <h2 className="text-[38px] text-white/75 font-inter leading-[46px] mt-[4px]">
                  Aglaonema plant
                </h2>
              </div>

              {/* Right Arrow */}
              <div className="absolute right-8 top-11">
                <ChevronRight size={28} />
              </div>

              {/* Buy Now Button */}
              <div className="w-[217px] h-[64px] border-2 border-white rounded-[12px] flex items-center justify-center">
                <span className="text-[28px] text-white/75 font-inter leading-[34px]">
                  Buy Now
                </span>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-[8px] mt-8">
                <div className="w-[21px] h-[6px] bg-white rounded-[46px]" />
                <div className="w-[6px] h-[6px] bg-white rounded-full" />
                <div className="w-[6px] h-[6px] bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
