import Image from "next/image";
import React from "react";

type buttonType = {
  text: String;
  icon?: any;
};
function Button({ text, icon }: buttonType) {
  return (
    <div className="shadow-md flex rounded-full  ">
      <div
        className={`${
          icon
            ? "bg-brand-gray backdrop-blur-md hover:bg-brand-gray-light"
            : "bg-brand-text hover:bg-brand-text-light"
        } flex items-center justify-center mx-auto py-2 px-4 xsm:px-6  font-bold text-xs lg:text-lg shadow-2xl rounded-full text-white hover:cursor-pointer `}
      >
        {text}{" "}
        {icon && <Image className="w-4 h-5 ml-2 " alt="btn-icon" src={icon} />}
      </div>
    </div>
  );
}

export default Button;
