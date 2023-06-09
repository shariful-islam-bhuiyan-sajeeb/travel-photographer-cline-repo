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
          <div className="overflow-hidden">
            <PhotoProvider>
              <PhotoView src={img}>
                <img
                  src={img}
                  alt=""
                  className=" w-full mx-auto rounded-md h-72 ease-in-out duration-700 transform hover:scale-105"
                />
              </PhotoView>
            </PhotoProvider>
          </div>

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

          <div className="flex items-center justify-around lg:pb-4  pb-2 lg:text-lg text-sm font-serif ">
            <div className="rating gap-x-1 lg:text-md text-sm">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="  ">
              <Link to={`/detailsCard/${_id}`}>
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center lg:p-2 p-1 lg:px-3 px-2 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-400 rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-400 group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full text-green-400 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Click
                  </span>
                  <span class="relative invisible">Button Text</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
