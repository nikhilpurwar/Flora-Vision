import React from 'react'
import bagIcon from '../assets/bag.png'

const TopSelling = ({ id, title, name, price, excerpt, desc, img }) => {
  return (
    <div className="relative w-[512px] h-[644px] justify-self-center ">
      {/* Glass Background */}
      <div
        className="absolute top-[75px] w-[512px] h-[644px] glass customBorder hero-clip-custom"
      />

      {/* Plant Image */}
      <img
        src={img}
        alt="Aglaonema Plant"
        className="absolute -top-4 w-[500px] h-[500px] drop-shadow-[0px_-98px_80px_rgba(0,0,0,0.17)]"
      />
      <div className="absolute bottom-4 w-full px-16 flex flex-col gap-4">
        {/* Text Section */}
        <div className="text-[#FFFFFFBF] font-[400] font-inter leading-[28px]">
          <p className="mb-6 text-[38px] ">
            {name}
          </p>
          <p className="text-[24px]">
            {desc}
          </p>
        </div>

        {/* footer */}
        <div className="flex items-center justify-between">
          <p className="text-[#FFFFFFBF] text-[38px] font-[400] font-inter leading-[46px] mt-[4px]">
            {price}
          </p>
          <button className="flex justify-center items-center w-[55px] h-[55px] border-2 rounded-[12px] hover:bg-white/6" aria-label="add to cart">
            <img className="w-[27px] h-[27px]" src={bagIcon} alt="bagIcon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopSelling