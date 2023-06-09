import React from "react";
import TrendingCards from "./TrendingCards";
import RightSide2 from "./RightSide2";
import RightSide from "./RightSide";
import { HiArrowLongLeft, HiArrowLongRight, IconName } from "react-icons/hi2";
import FeaturePost from "./FeaturePost";
import Social from "./Social";

const Trending = () => {
  return (
    <div className=" flex md:flex-row flex-col items-start lg:gap-x-4 sm:gap-x-3 gap-x-2 my-8 lg:px-4 px-2">
      <div className="md:w-3/4 w-full mx-auto ">
        <div className="flex items-center justify-between ">
          <h1 className="font-semibold font-serif text-black xl:text-2xl lg:text-xl md:text-lg text-md ">
            Published Trending{" "}
          </h1>
          <button className="bg-black px-2 py-1 font-serif text-white">
            See More
          </button>
        </div>
        <div className="w-full h-[1px] sm:mt-2 mt-1  bg-slate-300"></div>
        <TrendingCards />
      </div>
      <div className="md:w-1/4 w-full mx-auto lg:mt-0 mt-4">
        <div className=" ">
          <div className="flex items-center lg:justify-between justify-around">
            <div className="flex items-center sm:gap-x-2 gap-x-1">
              <div className="w-[2px] h-[2px] font-bold p-1 bg-rose-300 rounded-full"></div>
              <div className="w-[2px] h-[2px] font-bold p-1 bg-rose-300 rounded-full"></div>
              <div className="w-[2px] h-[2px] font-bold p-1 bg-rose-200 rounded-full"></div>
              <div className="w-[2px] h-[2px] font-bold p-1 bg-rose-100 rounded-full"></div>
            </div>
            <div className="flex items-center  lg:gap-x-4 gap-x-2 xl:text-2xl sm:text-xl text-lg font-semibold text-gray-400">
              <HiArrowLongRight />
              <HiArrowLongLeft />
            </div>
          </div>
          <div className="lg:mt-4 mt-2">
            <RightSide />
          </div>
        </div>

        {/* second section  */}
        <div className=" lg:mt-6 mt-4 ">
          <div className="flex items-center lg:justify-between justify-around">
            <div className="flex items-center sm:gap-x-2 gap-x-1">
              <div className="w-[2px] h-[2px] font-bold p-1 bg-rose-300 rounded-full"></div>
              <div className="w-[2px] h-[2px] font-bold p-1 bg-rose-300 rounded-full"></div>
              <div className="w-[2px] h-[2px] font-bold p-1 bg-rose-200 rounded-full"></div>
              <div className="w-[2px] h-[2px] font-bold p-1 bg-rose-100 rounded-full"></div>
            </div>
            <div className="flex items-center  lg:gap-x-4 gap-x-2 xl:text-2xl sm:text-xl text-lg font-semibold text-gray-400">
              <HiArrowLongRight />
              <HiArrowLongLeft />
            </div>
          </div>
          <div className="lg:mt-4 mt-2">
            <RightSide2 />
            <FeaturePost />
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
