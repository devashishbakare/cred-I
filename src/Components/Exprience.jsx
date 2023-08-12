import React from "react";

export const Exprience = () => {
  return (
    <>
      <div className="h-full w-full relative">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg-mobile.jpg"
          alt="experienceImage"
          className="h-full w-full object-cover md:hidden"
        />
        <div className="hidden md:flex experienceBackground"></div>
        <div className="absolute top-[38%] left-3 h-[570px] flex flex-col justify-evenly md:top-[10%] md:left-6 md:h-[700px]">
          <div className="h-[45%] w-full flex flex-col gap-7 md:h-[55%]">
            <span className="max-w-[447px] ml-3 font-gilroy-bold text-[50px] tracking-tighter leading-[45.5px] text-left text-[#f8f8f8] font-bold md:text-[75px] md:max-w-[607px] md:leading-[90.5px]">
              we take your money matters seriously.
            </span>
            <span className="font-gilroy-bold ml-3 text-[20px] tracking-tighter leading-[22.5px] text-left text-[#f8f8f8] font-bold">
              so that you don't have to.
            </span>
          </div>
          <div className="h-[55%] w-full flex flex-col justify-end gap-7 mb-10 md:h-[45%]">
            <span className="max-w-[650px] text-[#f8f8f8] font-semibold ml-1">
              never miss a due date with reminders to help you pay your nills on
              time, instant settlements mean you never wait for your payments to
              go through and statement analysis lets you know where you money
              goes, always.
            </span>
            <button className="h-[50px] w-[250px] ml-1 bg-[#f8f8f8] font-bold text-[1.1rem] font-gilroy-bold rounded-[50px] md:h-[80px] md:w-[300px] md:text-[1.3rem]">
              Experience the upgrade
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
