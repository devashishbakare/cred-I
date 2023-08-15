import React from "react";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";
export const Review = () => {
  return (
    <>
      <div className="h-full w-full border-2 flex flex-col gap-3">
        {/* ratting wrapper start */}
        <div className="h-[40%] w-full border-2 flex flex-col md:flex-row md:h-[50%]">
          {/* app store wrapper */}
          <div className="h-[50%] w-[90%] ml-5 md:h-full md:w-full">
            <div className="h-[80%] w-full flex gap-3">
              <div className="h-full w-[40%] flex flex-col md:items-center justify-center md:w-[50%]">
                <span className="h-[70%] w-full flex items-center pl-4 font-gilroy-bold text-[75px] tracking-tighter leading-[55.5px] text-[#f8f8f8] font-bold md:justify-center md:text-[90px] md:pl-0">
                  4.8
                </span>
                <img
                  src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                  alt="startRatingImage"
                  className="h-[20%] w-[90%] max-w-[200px] object-contain pl-2"
                />
              </div>
              <div className="h-full w-[60%] flex text-[#f8f8f8]">
                <span className="h-full w-full font-gilroy-bold text-[42px] tracking-tighter leading-[40.5px] text-[#f8f8f8] font-bold pt-5 md:pt-[80px] md:text-[45px]">
                  app store
                </span>
              </div>
            </div>
            <div className="hidden md:flex h-[20%] w-full items-center pl-[0.7rem] xl:pl-[2.4rem] 2xl:pl-[3.5rem]">
              <div className="h-[50px] w-[250px] bg-[#f8f8f8] cursor-pointer flex items-center rounded-[50px]">
                <span className="h-full w-[25%] flex items-center justify-center">
                  <IoLogoApple className="text-[1.5rem]" />
                </span>
                <span className="h-full w-[70%] flex items-center font-bold text-[1.1rem] font-gilroy-bold">
                  Download the app
                </span>
              </div>
            </div>
          </div>
          {/* app store end */}
          {/* play store start */}
          <div className="h-[50%] w-[90%] ml-5 md:h-full md:w-full">
            <div className="h-[80%] w-full flex gap-3">
              <div className="h-full w-[40%] flex flex-col md:items-center justify-center md:w-[50%]">
                <span className="h-[70%] w-full flex items-center pl-4 font-gilroy-bold text-[75px] tracking-tighter leading-[55.5px] text-[#f8f8f8] font-bold md:justify-center md:text-[90px] md:pl-0">
                  4.7
                </span>
                <img
                  src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                  alt="startRatingImage"
                  className="h-[20%] w-[90%] max-w-[200px] object-contain pl-2"
                />
              </div>
              <div className="h-full w-[60%] flex text-[#f8f8f8]">
                <span className="h-full w-full font-gilroy-bold text-[42px] tracking-tighter leading-[40.5px] text-[#f8f8f8] font-bold pt-5 md:pt-[80px] md:text-[45px]">
                  play store
                </span>
              </div>
            </div>
            <div className="hidden md:flex h-[20%] w-full items-center pl-[0.7rem] xl:pl-[2.4rem] 2xl:pl-[3.5rem]">
              <div className="h-[50px] w-[250px] bg-[#f8f8f8] cursor-pointer flex items-center rounded-[50px]">
                <span className="h-full w-[25%] flex items-center justify-center">
                  <IoLogoGooglePlaystore className="text-[1.5rem]" />
                </span>
                <span className="h-full w-[70%] flex items-center font-bold text-[1.1rem] font-gilroy-bold">
                  Download the app
                </span>
              </div>
            </div>
          </div>
          {/* play store end */}
        </div>
        {/* ratting wrapper end */}
      </div>
    </>
  );
};
