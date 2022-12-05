import Image from "next/image";
import React from "react";
import portfolio from "../assets/portfolio_1.png";
type displayCardProps = {
  image: any;
};
function DisplayCard({ image }: displayCardProps) {
  return (
    // w-[18rem]
    <div className="active:border bg-brand-gray backdrop-blur-xl flex rounded-md w-full max-w-xs h-[10rem] m-2 lg:w-1/3 lg:h-[14rem] lg:m-2">
      <div className="flex ">
        <Image src={image} className="mx-auto p-4 w-screen h-full" alt="portfolio" />
      </div>
    </div>
  );
}

export default DisplayCard;
