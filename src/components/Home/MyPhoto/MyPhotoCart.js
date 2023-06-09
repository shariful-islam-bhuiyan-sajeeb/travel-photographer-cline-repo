import React from "react";
import { Link } from "react-router-dom";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const MyPhotoCart = ({ allPhoto }) => {
  const { _id, img, name, category, description } = allPhoto;

  return (
    <div>
      <div className="  w-full mx-auto">
        <div className="   rounded-md shadow-md bg-slate-700 my-8 xl:h-[520px]  ">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt=""
                className="   rounded-md xl:h-72 h-full  "
              />
            </PhotoView>
          </PhotoProvider>

          <div className="px-2 lg:mt-4 md:mt-3 mt-2 xl:pb-8 lg:pb-6 md:pb-4 pb-2 ">
            <div className=" space-y-2  text-white ">
              <p className="text-md font-medium font-serif w-full ">
                Name: {name > 50 ? name.slice(0, 50) + "..." : name}
              </p>
              <h2 className="xl:text-md  lg:text-md text-sm font-semibold ">
                Category:{" "}
                {category > 50 ? category.slice(0, 50) + "..." : category}
              </h2>
              <h4 className="text-white font-serif text-md text-justify ">
                {description.slice(0, 100) + "..."}
              </h4>
            </div>

            <div className="xl:text-2xl lg:text-xl md:text-lg text-md mt-4 flex items-center gap-x-2">
              <a
                href="#_"
                class="relative inline-flex items-center xl:px-2 lg:px-4 px-1 lg:py-1 md:py-2 py-1 w-full mx-auto overflow-hidden text-lg font-medium text-white border-2 border-white rounded-lg hover:text-white group hover:bg-gray-50"
              >
                <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    class="w-5 h-5"
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
                <span class="relative">Backspace</span>
              </a>
              <Link className="w-full" to={`/detailsCard/${_id}`}>
                <a
                  href="#_"
                  class="relative inline-flex items-center xl:px-2 lg:px-4 px-1 lg:py-1 md:py-2 py-1 w-full mx-auto overflow-hidden text-lg font-medium text-white border-2 border-white rounded-lg hover:text-white group hover:bg-gray-50"
                >
                  <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      class="w-5 h-5"
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
                  <span class="relative">Review</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPhotoCart;
