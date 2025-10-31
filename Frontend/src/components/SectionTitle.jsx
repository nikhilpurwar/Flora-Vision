import React from "react";

export default function SectionTitle({ title, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
    >


      {/* Title */}
      <div
        className="relative text-[55px] leading-[67px] font-semibold text-white text-center"
        style={{
          textShadow:
            "0px 100px 80px rgba(0, 0, 0, 0.36), 0px 50.0488px 40.0391px rgba(0, 0, 0, 0.27372), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.234572), 0px 19.3198px 15.4559px rgba(0, 0, 0, 0.205522), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.18), 0px 7.88218px 6.30574px rgba(0, 0, 0, 0.154478), 0px 4.5288px 3.62304px rgba(0, 0, 0, 0.125428), 0px 1.99324px 1.59459px rgba(0, 0, 0, 0.0862802)",
        }}
      >

        {/* Left Vector */}
        <svg className="absolute -left-3 top-2" width="64" height="66" viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M2.5 0V43C2.5 54.0457 11.4543 63 22.5 63H64" stroke="url(#paint0_linear_11_55)" stroke-width="5" />
          <defs>
            <linearGradient id="paint0_linear_11_55" x1="63.5" y1="63" x2="-4.5" y2="-6" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FBD300" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>

        {title}

        {/* Right Vector */}
        <svg className="absolute -right-3 top-0" width="64" height="66" viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M61.5 65.5V22.5C61.5 11.4543 52.5457 2.50001 41.5 2.50001L1.09971e-05 2.50001" stroke="url(#paint0_linear_11_56)" stroke-width="5" />
          <defs>
            <linearGradient id="paint0_linear_11_56" x1="0.500012" y1="2.50001" x2="68.5" y2="71.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FBD300" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>


    </div>
  );
}