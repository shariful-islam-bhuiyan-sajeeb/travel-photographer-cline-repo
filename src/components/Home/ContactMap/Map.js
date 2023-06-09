import React from "react";
import { LuSmartphone } from "react-icons/lu";
import { HiEnvelope, HiMap, IconName } from "react-icons/hi2";

const Map = () => {
  return (
    <div className="mt-4">
      <div>
        <h2 className="text-green-600 lg:my-6 md:my-4 my-2 xl:text-4xl  md:text-2xl text-xl text-center font-serif font-semibold">
          Contact us
        </h2>
        <div className="flex sm:flex-row flex-col items-center justify-evenly xl:mt-8 lg:mt-6 sm:mt-4 mt-2 ">
          <div className="flex flex-col items-center lg:space-y-3 sm:space-y-2 space-y-1">
            <div className="lg:p-8 md:p-6 sm:p-4 p-2 rounded-full text-green-700 border border-green-700 lg:text-3xl md:text-xl sm:text-lg text-md">
              <LuSmartphone />
            </div>
            <h1 className="lg:text-xl md:text-lg sm:text-md text-xs font-medium">
              +8801954688093
            </h1>
          </div>
          <div className="flex flex-col items-center lg:space-y-3 sm:space-y-2 space-y-1 xl:ml-4 md:ml-2 ml-0 sm:mt-0 mt-4">
            <div className="lg:p-8 md:p-6 sm:p-4 p-2 rounded-full text-green-700 border border-green-700 lg:text-3xl md:text-xl sm:text-lg text-md">
              <HiEnvelope />
            </div>
            <h1 className="lg:text-xl md:text-lg sm:text-md text-xs font-medium">
              sharifulislambhuiyan93@gmail.com
            </h1>
          </div>
          <div className="flex flex-col items-center lg:space-y-3 sm:space-y-2 space-y-1 sm:mt-0 mt-4">
            <div className="lg:p-8 md:p-6 sm:p-4 p-2 rounded-full text-green-700 border border-green-700 lg:text-3xl md:text-xl sm:text-lg text-md">
              <HiMap />
            </div>
            <h1 className="lg:text-xl md:text-lg sm:text-md text-xs font-medium">
              Farmgate,Dhaka,Bangladesh
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:mt-6 mt-4 ">
        <iframe
          className="text-center lg:px-2 px-4 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10328.770879389136!2d90.38257535277609!3d23.75550985050616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a426199b0d%3A0x6a2c655d06c88ec9!2sFarmgate%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1684556724717!5m2!1sen!2sbd"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
