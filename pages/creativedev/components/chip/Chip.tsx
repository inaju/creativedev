import React, { useState } from "react";

type chipProp = {
  text: String;
  activeState: boolean;
};
function Chip({ text, activeState }: chipProp) {
  return (
    <>
      <div className="shadow-lg flex rounded-full uppercase ">
        <div
          className={`${
            !activeState
              ? "bg-brand-gray backdrop-blur-md hover:bg-brand-gray-light"
              : "bg-brand-text hover:bg-brand-text-light"
          } flex items-center justify-center mx-auto py-2 px-4 xsm:px-6  font-bold text-xs lg:text-lg shadow-2xl rounded-full text-white hover:cursor-pointer `}
        >
          {text}{" "}
        </div>
      </div>
    </>
  );
}

export default Chip;
