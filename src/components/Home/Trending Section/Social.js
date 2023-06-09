import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Social = () => {
  return (
    <div>
      <div>
        <h2 className=" mt-4 xl:text-2xl lg:text-xl md:text-lg text-md font-serif font-bold uppercase">
          Social
        </h2>
        <div className="flex items-center md:mt-4 mt-3 lg:gap-x-6 gap-x-6 ">
          <FaFacebookF className="shadow" />
          <BsGoogle className="shadow" />
          <FaLinkedinIn className="shadow" />
          <BsTwitter className="shadow" />
        </div>
      </div>
    </div>
  );
};

export default Social;
