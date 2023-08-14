import React from "react";

export const Security = () => {
  return (
    <>
      <div className="h-full w-full relative">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/security-bg-mobile.jpg"
          alt="DogSecurityImage"
          className="h-full w-full object-cover md:hidden"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg"
          alt="DogSecurityImage"
          className="hidden md:block h-full w-full object-center object-cover"
        />
        <div className="absolute h-[85%] w-full top-[12%] flex flex-col items-center justify-between">
          <div className="h-auto w-full flex flex-col gap-5">
            <span className=" h-auto max-w-[190px] ml-3 font-gilroy-bold text-[65px] tracking-tighter leading-[61.5px] text-left text-[#f8f8f8] font-bold sm:max-w-[350px] md:text-[95px] md:max-w-[607px] md:leading-[100.5px] md:ml-10">
              security first. and second.
            </span>
            <span className="font-gilroy-bold pl-3 text-[20px] tracking-tighter text-left text-[#f8f8f8] font-bold md:pl-10 md:text-[30px]">
              what's your remains only yours.
            </span>
          </div>
          <div className="h-[30%] w-full flex flex-col mb-10 gap-5">
            <span className="max-w-[600px] text-[#f8f8f8] font-semibold pl-3 md:ml-5">
              CRED ensure that all personal data and transactions are encrypted,
              and secured so what's your remains only yours. there's no room for
              mistakes because we didn't leave any.
            </span>
            <button className="h-[50px] w-[250px] ml-2 bg-[#f8f8f8] cursor-pointer font-bold text-[1.1rem] font-gilroy-bold rounded-[50px] md:h-[60px] md:w-[300px] md:text-[1.3rem] md:ml-5">
              Become a member
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
