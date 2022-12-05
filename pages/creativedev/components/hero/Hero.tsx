import React from "react";
import hero from "../assets/hero.svg";
import downloadicon from "../assets/downloadicon.svg";
import toparrow from "../assets/toparrow.svg";
import Button from "../button/Button";
import Image from "next/image";
import ArrowDown from "../arrowdown/ArrowDown";
import { Animated } from "react-animated-css";
import "animate.css/animate.css";

function Hero() {
  return (
    <div className="flex flex-col ">
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

      {/* <div className="hidden sm:block w-full h-[0.01rem] rotate-90 bg-slate-50 self-center "></div> */}

      <div className="mx-6 my-32 sm:my-auto sm:flex sm:flex-row justify-around sm:mt-56 lg:mx-12 lg:my-20">
        <Animated
          animationIn="bounceInLeft"
          // animationOut="fadeOut"
          isVisible={true}
          animationInDelay={500}
        >
          <div className=" flex items-center justify-center lg:items-start lg:mt-20">
            <Image
              className="hidden h-36 w-8 lg:block mr-2 md:h-44 md:w-10 lg:w-36 lg:h-40 lg:mt-16 "
              src={toparrow}
              alt="arrow"
            />
            <div>
              <div>
                <h1 className="text-[2.4rem] xsm:text-5xl  sm:text-7xl  md:text-6xl lg:text-8xl tracking-wider font-bold text-white ">
                  CREATIVE UI<span className="text-brand-text"> DEVELOPER</span>
                </h1>
              </div>
              <div className="mt-4 lg:mt-8 flex gap-x-2 lg:gap-x-8">
                <Button text="Hire me" />
                <Button text="Download CV" icon={downloadicon} />
              </div>
            </div>
          </div>
        </Animated>
        <div className="hidden md:block lg:mt-16 lg:w-[50rem]">
          <Animated
            animationIn="bounceInRight"
            // animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
          >
            <Image className="" alt="her image" src={hero} />
          </Animated>
        </div>
      </div>
      <div>
        
      </div>
      <ArrowDown />
    </div>
  );
}


export default Hero;
