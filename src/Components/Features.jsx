import React from "react";

export const Features = ({ feature }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center gap-5">
        <span className="h-[20%] w-full max-w-[340px] ml-8 flex items-center justify-center text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold">
          {feature.heading}
        </span>
        <img
          src={feature.imageUrl}
          alt="featureImage"
          className="h-[450px] w-[250px] object-contain mobileShadow"
        />
        <span className="h-[20%] w-full max-w-[460px] text-[#f8f8f8] ml-1 p-5">
          {feature.description}
        </span>
      </div>
    </>
  );
};
