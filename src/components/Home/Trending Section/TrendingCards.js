import React, { useEffect, useState } from "react";
import "./TrendingCards.css";
import { HiOutlineBookmark } from "react-icons/hi2";

const TrendingCards = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch("DestinationsCard/TrendingCards.json")
      .then((res) => res.json())
      .then((data) => setTrending(data));
  }, []);
  return (
    <div className="mt-8">
      <div className="relative">
        <img
          className="w-full lg:h-[500px] h-full brightness"
          src="https://i.ibb.co/FVw5tW3/istockphoto-956968150-612x612.jpg"
          alt=""
        />
        <div className="absolute lg:top-6 md:top-4 top-2  lg:left-6 md:left-4 sm:left-3 left-2 flex flex-col items-start md:space-y-2 space-y-1 font-serif md:w-1/2 w-11/12 mx-auto text-white">
          <button className="bg-rose-400 md:text-md sm:text-sm text-xs lg:px-4 sm:px-3 px-2 py-1 font-serif font-semibold text-white">
            Travel
          </button>
          <h2 className="lg:text-2xl md:text-md sm:text-sm text-xs font-semibold font-serif text-white ">
            What If How We Respond to the Crisis is Part of the Crisis?
          </h2>
          <p className="md:text-md  text-xs underline underline-offset-4">
            January 02,2023
          </p>
          <p className="md:text-sm text-xs hidden sm:block text-slate-300">
            Today i'm going to share of my top tips for booking with AirBnB, For
            those of you w ho may not your be failiar
          </p>
          <div className="flex items-center lg:pt-6 md:pt-4 pt-0 lg:gap-x-3 sm:gap-x-2 gap-x-1 text-white ">
            <img
              className="w-10"
              src="https://i.ibb.co/QM6t8pY/Ronal-Jones.png"
              alt=""
            />
            <h2>Afati Proprita</h2>
          </div>
        </div>
      </div>
      <div>
        {trending?.map((trend) => (
          <div key={trend?.id}>
            <div className=" flex items-start lg:mt-6 mt-4 rounded-r bg-rose-50">
              <img
                className="w-2/5   md:h-[232px] sm:h-[220px] h-[180px]"
                src={trend?.img}
                alt=""
              />
              <div className="lg:py-6 py-4 px-4 ">
                <div className="flex flex-col  sm:w-10/12 w-full mx-auto  ">
                  <button className="lg:text-sm text-xs font-serif font-semibold md:px-3 sm:px-2 px-1 py-1 w-24 bg-rose-300 text-black ">
                    {trend?.button}
                  </button>
                  <h2 className="xl:text-2xl lg:text-xl  md:text-md text-xs md:mt-2 mt-1 font-serif md:font-bold font-normal">
                    {trend?.title}
                  </h2>
                  <p className="sm:text-sm text-xs font-medium underline underline-offset-4 ">
                    {trend?.date}
                  </p>
                  <div className="flex items-center justify-between lg:pt-6 pt-4">
                    <div className="flex items-center lg:gap-x-4 md:gap-x-2 gap-x-1  ">
                      <img className="w-10" src={trend?.authorImg} alt="" />
                      <h2 className="md:text-md sm:text-sm text-xs font-semibold">
                        {trend?.authorName}
                      </h2>
                    </div>
                    <HiOutlineBookmark className="lg:text-xl md:text-lg text-md" />
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

export default TrendingCards;
