import React from "react";
import DestinationsCard from "./DestinationsCard";

const Destinations = () => {
  return (
    <div className="xl:my-8 lg:my-6 my-4 2xl:px-0 md:px-4 px-2">
      <div>
        <h2 className="xl:text-3xl lg:text-xl md:text-lg text:md font-serif font-semibold text-black">
          Packages in Popular Destinations
        </h2>
      </div>
      <div>
        <DestinationsCard />
      </div>
    </div>
  );
};

export default Destinations;
