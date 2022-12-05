import Image from "next/image";
import React from "react";
import beach from "./img/beach-work.jpg";

type appPropType = {
  stateName: String;
  amount: number;
  propNo: number;
  img: any;
};
function Cards({ stateName, amount, propNo, img }: appPropType) {
  return (
    <div className=" flex flex-row bg-slate-50  rounded-md shadow-xl  mx-6 mt-3  hover:translate-y-1 transition transform hover:cursor-pointer">
      <Image
        alt="beach"
        src={img}
        className="object-cover object-center w-32 h-32  rounded-l-md flex-shrink-0"
      />
      <div className="flex flex-col content-center justify-start p-6">
        <h2 className="font-bold font-gray-100">{stateName}</h2>
        <p className="font-medium text-sm text-gray-600">
          ${amount}/night average
        </p>
        <p className="text-brand-dark text-sm font-semibold mt-4 hover:text-brand">
          Explore {propNo} properties
        </p>
      </div>
    </div>
  );
}

export default Cards;
