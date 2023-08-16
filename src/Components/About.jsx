import React from "react";
import { aboutDescription } from "../Constants";
export const About = () => {
  return (
    <>
      <div className="h-auto w-full p-5 bg-[#242424] flex flex-col gap-6">
        {aboutDescription.map((aboutData, index) => (
          <>
            <div
              key={index - "about"}
              className="h-auto w-full flex flex-col  text-[#f8f8f8] gap-[15px]"
            >
              <span className="font-gilroy-bold text-[1.1rem] tracking-tighter leading-[30.5px] font-semibold">
                {aboutData.heading}
              </span>
              <span className="font-gilroy-bold text-[15px] tracking-tighter leading-8 opacity-[0.7]">
                {aboutData.description}
              </span>
            </div>
          </>
        ))}
        <hr />
        <div className="h-auto w-full flex flex-col  text-[#f8f8f8] gap-[15px]">
          <span className="font-gilroy-bold text-[15px] tracking-tighter leading-8 ">
            <span className="font-gilroy-bold text-[18px] tracking-tighter leading-8 font-semibold mr-1 opacity-1">
              Calculators&nbsp;: &nbsp;
            </span>
            <span className="opacity-[0.7]">
              SIP calculator &nbsp;|&nbsp; EMI calculator &nbsp;|&nbsp; PPF
              calculator &nbsp;|&nbsp; home loan calculatorcar &nbsp;|&nbsp;
              loan calculator &nbsp;|&nbsp; fixed deposit &nbsp;|&nbsp;
              calculator recurring deposit &nbsp;|&nbsp; calculator simple loan
              &nbsp;|&nbsp; calculator compound &nbsp;|&nbsp; interest
              calculator
            </span>
          </span>
          <span className="font-gilroy-bold text-[15px] tracking-tighter leading-8">
            <span className="font-gilroy-bold text-[18px] tracking-tighter leading-8 font-semibold mr-1 opacity-1">
              credit card bill payment&nbsp;: &nbsp;
            </span>
            <span className="opacity-[0.7]">
              American &nbsp;|&nbsp; Express &nbsp;|&nbsp; Standard Chartered
              &nbsp;|&nbsp; HDFC &nbsp;|&nbsp;ICICI
              &nbsp;|&nbsp;SBI&nbsp;|&nbsp; AXIS &nbsp;|&nbsp;RBL
              &nbsp;|&nbsp;PNB &nbsp;|&nbsp;YES Bank
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

// how does CRED reward their users?
// CRED partners with the best premier and luxury brands to bring you an unmatched experience at the end of every credit card bill payment cycle.
// how to earn rewards on CRED?
// members can earn rewards in two different ways. CRED coins & gems.
// CRED Coin Rewards:
// - when you pay your credit card bill on CRED, for every rupee cleared on your bill you earn a CRED coin.
// - you can then use earned CRED coins to claim exclusive rewards from different brands.
// CRED Gem Rewards:
// - for every person that you refer to CRED who makes a bill payment, you earn 10 gems.
