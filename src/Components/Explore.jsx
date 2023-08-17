import React from "react";

export const Explore = () => {
  return (
    <>
      <div className="h-full w-full explorBackground bg-cover flex flex-col justify-between md:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg)] md:bg-center">
        <div className="h-[30%] w-full  flex flex-col gap-10">
          <span className="max-w-[447px] ml-3 font-gilroy-bold text-[70px] tracking-tighter leading-[60.5px] text-left text-[#f8f8f8] font-bold md:text-[100px] md:max-w-[607px] md:leading-[90.5px]">
            feel special more often.
          </span>
          <span className="font-gilroy-bold ml-3 text-[20px] tracking-tighter leading-[22.5px] text-left text-[#f8f8f8] font-bold">
            exclusive rewards for paying your bills
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="max-w-[650px] text-[#f8f8f8] font-bold ml-3">
            every time you pay your credit cart bills on CRED, you receive CRED
            coins. you can use these to win exclusive rewards or get special
            access to curated products and experiences. on CRED, good begets
            good.
          </span>
          <button className="h-[50px] w-[200px] ml-3 bg-[#f8f8f8] font-bold text-[1.2rem] font-gilroy-bold rounded-[50px] md:h-[80px] md:w-[300px] md:text-[1.3rem]">
            Explore rewards
          </button>
        </div>
      </div>
    </>
  );
};
