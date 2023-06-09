import React, { useEffect, useState } from "react";
import { HiArchiveBox } from "react-icons/hi2";

const DestinationsCard = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("DestinationsCard/DestinationCard.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="lg:mt-6 mt-4">
      <div className="relative ">
        <div className="overflow-hidden">
          <img
            className="w-full h-96 rounded-lg ease-in-out duration-700 transform hover:scale-105"
            src="https://cdn-tbbd-flight.sharetrip.net/city/medium/hiHQNfNQvP7B9L4MB5gbPnWDPKBLgTxS.png"
            alt=""
          />
        </div>
        <div className="absolute md:bottom-8 bottom-6 lg:left-7 left-5 lg:space-y-2 space-y-1 text-white">
          <div className="flex items-center gap-x-2 font-semibold ">
            <HiArchiveBox />
            <h2>27 packages</h2>
          </div>
          <h2 className="xl:text-3xl lg:text-xl md:text-lg text-md font-bold font-serif">
            Maldives
          </h2>
          <p className="font-bold">BDT 27,500</p>
        </div>
      </div>
      <div className="  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2    gap-x-2  w-full mx-auto">
        {cards?.map((card) => (
          <div className="flex items-center" key={card.id}>
            <div className="flex  justify-center w-full mx-auto lg:mt-6 mt-4 overflow-hidden ">
              <div className="flex flex-col">
                <img
                  className="lg:w-80 md:w-72 sm:w-60 w-full rounded-lg ease-in-out duration-700 transform hover:scale-105"
                  src={card?.img}
                  alt=""
                />
                <div className="lg:mt-3 sm:mt-2 mt-1 lg:px-2 px-1 ">
                  <div className="flex items-center gap-x-2 ">
                    <HiArchiveBox />
                    <h2 className="text-sm font-mono"> {card?.package}</h2>
                  </div>
                  <h1 className="lg:text-xl md:text-lg text-md font-serif font-semibold">
                    {card?.title}
                  </h1>
                  <div className="flex items-center gap-x-1 text-blue-600">
                    <h2 className="sm:text-sm text-xs">Start from</h2>
                    <h2 className="md:text-lg sm:text-md text-sm font-semibold ">
                      {card?.price}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsCard;
