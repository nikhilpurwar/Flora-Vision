import React from "react";
import { Play, ChevronRight } from "lucide-react";
import plantImg from "../assets/Rose Gold Feminine Calligraphy Monogram Logo(15).png"
import T1 from "../assets/Testimonials/T1.png";

// import rightArrow from "../assets/right-arrow.png"; // ensure you have this asset

export default function HeroBanner() {
  return (
    <>
      <style>
        {`
          .hero-clip-custom {
            clip-path: path("M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z");
          }
        `}
      </style>

      <section className="w-[1660px] justify-self-center relative overflow-hidden px-6 py-16">
        {/* Left Content */}
        <div className="flex justify-between text-white relative z-10">
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

            {/* Small Glass Testimonial Card */}
            <div className="relative w-[409px] h-[237px] mt-60 rounded-[45px] p-6 glass customBorder">
              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <img
                  src={T1}
                  alt="Ronnie Hamill"
                  className="w-[64px] h-[64px] rounded-full object-cover shadow-[0px_43px_135px_rgba(0,0,0,0.29),0px_12.96px_40.7px_rgba(0,0,0,0.19),0px_5.38px_16.9px_rgba(0,0,0,0.15),0px_1.95px_6.11px_rgba(0,0,0,0.10)]"
                />

                <div>
                  <h3 className="text-[22px] leading-[27px] text-white font-normal">Ronnie Hamill</h3>

                  {/* Rating Stars */}
                  <div className="flex gap-[9px] mt-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <svg
                        key={i}
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.13292 0L8.81677 5.18237H14.2658L9.85745 8.38525L11.5413 13.5676L7.13292 10.3647L2.72453 13.5676L4.40838 8.38525L0 5.18237H5.44906L7.13292 0Z"
                          fill="#FFF84E"
                        />
                      </svg>
                    ))}
                    {/* Half Star */}
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.13292 0L7.13293 5.18237V7.5L7.13292 10.3647L2.72453 13.5676L4.40839 8.38525L0 5.18237H5.44907L7.13292 0Z"
                        fill="#FFF84E"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="mt-6 w-[341px] text-[17px] leading-[21px] text-white/75">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>
            </div>

          </div>

          {/* Right — Plant Card */}
          <div className="relative top-20 w-[512px] h-[644px] justify-self-end">
            {/* Glass Background */}
            <div
              className="w-[512px] h-[644px] glass hero-clip-custom customBorder"
            />

            {/* Plant Image */}
            <img
              src={plantImg}
              alt="Aglaonema Plant"
              className="absolute w-[500px] h-[500px] left-0 top-[-200px] drop-shadow-[0px_-98px_80px_rgba(0,0,0,0.17)]"
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
