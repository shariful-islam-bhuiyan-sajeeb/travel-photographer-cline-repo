import React from "react";
import { HiOutlineInformationCircle, IconName } from "react-icons/hi2";
const OfferCovid19 = () => {
  return (
    <div>
      <div>
        {/* ============== covid - 19 support  */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow rounded-lg border border-base-300 shadow  "
        >
          <div className=" flex items-center lg:gap-x-2 gap-x-1 p-0 collapse-title lg:text-lg md:text-md text-sm font-serif font-medium">
            <HiOutlineInformationCircle className="text-3xl text-red-700" />
            <p className="">Coronavirus (COVID-19) Support</p>
          </div>
          <div className="collapse-content sm:space-y-2 space-y-1">
            <p className="md:text-md sm:text-sm text-xs ">
              Get the advice you need. Check the latest COVID-19 restrictions
              before you travel.
            </p>
            <a href="" className=" text-blue-600 sm:text-sm text-xs">
              {" "}
              Learn More
            </a>
          </div>
        </div>
        {/* ==================card section  */}
        <div>
          <div className="flex flex-col space-y-1 lg:mt-6 mt-4">
            <h1 className="lg:text-xl sm:text-md text-sm font-semibold font-serif ">
              Offers
            </h1>
            <p className="text-md font-serif">
              Promotions, deals and special offers for you
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between xl:px-0 lg:px-4 px-2 lg:mt-8 md:mt-6 mt-4 lg:gap-x-6 md:gap-x-4 ">
            <div className=" flex items-center justify-between shadow-lg">
              <div className=" lg:pl-6 md:pl-4 pl-2 md:space-y-2 space-y-1 font-serif">
                <h2 className="font-semibold text-black lg:text-lg md:text-md text-sm">
                  Take your longest holiday yet
                </h2>
                <p className="md:text-md sm:text-sm text-xs w-4/5 ">
                  Browse properties offering long-term stays, many at reduced
                  monthly rates.
                </p>
                <button className=" lg:px-5 md:px-4 px-2 md:py-2 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-500">
                  Find a Stay
                </button>
              </div>
              <img
                className="sm:w-48 w-40 h-full rounded-r "
                src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
                alt=""
              />
            </div>
            <div className="relative md:mt-0 sm:mt-6  mt-2">
              <img
                className="rounded-lg xl:w-[700px] lg:w-[600px] md:w-[500px] w-full  lg:h-[195px] md:h-[190px] h-full "
                src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/204490944.jpeg?k=f1dbbec42645c0ed1dc25f1e0878ab449b461baf936dcd971ad8c63bf13d0dc6&o="
                alt=""
              />
              <div className=" absolute xl:top-2 lg:top-4 md:top-6  top-2 left-4 text-white xl:w-1/2 lg:w-9/12  text-left">
                <h2 className="font-serif font-semibold xl:text-xl md:text-lg sm:text-md text-sm">
                  The great getaway, your way
                </h2>
                <p className="text-md hidden sm:flex p-0">
                  Save at least 15% on stays worldwide, from relaxing retreats
                  to off-grid adventures
                </p>
                <button className=" lg:px-5 md:px-4 px-2 md:py-2 py-1  mt-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-500">
                  Find Getaway Deals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCovid19;
