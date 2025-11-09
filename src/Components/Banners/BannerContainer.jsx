import React from "react";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";

const BannerContainer = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="relative carousel-item md:min-h-[70vh] min-h-[70vh] w-full flex items-center justify-end bg-cover bg-center"
          style={{
            backgroundImage: `url(https://i.ibb.co.com/cS981kkz/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg)`,
          }}
        >
          <BannerOne></BannerOne>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="relative carousel-item md:min-h-[70vh] min-h-[70vh] w-full flex items-center justify-end bg-cover bg-center"
          style={{
            backgroundImage: `url(https://i.ibb.co.com/F4Q0FmCq/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg)`,
          }}
        >
          <BannerTwo></BannerTwo>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="relative carousel-item md:min-h-[70vh] min-h-[70vh] w-full flex items-center justify-end bg-cover bg-center"
          style={{
            backgroundImage: `url(https://i.ibb.co.com/T3r2250/avi-werde-h-Hz4yrvxwl-A-unsplash.jpg)`,
          }}
        >
          <BannerThree></BannerThree>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;
