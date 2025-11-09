import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const BannerThree = () => {
  return (
    <div className="bg-base-100 mr-40 w-[580px] opacity-90 h-[400px] p-12 rounded-lg ">
      <div className="">
        <div>
          <div className="flex  justify-between items-center relative">
            <div className="flex items-center -mb-5.5 text-secondary underline font-semibold opacity-70">
              <FaLocationDot />
              <p className="text-[18px] ">Cox's Bazar, Ocean Paradise</p>
            </div>
            <img
              src="https://i.ibb.co.com/m50xkytX/969540867.png"
              className="w-[110px] absolute -top-5 -right-5 "
              alt=""
            />
          </div>
          <h1 className="text-4xl text-secondary font-bold mt-12">
            Executive Townhouse
          </h1>
          <p className="text-secondary font-semibold mt-8">
            A brand new 3-story townhouse offering executive luxury in a secure
            gated community. Features a spacious layout, modern finishes, and an
            attached garage for ultimate convenience.
          </p>
        </div>
        <div className="flex items-center justify-between mt-8">
          <p className="text-3xl font-bold text-secondary ">$28K</p>
          <button className="myBtn">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default BannerThree;
