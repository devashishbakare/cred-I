import React, { useEffect } from "react";
import displayFeatures from "../Constants";

export const FadeInEffect = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      sections.forEach((section, index) => {
        const opacity = 1 - (index - scrollTop / window.innerHeight);
        section.style.opacity = Math.max(0, Math.min(opacity, 1));
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-full w-full overflow-y-scroll">
      <div className="featureMaxDiv text-white gap-5">
        <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
          {displayFeatures[0].heading}
        </span>
        <span className="h-auto max-w-[460px] text-[#f8f8f8]">
          {displayFeatures[0].description}
        </span>
      </div>

      <div className="featureMaxDiv text-white gap-5">
        <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
          {displayFeatures[1].heading}
        </span>
        <span className="h-auto max-w-[460px] text-[#f8f8f8]">
          {displayFeatures[1].description}
        </span>
      </div>

      <div className="featureMaxDiv text-white gap-5">
        <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
          {displayFeatures[2].heading}
        </span>
        <span className="h-auto max-w-[460px] text-[#f8f8f8]">
          {displayFeatures[2].description}
        </span>
      </div>
      <div className="featureMaxDiv text-white gap-5">
        <span className="h-auto max-w-[340px] flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
          {displayFeatures[3].heading}
        </span>
        <span className="h-auto max-w-[460px] text-[#f8f8f8]">
          {displayFeatures[3].description}
        </span>
      </div>
    </div>
  );
};
