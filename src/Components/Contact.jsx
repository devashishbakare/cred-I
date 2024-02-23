import React, { useState } from "react";
import {
  AiOutlineCopyrightCircle,
  AiOutlinePlus,
  AiOutlineClose,
} from "react-icons/ai";

export const Contact = () => {
  const [showMenu, setShowMenu] = useState(Array(4).fill(false));
  const updateStatus = (index) => {
    const prevValue = showMenu[index];
    const status = new Array(4).fill(false);
    status[index] = !prevValue;
    setShowMenu(status);
  };
  return (
    <>
      <div className="h-auto w-full p-3 flex flex-col items-center justify-center text-white gap-4">
        {/* Top section wrapper */}

        <div className="h-full w-full flex flex-col md:flex-row gap-5 md:items-center md:justify-center">
          <div className="h-[30vh] min-h-[270px] max-w-[400px] w-full flex flex-col gap-4 justify-center sm:ml-[7%] md:w-[50%] md:min-h-[450px] md:max-w-[330px] md:justify-normal">
            <div className="h-[20%] w-full flex items-center gap-5">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png"
                alt="credImage"
                className="h-[45px] w-[133px]"
              />
            </div>

            <div className="h-[20%] w-full flex items-center gap-5">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
                alt="credImage"
                className="h-[55px] w-[283px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-gilroy-bold text-[20px] tracking-tighter text-[#f8f8f8] font-semibold">
                complete security. no asterisks.
              </span>
              <span className="font-gilroy-bold text-[14px] leading-[25px] tracking-tighter text-[#f8f8f8] opacity-[0.7]">
                CRED encrypts all data and transactions to ensure a completely
                secure experience for our members.
              </span>
            </div>
          </div>
          <div className="h-auto w-full  flex flex-col items-center justify-center sm:hidden">
            <div
              className="h-[8vh] min-h-[72px] w-full border-t-2 flex items-center justify-between pl-1 pr-1 cursor-pointer"
              onClick={() => updateStatus(0)}
            >
              <span className="font-gilroy-bold text-[1rem] tracking-tighter leading-[30.5px]">
                products
              </span>
              {showMenu[0] ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <AiOutlinePlus />
                </>
              )}
            </div>
            {showMenu[0] && (
              <>
                <div className="h-auto w-full flex flex-col opacity-[0.7] gap-2 mb-5">
                  <span className="w-full pl-2 text-[0.9rem]">CRED pay</span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    credit score check
                  </span>
                </div>
              </>
            )}
            <div
              className="h-[8vh] min-h-[72px] w-full border-t-2 flex items-center justify-between pl-1 pr-1 cursor-pointer"
              onClick={() => updateStatus(1)}
            >
              <span className="font-gilroy-bold text-[1.1rem] tracking-tighter leading-[30.5px]">
                CRED
              </span>
              {showMenu[1] ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <AiOutlinePlus />
                </>
              )}
            </div>
            {showMenu[1] && (
              <>
                <div className="h-auto w-full flex flex-col opacity-[0.7] gap-2 mb-5">
                  <span className="w-full pl-2 text-[0.9rem]">about</span>
                  <span className="w-full pl-2 text-[0.9rem]">careers</span>
                  <span className="w-full pl-2 text-[0.9rem]">IPL</span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    customer care
                  </span>
                </div>
              </>
            )}
            <div
              className="h-[8vh] min-h-[72px] w-full border-t-2 flex items-center justify-between pl-1 pr-1 cursor-pointer"
              onClick={() => updateStatus(2)}
            >
              <span className="font-gilroy-bold text-[1.1rem] tracking-tighter leading-[30.5px]">
                resources
              </span>
              {showMenu[2] ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <AiOutlinePlus />
                </>
              )}
            </div>
            {showMenu[2] && (
              <>
                <div className="h-auto w-full flex flex-col opacity-[0.7] gap-2 mb-5">
                  <span className="w-full pl-2 text-[0.9rem]">articles</span>
                  <span className="w-full pl-2 text-[0.9rem]">tech blogs</span>
                  <span className="w-full pl-2 text-[0.9rem]">calculators</span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    credit card payment guide
                  </span>
                  <span className="w-full pl-2 ">credit score guide</span>
                </div>
              </>
            )}

            <div
              className={`h-[8vh] min-h-[72px] w-full border-t-2 flex items-center justify-between pl-1 pr-1 cursor-pointer ${
                showMenu[3] ? "" : "border-b-2"
              }`}
              onClick={() => updateStatus(3)}
            >
              <span className="font-gilroy-bold text-[1.1rem] tracking-tighter leading-[30.5px]">
                policy
              </span>
              {showMenu[3] ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <AiOutlinePlus />
                </>
              )}
            </div>
            {showMenu[3] && (
              <>
                <div className="h-auto w-full flex flex-col opacity-[0.7] gap-2 mb-5">
                  <span className="w-full pl-2 text-[0.9rem]">security</span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    transactions & user varification
                  </span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    google API disclousure
                  </span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    UPI faq and grievances
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="hidden sm:flex min-h-[450px] h-[50vh] ml-[7%] w-full flex-col  md:w-[50%] md:max-w-[400px]">
            <div className="h-[50%] w-full flex">
              <div className="h-auto w-[50%] flex flex-col opacity-[0.7] gap-2 mb-5">
                <span className="font-gilroy-bold text-[1.2rem] tracking-tighter leading-[30.5px] font-semibold mb-3">
                  products
                </span>
                <span className="w-full text-[0.8rem]">CRED pay</span>
                <span className="w-full text-[0.8rem]">credit score check</span>
              </div>

              <div className="h-auto w-[30%] flex flex-col opacity-[0.7] gap-2 mb-5 md:w-[50%]">
                <span className="font-gilroy-bold text-[1.2rem] tracking-tighter leading-[30.5px] font-semibold mb-3">
                  CRED
                </span>
                <span className="w-full text-[0.8rem]">about</span>
                <span className="w-full text-[0.8rem]">careers</span>
                <span className="w-full text-[0.8rem]">IPL</span>
                <span className="w-full text-[0.8rem]">customer care</span>
              </div>
            </div>
            <div className="h-[50%] w-full flex ">
              <div className="h-auto w-[50%] flex flex-col opacity-[0.7] gap-2 mb-5">
                <span className="font-gilroy-bold text-[1.2rem] tracking-tighter leading-[30.5px] font-semibold mb-3">
                  resources
                </span>
                <span className="w-full text-[0.8rem]">articles</span>
                <span className="w-full text-[0.8rem]">tech blogs</span>
                <span className="w-full text-[0.8rem]">calculators</span>
                <span className="w-full text-[0.8rem]">credit cart guide</span>
                <span className="w-full text-[0.8rem]">credit score guide</span>
              </div>

              <div className="h-auto w-[50%] flex flex-col opacity-[0.7] gap-2 mb-5">
                <span className="font-gilroy-bold text-[1.2rem] tracking-tighter leading-[30.5px] font-semibold mb-3">
                  policy
                </span>
                <span className="w-full text-[0.8rem]">security</span>
                <span className="w-full text-[0.8rem]">
                  transactions & user verification
                </span>
                <span className="w-full text-[0.8rem]">
                  google API disclousure
                </span>
                <span className="w-full text-[0.8rem]">
                  UPI faq & grievances
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* End top Section wrapper */}

        <div className="h-[180px] w-full  flex flex-col text-white justify-center gap-1  sm:pl-[7%] md:h-[15%] md:flex-row md:items-center mt-[10px] opacity-[0.5]">
          <span className="h-[50%] w-full max-w-[330px] md:h-[60%]">
            {/* copyright <AiOutlineCopyrightCircle className="inline-block" />{" "}
            2020-23 Dreamplug Technologes Pvt.Ltd. */}
          </span>

          <span className="h-[50%] w-full flex max-w-[330px] md:h-[60%]">
            <span className="">privacy policy</span>
            <span className="">terms and conditions</span>
            <span className="">returns and refunds</span>
          </span>
        </div>
      </div>
    </>
  );
};

//I have added contact section for mobile tomorrow, you have to hide contact at sm and start doing it for sm and lg(flex change)
