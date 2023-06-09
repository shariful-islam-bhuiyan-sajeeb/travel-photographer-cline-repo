import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
    return (
      <div className="lg:mt-6 md:mt-4 mt-2 xl:px-0 px-4">
        <Slider {...settings}>
          <div>
            <div className="flex flex-col  space-y-1">
              <img
                className="lg:w-64 w-full rounded-lg "
                src="https://cf.bstatic.com/xdata/images/hotel/square600/280947638.webp?k=9e8f72c1ff91b261cdda3dbe4e1a70bef455dd72c00119ff379c671a65ad565d&o="
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-md sm:text-sm font-serif font-semibold ">
                  La Roulotte de Ciney
                </h2>
                <p className="text-sm">Poland, Zakopane</p>
              </div>
              <div className=" flex items-center md:gap-x-2 gap-x-1">
                <h2 className="bg-green-600 px-1 py-1 rounded-t-lg rounded-r-lg text-sm font-medium">
                  8.4
                </h2>
                <p className="text-sm">very good . 91 views</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  space-y-1">
              <img
                className="lg:w-64 w-full rounded-lg "
                src="https://cf.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o="
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-md sm:text-sm font-serif font-semibold ">
                  Wierszyki Shelters
                </h2>
                <p className="text-sm">Belgium, Ciney</p>
              </div>
              <div className=" flex items-center md:gap-x-2 gap-x-1">
                <h2 className="bg-green-600 px-1 py-1 rounded-t-lg rounded-r-lg text-sm font-medium">
                  9.7
                </h2>
                <p className="text-sm">Exceptional . 84 views</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  space-y-1">
              <img
                className="lg:w-64 w-full rounded-lg "
                src="https://cf.bstatic.com/xdata/images/hotel/square600/131500906.webp?k=b6f638eadb7c9632498a9e9a15440987a22489684b8825b0cb235bd3c79f07de&o="
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-md sm:text-sm font-serif font-semibold ">
                  Ranczo w Dolinie
                </h2>
                <p className="text-sm">Poland, Zakopane</p>
              </div>
              <div className=" flex items-center md:gap-x-2 gap-x-1">
                <h2 className="bg-green-600 px-1 py-1 rounded-t-lg rounded-r-lg text-sm font-medium">
                  9.5
                </h2>
                <p className="text-sm">Exceptional. 341 views</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  space-y-1">
              <img
                className="lg:w-64 w-full rounded-lg "
                src="https://cf.bstatic.com/xdata/images/hotel/square600/187853972.webp?k=dd753431cf4b638642614dc060512d832d24f3249eef30b9a5f18601d2ac5635&o="
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-md sm:text-sm font-serif font-semibold ">
                  Tiny House Dreischwesternherz
                </h2>
                <p className="text-sm">Poland, Zakopane</p>
              </div>
              <div className=" flex items-center md:gap-x-2 gap-x-1">
                <h2 className="bg-green-600 px-1 py-1 rounded-t-lg rounded-r-lg text-sm font-medium">
                  9.7
                </h2>
                <p className="text-sm">Exceptional . 143 views</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  space-y-1">
              <img
                className="lg:w-64 w-full rounded-lg "
                src="https://cf.bstatic.com/xdata/images/hotel/square600/178421496.webp?k=94836d8c61053e484c5ef0110211d6eacf89d8e58f8dfa3e58d14833287cc3a1&o="
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-md sm:text-sm font-serif font-semibold ">
                  Das rote Haus hinterm Deich
                </h2>
                <p className="text-sm">Germany, Simonsberg</p>
              </div>
              <div className=" flex items-center md:gap-x-2 gap-x-1">
                <h2 className="bg-green-600 px-1 py-1 rounded-t-lg rounded-r-lg text-sm font-medium">
                  9.3
                </h2>
                <p className="text-sm">Superb . 51 views</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  space-y-1">
              <img
                className="lg:w-64 w-full rounded-lg "
                src="https://cf.bstatic.com/xdata/images/hotel/square600/178421496.webp?k=94836d8c61053e484c5ef0110211d6eacf89d8e58f8dfa3e58d14833287cc3a1&o="
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-md sm:text-sm font-serif font-semibold ">
                  Das rote Haus hinterm Deich
                </h2>
                <p className="text-sm">Germany, Simonsberg</p>
              </div>
              <div className=" flex items-center md:gap-x-2 gap-x-1">
                <h2 className="bg-green-600 px-1 py-1 rounded-t-lg rounded-r-lg text-sm font-medium">
                  9.1
                </h2>
                <p className="text-sm">Superb . 51 views</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  space-y-1">
              <img
                className="lg:w-64 w-full rounded-lg "
                src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o="
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-md sm:text-sm font-serif font-semibold ">
                  Das rote Haus hinterm Deich
                </h2>
                <p className="text-sm">Das rote Haus hinterm Deich</p>
              </div>
              <div className=" flex items-center md:gap-x-2 gap-x-1">
                <h2 className="bg-green-600 px-1 py-1 rounded-t-lg rounded-r-lg text-sm font-medium">
                  9.7
                </h2>
                <p className="text-sm">Superb . 51 views</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  space-y-1">
              <img
                className="lg:w-64 w-full rounded-lg "
                src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o="
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-md sm:text-sm font-serif font-semibold ">
                  Agriturismo Cabrele
                </h2>
                <p className="text-sm">Italy, Santorso</p>
              </div>
              <div className=" flex items-center md:gap-x-2 gap-x-1">
                <h2 className="bg-green-600 px-1 py-1 rounded-t-lg rounded-r-lg text-sm font-medium">
                  9.8
                </h2>
                <p className="text-sm">Superb . 218 views</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
