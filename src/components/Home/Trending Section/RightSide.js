import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "./RightSide.css";

// import required modules
import { EffectCreative } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6 rounded-lg "
      >
        <SwiperSlide className=" flex justify-center w-full">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/scViCnEnG_M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center w-full">
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/y96X-Plwajk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center w-full">
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/7XjlyGD-wOw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center w-full">
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YU4UlViBlqo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
