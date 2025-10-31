import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 py-12">
      <div className="text-white px-4 w-[1660px] justify-self-center flex justify-between">
        <div className="flex flex-col items-start gap-6">
          <div className="flex justify-center items-center gap-2">
            <img className="h-[94px] w-[94px]" src="./logo.png" alt="logo" />
            <p className="font-inter font-black font-[900] text-[42px] leading-[100%] tracking-[0%]">FloraVision.</p>
          </div>
          <p className="ml-2 text-[26px] font-[500] leading-[110%]">"From lush indoor greens to vibrant <br /> outdoor blooms, our plants are crafted to <br /> thrive and elevate your living environment."</p>
          <div className="text-[26px] font-[800] ml-2 mt-20 flex gap-16">
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
          </div>
        </div>

        <div className="">
          <h4 className="text-[26px] font-[800] mb-8">Quick Link's</h4>
          <ul className="flex flex-col gap-6 font-medium text-[22px] leading-[100%] tracking-[0%]">
            <li><a href="#" className="border-b-2 hover:text-fv-accent">Home</a></li>
            <li><a href="#" className="border-b-2 hover:text-fv-accent">Type's Of plant's</a></li>
            <li><a href="#" className="border-b-2 hover:text-fv-accent">Contact</a></li>
            <li><a href="#" className="border-b-2 hover:text-fv-accent">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[26px] font-[800] mb-10">For Every Update.</h4>
          <form className="w-[562px] h-[74px] flex items-center justify-between rounded-[8px] border-2 border-white pl-4 pr-1 bg-transparent">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-[20px] px-2"
            />
            <button
              type="submit"
              className="w-[165.08px] h-[64.89px] bg-white text-black font-inter font-bold text-[22px] leading-[27px] uppercase rounded-[8px] hover:bg-white/90 transition-all"
            >
              Subscribe
            </button>
          </form>
          <div className="text-white font-inter font-medium text-[24px] leading-[29px] mt-40">
            FloraVision © all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
