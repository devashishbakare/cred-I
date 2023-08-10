import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="h-full w-full flex">
        <div className="h-full w-[50%] flex items-center ml-5">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
            alt="credImage"
            className="h-[55px] w-[43px]"
          />
        </div>

        <div className="h-full w-[50%] flex flex-row-reverse items-center">
          {!showMenu && (
            <>
              <AiOutlineMenu
                className="text-white text-[2.2rem] mr-5 cursor-pointer"
                onClick={() => setShowMenu(true)}
              />
            </>
          )}

          <div
            className={
              showMenu
                ? "h-[100vh] w-[100vw] bg-[#0f0f0f] fixed left-0 top-0 ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <div className="h-[15vh] w-full flex items-center justify-between">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
                alt="credImage"
                className="h-[70px] w-[58px] ml-5"
              />
              <span className="h-[15vh] w-[50%] flex flex-row-reverse items-center justify-between">
                <AiOutlineClose
                  className=" text-white text-[2.2rem] mr-5 cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
              </span>
            </div>
            <div className="h-[50%] w-full flex flex-col border-2 items-center justify-center gap-10">
              <span className="text-white h-20 w-[80%] bg-[#272b2d6e] flex items-center justify-center rounded-[20px] cursor-pointer">
                CRED pay
              </span>
              <span className="text-white h-20 w-[80%] bg-[#272b2d6e] flex items-center justify-center rounded-[20px] cursor-pointer">
                credit score check
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
