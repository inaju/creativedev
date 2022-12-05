import Image from "next/image";
import React from "react";
import arrowdown from "../assets/arrowdown.svg";
function ArrowDown() {
  return (
    <div className="hidden md:block bg-brand-gray  bottom-0 self-center hover:cursor-pointer hover:bg-brand-gray-light">
      <a href="#aboutme" className=" scroll-smooth">
        <Image
          src={arrowdown}
          className="mx-6 w-6 my-4 pr-0.5"
          alt="arrow down"
        />
      </a>
    </div>
  );
}

export default ArrowDown;
