import Image from "next/image";
import React, { useState } from "react";
import recentwork from "../assets/recentwork.svg";
import Chip from "../../components/chip/Chip";
import DisplayCard from "../displaycard/DisplayCard";
import portfolio_1 from "../assets/portfolio_1.png";
import portfolio_2 from "../assets/portfolio_2.png";
import portfolio_4 from "../assets/portfolio_4.png";
import portfolio_5 from "../assets/portfolio_5.jpg";
import portfolio_6 from "../assets/portfolio_6.jpg";
import { Animated } from "react-animated-css";

// className={`bg-[url(${recentwork})] h-screen w-full`}
function RecentWorks() {
  const [showItemState, setShowItemState] = useState("all");
  const [showState, setShowState] = useState({
    showAllState: true,
    showUiState: false,
    showDesignState: false,
  });

  const works = [
    { img: portfolio_1, type: "ui" },
    { img: portfolio_2, type: "ui" },
    { img: portfolio_4, type: "design" },
    { img: portfolio_5, type: "design" },
    { img: portfolio_6, type: "design" },
  ];

  const handleChipSelect = (i) => {
    setShowItemState(i);
    if (i === "all") {
      console.log("allllll", i);
      setShowState({
        showAllState: true,
        showUiState: false,
        showDesignState: false,
      });
    }
    if (i == "ui") {
      setShowState({
        showAllState: false,
        showUiState: true,
        showDesignState: false,
      });
    }
    if (i == "design") {
      setShowState({
        showAllState: false,
        showUiState: false,
        showDesignState: true,
      });
    }
    console.log(showState);
  };
  return (
    // <div>
    <div className="  w-full flex container bg-red-300 z-[1] flex-col mt-32  space-y-4   ">
      {/* <Image
        src={recentwork}
        className="h-screen w-full object-center object-cover border absolute"
      /> */}
      <div className="lg:mx-20 mx-6 ">
        <h1 className="text-white text-4xl font-bold lg:text-6xl ">
          My Recent <span className="text-brand-text">Works</span>
        </h1>
      </div>
      <div className="flex gap-2 flex-wrap mt-4 lg:mx-20 mx-6 ">
        <div onClick={() => handleChipSelect("all")}>
          <Chip text={"all"} activeState={showState.showAllState} />
        </div>
        <div onClick={() => handleChipSelect("ui")}>
          <Chip text={"ui"} activeState={showState.showUiState} />
        </div>
        <div onClick={() => handleChipSelect("design")}>
          <Chip text={"design"} activeState={showState.showDesignState} />
        </div>
      </div>
      {/* flex flex-col space-y-4 lg:flex-row lg:flex-wrap  w-full */}
     

      <div className="flex flex-wrap xsm:flex-col gap-4 items-stretch lg:mx-20 lg:flex-row lg:w-full  mx-6 ">
        {works.map((i) =>
          showItemState !== "all" ? (
            i.type === showItemState && <DisplayCard image={i.img} />
            ) : (
              <DisplayCard image={i.img} />
              )
              )}
      </div>
    </div>
  );
}

export default RecentWorks;
