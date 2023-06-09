import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BannerSlider from "./BannerSlider";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Map from "./ContactMap/Map";
import OfferCovid19 from "./Covid-19/OfferCovid19";
import Properties from "./Properties/Properties";
import Destinations from "./Packages Destinations/Destinations";
import WhatsApp from "./What's App/WhatsApp";
import Trending from "./Trending Section/Trending";

const Home = () => {
  const travels = useLoaderData([]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hf1z59o",
        "template_v36rkio",
        form.current,
        "GU_biZQ10b2xXV_Da"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Your Comment is successfully, Thank you.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative">
      {/* ================== photography screenshot image is here =============  */}
      <div>
        <img
          className="w-full max-w-[2000px]"
          src="https://i.ibb.co/0sTF2L7/Photography.jpg"
          alt=""
        />
        <img
          className="w-full max-w-[2000px]"
          src="https://i.ibb.co/PGst1wS/06-Blog-Inside.jpg"
          alt=""
        />
      </div>

      {/* ====================== section two  */}
      <div className="w-full max-w-[1400px] mx-auto">
        <div>
          <OfferCovid19 />
        </div>
        {/* ================== card section =============  */}
        <div className="xl:mt-14 lg:-10 md:mt-6 mt-4">
          <div className="space-y-1 md:px- px-">
            <h2 className=" font-serif font-semibold xl:text-2xl lg:text-xl md:text-lg text-lg">
              Explore Bangladesh
            </h2>
            <p className="font-serif">
              These popular destinations have a lot to offer
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:gap-x-10 lg:gap-x-8 md:gap-x-4 gap-x-2  text-center max-w-[1400px]  mx-auto mt-3 ">
            {travels.map((travel) => (
              <BannerSlider key={travel._id} travel={travel}></BannerSlider>
            ))}
          </div>
          <div className="text-center lg:my-8 md:my-6 sm:my-4 my-2 w-full">
            <Link to="/myPhoto">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 w-36 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
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
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
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
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  See All
                </span>
              </a>
            </Link>
          </div>
        </div>
        <Trending />
        <Properties />
        <Destinations />
        {/* ====================== message section ==========  */}
        <div className=" xl:px-0 md:px-4 px-2 md:mt-6 mt-4 ">
          <h2 className="text-left text-green-500 xl:text-3xl lg:text-1xl md:text-xl text-lg font-serif font-semibold">
            Leave a Comment
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex items-start lg:gap-x-4 md:gap-x-3 gap-x-2 w-full md:mt-4 mt-2">
              <div className="flex flex-col items-center font-serif space-y-3 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  className=" lg:py-4 sm:py-2 py-1 px-4 border border-green-700 w-full required:"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="lg:py-4 sm:py-2 py-1 px-4 border border-green-700 w-full required:"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="message"
                  placeholder="Your Comment"
                  className="lg:py-12 md:py-8 sm:py-6 py-6 px-4 text-justify font-serif border border-green-700 w-full required:"
                ></input>
              </div>
            </div>
            {/* ========== button section  */}
            <button className="my-4 md:text-right text-center w-full">
              <a
                href="#_"
                class="relative inline-flex items-center justify-end xl:px-12 lg:px-10  px-6 py-3 overflow-hidden font-medium transition-all bg-green-600  hover:text-black rounded-xl group"
              >
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-500 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full  text-left text-white transition-colors duration-500 ease-in-out group-hover:text-black ">
                  Send Message
                </span>
              </a>
            </button>
          </form>
        </div>
        {/*=========== contact section  */}
        <div>
          <Map />
        </div>
      </div>
      <WhatsApp />
    </div>
  );
};

export default Home;
