import React, { useState, useEffect } from "react";

export const MobileAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.querySelector(".animated-div");

      if (targetDiv) {
        const targetTop = targetDiv.getBoundingClientRect().top;
        let currValue = window.innerHeight;
        if (
          targetTop === currValue ||
          (currValue > targetTop && currValue <= targetTop + 20)
        ) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="animated-div h-full w-full flex flex-col-reverse relative items-center justify-center bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/video-bg.png)]">
        <div
          className={
            isVisible
              ? "h-[98%] max-w-[900px]  w-full relative top-0 ease-in-out duration-[1.5s] flex justify-center overflow-hidden items-end md:h-[90%]"
              : "relative top-[100%] overflow-hidden"
          }
        >
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
            alt="phoneImage"
            className="h-[80%] w-[250px] z-98 absolute top-15 left-[2%] sm:left-[10%] md:left-[4%] md:w-[300px]"
          />

          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            alt="phoneImage"
            className="h-[90%] w-[300px] z-99 absolute top-15 left-[20%] sm:left-[30%] md:left-[16%] md:w-[330px]"
          />

          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
            alt="phoneImage"
            className="h-[100%] w-[300px] z-[999] absolute top-15 left-[45%] sm:left-[50%] md:left-[33%]"
          />

          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"
            alt="phoneImage"
            className="hidden md:flex h-[90%] w-[300px] z-[99] absolute top-15 right-[16%]"
          />

          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"
            alt="phoneImage"
            className=" hidden md:flex h-[80%] w-[250px] z-98 absolute top-15 right-[3%]"
          />
        </div>
      </div>
    </>
  );
};
