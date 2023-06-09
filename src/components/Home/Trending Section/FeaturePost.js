import React, { useEffect, useState } from "react";

const FeaturePost = () => {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("DestinationsCard/Feature.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);
  return (
    <div className="mt-4">
      <div>
        <h2 className="xl:text-2xl lg:text-xl text-lg font-serif font-semibold ">
          Feature Post
        </h2>
        <div>
          {feature?.map((features) => (
            <div key={features?.id}>
              <div className="flex items-center gap-x-2 mt-6 ">
                <img
                  className="lg:w-24 md:w-14 w-28 h-[80px]"
                  src={features?.img}
                  alt=""
                />
                <div className="flex flex-col ">
                  <h2 className="lg:text-md sm:text-xs text-sm font-bold font-serif">
                    {features?.title}
                  </h2>
                  <p className="font-semibold">{features?.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
