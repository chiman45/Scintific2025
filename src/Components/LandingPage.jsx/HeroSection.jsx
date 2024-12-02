import React from "react";
import "./HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export const HeroSection = () => {
  return (
    <>
      <div className="Back_Area" >
        <div className="flex flex-col justify-center items-start h-[540px] px-10 rounded-xl MobileVersion">
          <div className="flex flex-col justify-start items-start  space-y-1">
            <div className="font-extrabold text-transparent text-[4.25rem] bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9] SCIFISIZE">
              SCI<span id="eta">&#951;</span>
              <span id="prime">&#8242;</span>TFIC 2k25
            </div>
            <div className="text-transparent text-[1.75rem] bg-clip-text bg-gradient-to-r from-[#272727] to-[#272727CC] TEXTSIZE">
              Science and Technology over Fiction
            </div>
            <div className="text-transparent text-[1.5rem] bg-clip-text bg-gradient-to-r from-[#272727] to-[#272727CC] TEXTSIZE">
              18th January 2025
            </div>
            <div className="text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-[#B24592] to-[#F15F79] font-bold idea_adjust">
              Ideathon 7.0
            </div>
            <div className="text-xl italic text-transparent  bg-clip-text bg-gradient-to-r from-[#272727] to-[#414345] font-bold size_adjust">
              Young Innovative Competition
            </div>
            <div className="text-base  text-transparent  bg-clip-text bg-gradient-to-r from-[#272727] to-[#414345] font-bold w-[550px] pt-2 TEXTSIZE1">
              Compete with the most innovative and enthusiastic minds from across the nation in Ideathon 7.0! Stand a chance to win exciting cash prizes for securing 1st, 2nd, and 3rd positions in each category.
            </div>
            <div className="text-base  text-transparent  bg-clip-text bg-gradient-to-r from-[#272727] to-[#414345] font-bold  w-[550px] pt-1 TEXTSIZE1">
              Come and join us at DSPM IIIT Naya Raipur to showcase your
              innovative and creative ideas and prototypes to solve real life
              problems.
            </div>
            <div className="flex flex-row justify-start items-center pt-4 lg:space-x-8 BUTTON">
              <a href='#participate' className="text-[#5172E7] w-[180px] h-[48px] rounded-full border-2 drop-shadow-xl shadow-2xl shadow-[#F5F5F5] flex justify-center items-center bg-white font-semibold text-opacity-80 cursor-pointer BUTTON1">
                How to Participate
              </a>
              <a href='#themes' className="w-[180px] h-[48px] rounded-full border-2 drop-shadow-xl cursor-pointer flex justify-center items-center text-transparent  bg-clip-text bg-gradient-to-r from-[#272727] to-[#272727CC] font-bold border-[#272727] BUTTON1">
                This year’s themes
              </a>
            </div>
          </div>
          {/* <div className='grid grid-cols-2 place-content-start place-items-start'> */}
          {/* </div> */}
        </div>
        <div className="top-0 right-10 w-[632px] h-[740px] -z-10 SET_IMAGE">
          <img src="./assets/landingpage.png" className="scale-90" alt="" />
        </div>
      </div>
    </>
  );
};
