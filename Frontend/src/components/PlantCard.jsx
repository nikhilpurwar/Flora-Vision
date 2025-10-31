// import React from "react";
// import clsx from "clsx";

// export default function PlantCard({ id, title, name, price, excerpt, desc, img, variant }) {
//   const isLarge = variant === "large";
//   return (
//     <article className={clsx("glass rounded-[151px] p-6 shadow-card transition-transform hover:-translate-y-1", { "w-[1619px] h-[526px] flex gap-6 items-center": isLarge })}>
//       <img src={img || "/images/placeholder.jpg"} alt={title || name} className={clsx("rounded-lg object-cover", { "w-[601px] h-[732px]": isLarge, "w-[459px] h-[459px]": !isLarge })} />
//       <div className="flex-1">
//         <p className="text-green-200 text-sm mb-1">{name || title}</p>
//         <h3 className="text-xl font-semibold text-white">{title || name}</h3>
//         <p className="mt-3 text-gray-300">{excerpt || desc}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <div className="text-lg font-bold">{price}</div>
//           <div className="flex items-center gap-2">
//             <button className="px-3 py-2 border rounded-md hover:bg-white/6">Explore</button>
//             <button className="p-2 rounded-md hover:bg-white/6" aria-label="add to cart">🛒</button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }


import React from "react";
import bagIcon from '../assets/bag.png'

export default function PlantCard({ id, title, name, price, excerpt, desc, img }) {

  return (
    <>
      <article
        className={`${id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} 
        flex w-[1619px] h-[526px] glass rounded-[151px] p-6 shadow-card transition-transform hover:-translate-y-1 gap-1 items-center customBorder`}
      >

        <div className={`w-1/2 flex ${id % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
          <img src={img || "/images/placeholder.jpg"} alt={title || name} className="mb-36 rounded-lg object-cover w-[601px] h-[732px]" />
        </div>
        <div className={`flex-1 ${id % 2 === 0 ? 'pl-12' : ''}`}>
          <p className="text-white text-[38px] font-[600] mb-1">{name || title}</p>
          <p className="w-[732px] mt-6 text-white text-[20px] font-[600]">{excerpt || desc}</p>
          <p
            className="w-[171px] h-[46px] mt-6 font-inter font-semibold text-[38px] leading-[46px] text-white"
            style={{
              textShadow: `
              0px 37px 80px rgba(0, 0, 0, 0.62),
              0px 15.4577px 33.4221px rgba(0, 0, 0, 0.44569),
              0px 8.26443px 17.869px rgba(0, 0, 0, 0.369586),
              0px 4.63297px 10.0172px rgba(0, 0, 0, 0.31),
              0px 2.46054px 5.32008px rgba(0, 0, 0, 0.250414),
              0px 1.02388px 2.21381px rgba(0, 0, 0, 0.17431)
            `
            }}
          >
            {price}
          </p>
          <div className="mt-5 flex items-center gap-6">
            <button className="flex justify-center items-center w-[217px] h-[64px] border-2 rounded-[12px] text-[28px] font-[500] hover:bg-white/6">Explore</button>
            <button className="flex justify-center items-center w-[64px] h-[64px] border-2 rounded-[12px] hover:bg-white/6" aria-label="add to cart">
              <img className="w-[34px] h-[34px]" src={bagIcon} alt="bagIcon" />
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
