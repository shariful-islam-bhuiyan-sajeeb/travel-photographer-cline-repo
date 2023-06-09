import React from "react";
import { useLoaderData } from "react-router-dom";
import MyPhotoCart from "./MyPhotoCart";

const MyPhoto = () => {
  const allPhotos = useLoaderData();
  // const {img,name,category,description}=allPhotos;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-10 lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-2 max-w-[1400px] w-full mx-auto">
      {allPhotos.map((allPhoto) => (
        <MyPhotoCart key={allPhoto._id} allPhoto={allPhoto}></MyPhotoCart>
      ))}
    </div>
  );
};

export default MyPhoto;
