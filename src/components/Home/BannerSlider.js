import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const BannerSlider = ({ travel }) => {
  const { category, img, name, _id, description, ratings } = travel;

  return (
    <div>
      <div className=" w-full mx-auto md:mt-0  mt-4 xl:px-0 sm:px-4 px-2">
        <div className="rounded-md  bg-slate-700 ">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt=""
                className=" w-full mx-auto rounded-md h-72"
              />
            </PhotoView>
          </PhotoProvider>

          <div className=" flex flex-col items-start lg:px-4 md:px-2 px-1 xl:mt-6 md:mt-4 mt-2 mb-2 space-y-2 font-serif text-white">
            <p className=" xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm font-medium">
              Name: {name.slice(0, 10)}
            </p>
            <h2 className="xl:text-lg lg:text-md text-sm font-medium">
              Category:{" "}
              {category?.length > 50
                ? category?.slice(0, 50) + "..."
                : category.slice(0, 30)}
            </h2>
            <p className="dark:text-gray-100 mb-5">
              {description.slice(0, 50)}
            </p>
          </div>

          <div className="flex items-center justify-around lg:pb-6  pb-4 lg:text-lg text-md font-serif ">
            <div className="">
              <p className=" bg-red-200 px-2 py-1 rounded-xl animate-pulse text-black">
                Rating: {ratings}
              </p>
            </div>
            <div className=" hover:text-green-600 ">
              <Link to={`/detailsCard/${_id}`}>
                {" "}
                <h2 className="bg-red-200 px-2 hover:bg-green-500 transition-all duration-500 text-black rounded-xl">
                  {" "}
                  Click{" "}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
