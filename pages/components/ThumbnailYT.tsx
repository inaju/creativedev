import React from "react";
import { FaEllipsisV } from "react-icons/fa";

type appProp = {
  thumbnail: String;
  timeStamp: String;
  videoTitle: String;
  author: String;
  authorPic: String;
  viewNo: Number;
};
type detailProp = {
  videoTitle: String;
  author: String;
  authorPic: String;
  viewNo: Number;
};
function ThumbnailYT({
  thumbnail,
  timeStamp,
  videoTitle,
  author,
  viewNo,
  authorPic,
}: appProp) {
  return (
    <div className="mb-5 w-full  sm:m-2 sm:w-[19rem] sm:shrink-1 sm:flex-grow  md:w-[22rem]  lg:flex-grow-0 lg:w-[20rem]  relative">
      <div className="relative">
        <img
          src={thumbnail}
          className="sm:rounded-xl w-full h-40  object-cover  md:h-[13rem] md:w-[33rem]  lg:h-[11rem] "
        />
        <div className="h-4 w-10  bg-gray-900 px-1 rounded-sm text-xs text-white font-bold absolute bottom-1 right-2">
          {timeStamp}
        </div>
      </div>

      <ThumbnailDetail
        videoTitle={videoTitle}
        viewNo={viewNo}
        author={author}
        authorPic={authorPic}
      />
    </div>
  );
}

export default ThumbnailYT;

const ThumbnailDetail = ({
  videoTitle,
  viewNo,
  author,
  authorPic,
}: detailProp) => (
  <div className="flex flex-row mt-2  ml-4 sm:ml-1 content-center  ">
    <img src={authorPic} className="rounded-full w-10 h-10 mr-4 sm:mr-2" />
    <div className="flex flex-col  ">
      <h1 className="text-gray-900 font-normal  text-base sm:font-semibold tracking-tight ">
        {videoTitle}
      </h1>

      <div className="mt-1 flex flex-row md:flex-col">
        <p className="text-xs font-light text-gray-600 mr-1">{author}</p>
        <p className="text-xs font-light text-gray-600 m-0">
          {viewNo}k views <b className="font-bold rounded">.</b> 1 day ago
        </p>
      </div>
    </div>
    <FaEllipsisV className="h-3 font-bold text-md mt-2   " />
  </div>
);
