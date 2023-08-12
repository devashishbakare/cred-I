import React from "react";

export const Reward = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col gap-5  border-black md:gap-2 items-center justify-center">
        <span className="h-[20%] w-[95%] flex items-center justify-center  text-[1.2rem] font-gilroy-bold font-semibold  border-black sm:justify-normal sm:ml-10">
          rewards from brands you love.
        </span>
        <div className="h-[60%] w-[95%] flex justify-center items-center  border-black sm:h-[80%] sm:justify-normal sm:ml-10 md:h-[40%]">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/brands-mobile.png"
            alt="partnersImage"
            className="h-full w-[300px] object-contains sm:w-[400px] md:hidden"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/brands-desktop.png"
            alt="partnersImage"
            className="hidden md:flex h-auto w-[90%]"
          />
        </div>
      </div>
    </>
  );
};
