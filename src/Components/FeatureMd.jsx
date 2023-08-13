import React from "react";
import { FadeInEffect } from "./FadeInEffect";
import displayFeatures from "../Constants";

export const FeatureMd = () => {
  return (
    <>
      {/* <div className="h-full w-full relative flex"> */}
      <div className="h-full w-full relative flex flex-col overflow-y-scroll">
        <div className="min-h-[600px] w-full opacity-1 border-2 flex flex-col justify-end pb-[80px] pl-[5%] gap-5">
          <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
            {displayFeatures[0].heading}
          </span>
          <span className="h-auto max-w-[340px] text-[#f8f8f8]">
            {displayFeatures[0].description}
          </span>
        </div>
        <div className="min-h-[600px] w-full opacity-1 border-2 flex flex-col justify-end pb-[80px] pl-[5%] gap-5">
          <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
            {displayFeatures[1].heading}
          </span>
          <span className="h-auto max-w-[340px] text-[#f8f8f8]">
            {displayFeatures[1].description}
          </span>
        </div>
        <div className="min-h-[600px] h-full w-full opacity-1 flex flex-col justify-end pb-[80px] pl-[5%] gap-5">
          <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
            {displayFeatures[2].heading}
          </span>
          <span className="h-auto max-w-[340px] text-[#f8f8f8]">
            {displayFeatures[2].description}
          </span>
        </div>
        <div className="min-h-[600px] h-full w-full opacity-1 border-2 flex flex-col justify-end pb-[80px] pl-[5%] gap-5">
          <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
            {displayFeatures[3].heading}
          </span>
          <span className="h-auto max-w-[340px] text-[#f8f8f8]">
            {displayFeatures[3].description}
          </span>
        </div>
        {/* </div> */}
        <div className="flex min-h-[2400px] z-999 bg-[#0f0f0f] h-full w-[45%] ml-3 absolute top-0 right-0 justify-center border-2">
          <div className="h-[480px] w-[272px] sticky top-[22%]">
            <div className="h-full overflow-hidden flex justify-center top-0  mobileShadow">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png"
                alt="mobileImage"
                className="opacity-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
