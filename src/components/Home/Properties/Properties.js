import React from "react";
import Slider from "./Slider";

const Properties = () => {
  return (
    <div className="xl:my-10 lg:my-7 my-0 px-4 hidden lg:block">
      <div className="flex flex-col items-start space-y-1">
        <h2 className="xl:text-3xl lg:text-xl md:text-lg text-md font-semibold font-serif">
          Stay at our top unique properties
        </h2>
        <p>From castles and villas to boats and igloos, we've got it all</p>
      </div>
      <Slider />
    </div>
  );
};

export default Properties;
