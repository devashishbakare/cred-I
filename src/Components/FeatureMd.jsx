import React, { useEffect, useState } from "react";

import { displayFeatures } from "../Constants";

export const FeatureMd = () => {
  const [imagePath, setImagePath] = useState(displayFeatures[0].imageUrl);
  const [opacityValue, setOpacityValue] = useState(Array(4).fill(0));
  useEffect(() => {
    const handleScroll = () => {
      const scrollPossition = scrollSectionOnPage.scrollTop;
      // console.log(scrollPossition);
      if (scrollPossition >= 0 && scrollPossition <= 180) {
        setImagePath(displayFeatures[0].imageUrl);
        const updateOpacity = new Array(4).fill(0);
        updateOpacity[0] = 1;
        setOpacityValue(updateOpacity);
      }
      if (scrollPossition >= 181 && scrollPossition <= 750) {
        setImagePath(displayFeatures[1].imageUrl);
        const updateOpacity = new Array(4).fill(0);
        updateOpacity[1] = 1;
        setOpacityValue(updateOpacity);
      }
      if (scrollPossition >= 751 && scrollPossition <= 1350) {
        setImagePath(displayFeatures[2].imageUrl);
        const updateOpacity = new Array(4).fill(0);
        updateOpacity[2] = 1;
        updateOpacity[3] = 0;
        setOpacityValue(updateOpacity);
      }
      if (scrollPossition >= 1351 && scrollPossition <= 1548) {
        setImagePath(displayFeatures[3].imageUrl);
        const updateOpacity = new Array(4).fill(0);
        updateOpacity[2] = 0;
        updateOpacity[3] = 1;
        setOpacityValue(updateOpacity);
      }
    };

    const scrollSectionOnPage = document.querySelector(".targetScrollDiv");
    scrollSectionOnPage.addEventListener("scroll", handleScroll);

    return () => {
      scrollSectionOnPage.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-full w-full relative flex flex-col overflow-y-scroll targetScrollDiv">
        {/*  */}
        <div className={`min-h-[1px] w-full opacity-0`}></div>
        {/*  */}

        <div
          className={`min-h-[600px] w-full opacity-${opacityValue[0]} flex flex-col justify-end pb-[80px] pl-[5%] gap-5`}
        >
          <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
            {displayFeatures[0].heading}
          </span>
          <span className="h-auto max-w-[340px] text-[#f8f8f8]">
            {displayFeatures[0].description}
          </span>
        </div>
        <div
          className={`min-h-[600px] w-full opacity-${opacityValue[1]} flex flex-col justify-end pb-[80px] pl-[5%] gap-5`}
        >
          <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
            {displayFeatures[1].heading}
          </span>
          <span className="h-auto max-w-[340px] text-[#f8f8f8]">
            {displayFeatures[1].description}
          </span>
        </div>
        <div
          className={`min-h-[600px] h-full w-full opacity-${opacityValue[2]} flex flex-col justify-end pb-[80px] pl-[5%] gap-5`}
        >
          <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
            {displayFeatures[2].heading}
          </span>
          <span className="h-auto max-w-[340px] text-[#f8f8f8]">
            {displayFeatures[2].description}
          </span>
        </div>
        <div
          className={`min-h-[600px] h-full w-full opacity-${opacityValue[3]} flex flex-col pt-[8%] pl-[5%] gap-5`}
        >
          <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
            {displayFeatures[3].heading}
          </span>
          <span className="h-auto max-w-[340px] text-[#f8f8f8]">
            {displayFeatures[3].description}
          </span>
        </div>
        {/* </div> */}
        <div className="hidden md:flex min-h-[2400px] z-999 bg-[#0f0f0f] h-full w-[45%] ml-3 absolute top-0 right-0 justify-center">
          <div className="h-[480px] w-[272px] sticky top-[22%]">
            <div className="h-full overflow-hidden flex justify-center top-0  mobileShadow">
              <img src={imagePath} alt="mobileImage" className="opacity-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
