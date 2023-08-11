import React from "react";

export const HeaderBanner = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col-reverse md:items-center">
        <div className="h-[65%] w-[95%] flex flex-col gap-8 ml-7 md:h-[90%] md:ml-0 md:items-center md:justify-center md:gap-10">
          <span className="h-auto w-[55%] text-[55px] font-gilroy-bold tracking-tighter leading-[55.5px] text-left text-[#f8f8f8] font-semibold md:min-w-[728px] md:text-[85px] md:leading-[95px] md:text-center">
            rewards for paying credit cart bills.
          </span>
          <span className="h-auto w-[60%] text-[#f8f8f8] font-bold font-gilroy-bold md:min-w-[500px] md:max-w-[500px] md:text-[20px] md:text-center">
            join 9M+ members who win rewards and cashbacks everyday
          </span>
          <button className="h-[50px] w-[200px] bg-[#f8f8f8] font-bold text-[1.2rem] font-gilroy-bold rounded-[50px] md:h-[80px] md:w-[300px] md:text-[1.3rem]">
            Download CRED
          </button>
        </div>
      </div>
    </>
  );
};
