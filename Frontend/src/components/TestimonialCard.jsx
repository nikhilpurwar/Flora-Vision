import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({ name, rating = 4.5, text, avatar }) {
  return (
    <>
      <style>
        {`
          .clip-custom {
            clip-path: path("M0.5 62.2176C0.5 35 40.3416 10 79.6914 15C133.868 22 205.805 35 263.007 35C315.825 35 381.619 22 432.31 15C471.644 10 511.5 35 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z");
           position: relative;
            overflow: hidden;
            }
            .clip-custom::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.6),
              rgba(255, 255, 255, 0.1)
            );
            clip-path: path("M0.5 62.2176C0.5 35 40.3416 10 79.6914 15C133.868 22 205.805 35 263.007 35C315.825 35 381.619 22 432.31 15C471.644 10 511.5 35 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z");
            padding: 2px; /* Border thickness */
            mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: 2;
            pointer-events: none;
          }
        `}
      </style>

      <div className="w-[512px] h-[480px] px-[60px] py-[80px] bg-[rgba(255,255,255,0.05)] rounded-[77px] shadow-[0px_9px_18.4px_rgba(0,0,0,0.25)] backdrop-blur-[12.5px] flex flex-col justify-start gap-8 text-white clip-custom customBorder">
        {/* Top Section */}
        <div className="flex items-center gap-8 mb-8 ">
          {/* Avatar */}
          <img
            src={avatar}
            alt={name}
            className="w-[88px] h-[88px] rounded-full object-cover shadow-[0px_100px_80px_rgba(0,0,0,0.15),0px_41.7px_33.4px_rgba(0,0,0,0.108),0px_22.3px_17.9px_rgba(0,0,0,0.089),0px_12.5px_10px_rgba(0,0,0,0.075),0px_6.65px_5.32px_rgba(0,0,0,0.06),0px_2.76px_2.21px_rgba(0,0,0,0.042)]"
          />

          {/* Name and Rating */}
          <div className="flex flex-col">
            <h3 className="text-[38px] font-semibold leading-[46px]">{name}</h3>
            <div className="flex gap-[9px] mt-1">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.13292 0L8.81677 5.18237H14.2658L9.85745 8.38525L11.5413 13.5676L7.13292 10.3647L2.72453 13.5676L4.40838 8.38525L-4.76837e-06 5.18237H5.44906L7.13292 0Z" fill="#FFF84E" />
              </svg>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.13292 0L8.81677 5.18237H14.2658L9.85745 8.38525L11.5413 13.5676L7.13292 10.3647L2.72453 13.5676L4.40838 8.38525L-4.76837e-06 5.18237H5.44906L7.13292 0Z" fill="#FFF84E" />
              </svg>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.13292 0L8.81677 5.18237H14.2658L9.85745 8.38525L11.5413 13.5676L7.13292 10.3647L2.72453 13.5676L4.40838 8.38525L-4.76837e-06 5.18237H5.44906L7.13292 0Z" fill="#FFF84E" />
              </svg>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.13292 0L8.81677 5.18237H14.2658L9.85745 8.38525L11.5413 13.5676L7.13292 10.3647L2.72453 13.5676L4.40838 8.38525L-4.76837e-06 5.18237H5.44906L7.13292 0Z" fill="#FFF84E" />
              </svg>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.13292 0L7.13293 5.18237V7.5L7.13292 10.3647L2.72453 13.5676L4.40839 8.38525L0 5.18237H5.44907L7.13292 0Z" fill="#FFF84E" />
              </svg>

            </div>
          </div>
        </div>

        {/* Text */}
        <p className="text-[24px] font-normal leading-[29px] text-white/75 max-w-[403px]">
          {text}
        </p>
      </div>
    </>

  );
}
