import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="xl:h-[850px] lg:h-[700px] md:h-[550px] h-[650px] h w-full border bg-white">
      <div className="flex  flex-col items-center justify-center  h-full   lg:space-y-4 space-y-3 px-2    ">
        <div>
          <img
            className="w-52"
            src="https://i.ibb.co/3cCHD0Y/98642-error-404.gif"
            alt=""
          />
        </div>
        <div className=" flex flex-col items-center justify-center uppercase ">
          <h1 className="xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-md font-bold font-serif">
            We are sorry, page not found
          </h1>
          <p className="mt-4 lg:text-lg sm:text-md text-sm font-semibold font-serif ">
            The page you are looking for might have been removed, had its name
            changed or its temporarily unavailable
          </p>
          <Link to="/">
            <a
              href="#_"
              class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all border bg-white rounded hover:bg-white group"
            >
              <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Back to homepage
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
