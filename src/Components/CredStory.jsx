import React from "react";

export const CredStory = () => {
  return (
    <>
      <div className="h-full w-full relative">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/trust-bg.jpg"
          alt="greenBackgroundImage"
          className="h-full w-full object-cover"
        />
        <div className="absolute h-[90%] w-full top-[5%] flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="h-[30%] w-full p-2 ml-5 mt-10 md:h-full md:w-[40%]">
            {/* <span className="h-[100%] w-[100%] border-red-800 font-gilroy-bold text-[50px] tracking-tighter leading-[45.5px] text-[#f8f8f8] font-bold md:flex flex-col justify-end pb-[40%]">
              the story of CRED begins with trust.
            </span> */}
            <div className="h-full w-full max-w-[300px] border-red-800 font-gilroy-bold text-[55px] tracking-tighter leading-[55.5px] text-[#f8f8f8] font-bold sm:ml-10 md:flex flex-col justify-end pb-[25%] md:text-[65px] md:leading-[70.5px]">
              the story of CRED begins with trust.
            </div>
          </div>
          <div className="auto mt-[5%] flex flex-col gap-5 p-3 sm:p-5 md:h-full md:w-[40%] md:mt-[4%] md:justify-center md:items-center">
            <span className="max-w-[550px] text-[15px] text-[#f8f8f8] ml-1 sm:text-[18px] sm:font-semibold md:max-w-[350px]">
              trust as a virtue has consistently played an essential role in
              every great human achievement. and consistently, its importance
              has been overlooked. not just by individuals, but by entire
              societies. we felt it was time someone gave it the spotlight it
              deserves. especially for the ones who live by this virtue: the
              trustworthy. so we thought of creating a system that rewards its
              members for doing good and being trustworthy.
            </span>
            <span className="max-w-[550px] text-[15px] text-[#f8f8f8] ml-1 sm:text-[18px] sm:font-semibold md:max-w-[350px]">
              this way, trust as a virtue becomes something to aspire to, just
              the way it should be. then we went one step ahead: we built it. we
              know we are on the right track because here you are.
            </span>
            <span className="max-w-[550px] text-[15px] text-[#f8f8f8] ml-1 sm:text-[18px] sm:font-semibold md:max-w-[350px]">
              if you make it to CRED, congratulations and welcome. we have a lot
              of things planned for you.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
