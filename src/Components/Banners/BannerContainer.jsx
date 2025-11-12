import { FaLocationDot } from "react-icons/fa6";

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
          <div className="bg-base-100 mr-40 w-[580px] opacity-90 h-[400px] p-12 rounded-lg md:block hidden">
            <div className="">
              <div>
                <div className="flex  justify-between items-center relative">
                  <div className="flex items-center -mb-5.5 text-secondary underline font-semibold opacity-70">
                    <FaLocationDot />
                    <p className="text-[18px] ">Dhaka, Diplomatic Zone</p>
                  </div>
                  <img
                    src="https://i.ibb.co.com/m50xkytX/969540867.png"
                    className="w-[110px] absolute -top-5 -right-5 "
                    alt=""
                  />
                </div>
                <h1 className="md:text-4xl text-2xl text-secondary font-bold mt-12">
                  Contemporary <br /> Poolside Villa
                </h1>
                <p className="text-secondary font-semibold mt-8">
                  An exclusive, contemporary villa designed for sophisticated
                  indoor-outdoor living. Features floor-to-ceiling glass walls,
                  a built-in BBQ, and a sparkling private pool.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <p className="md:text-3xl text-2xl font-bold text-secondary ">
                  $15K
                </p>
                <button className="myBtn ">Know More</button>
              </div>
            </div>
          </div>
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
          <div className="bg-base-100 mr-40 w-[580px] opacity-90 h-[400px] p-12 rounded-lg md:block hidden ">
            <div className="">
              <div>
                <div className="flex  justify-between items-center relative">
                  <div className="flex items-center -mb-5.5 text-secondary underline font-semibold opacity-70">
                    <FaLocationDot />
                    <p className="text-[18px] ">Cox's Bazar, Saintmartin</p>
                  </div>
                  <img
                    src="https://i.ibb.co.com/m50xkytX/969540867.png"
                    className="w-[110px] absolute -top-5 -right-5 "
                    alt=""
                  />
                </div>
                <h1 className="text-4xl text-secondary font-bold mt-12">
                  Modern Loft <br /> Apartment
                </h1>
                <p className="text-secondary font-semibold mt-8">
                  Chic downtown loft with high ceilings, exposed brick, and
                  state-of-the-art appliances.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <p className="text-3xl font-bold text-secondary ">$23K</p>
                <button className="myBtn">Know More</button>
              </div>
            </div>
          </div>
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
          <div className="bg-base-100 mr-40 w-[580px] opacity-90 h-[400px] p-12 rounded-lg md:block hidden">
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
                  A brand new 3-story townhouse offering executive luxury in a
                  secure gated community. Features a spacious layout, modern
                  finishes, and an attached garage for ultimate convenience.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <p className="text-3xl font-bold text-secondary ">$28K</p>
                <button className="myBtn">Know More</button>
              </div>
            </div>
          </div>
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
