import Image from "next/image";
import React from "react";
import aboutmeimage from "../components/assets/aboutme.svg";
import lightbulb from "../components/assets/lightbulb.svg";
import staff from "../components/assets/staff.svg";
import arrow from "../components/assets/arrow.svg";
function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-row h-screen items-center mx-6 mt-14  lg:mt-[9rem] lg:mx-20 relative"
    >
      <div>
        <Image
          src={staff}
          alt="bulb"
          className="absolute -top-14 mb-10 w-16 h-10 "
        />

        <div className=" sm:w-1/2 mt-10 lg:w-full md:w-full">
          <div className="flex items-center">
            <h1 className="text-white text-4xl font-bold lg:text-6xl">
              About <span className="text-brand-text">Me</span>
            </h1>
            <Image
              src={lightbulb}
              alt="bulb"
              className=" ml-4 w-16 h-16 lg:h-24 "
            />
          </div>
          <p className="w-full sm:w-50 text-slate-300 text-md text-left md:w-[85%] lg:text-lg lg:mt-4 lg:w-[80%]">
            Creative Developer with innovative ideas and a unique approach to
            visuals and user interfaces. More than seven years of experience
            developing websites clients in the B2B space. Solid understanding of
            software development principles and Product Design .
          </p>
        </div>
        <Image
          src={arrow}
          alt="bulb"
          className="mt-20 ml-40 w-36 h-24 -rotate-30 "
        />
      </div>
      <div className=" hidden md:block md:w-[120rem] md:h-[16rem] lg:h-[38rem] lg:mt-32 w-auto">
        <Image src={aboutmeimage} alt="aboutmeimage" />
      </div>
    </div>
  );
}

export default AboutMe;
