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
          {/* Blur Layer */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

          {/* Text Content */}
          <div className="relative text-center text-white z-10 md:w-11/12">
            <h1 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-lg md:mx-0 mx-2.5">
              Find the Perfect Place to Grow Your Family
            </h1>
            <p className=" md:text-2xl opacity-90 mt-8 md:px-0 px-8">
              Chic downtown loft with high ceilings, exposed brick, and
              state-of-the-art appliances.
            </p>

            <button className="btn btn-accent mt-5 text-secondary hover:text-base-100">
              Know More
            </button>
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
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

          {/* Text Content */}
          <div className="relative text-center text-white z-10 md:w-11/12">
            <h1 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-lg md:mx-0 mx-2.5">
              Find the Perfect Place to Grow Your Family
            </h1>
            <p className=" md:text-2xl opacity-90 mt-8 md:px-0 px-8">
              Discover quiet, tree-lined streets and large yards in our secure,
              family-friendly neighborhoods. Room to live, room to thrive.
            </p>

            <button className="btn btn-accent mt-5 text-secondary hover:text-base-100">
              Know More
            </button>
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
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

          {/* Text Content */}
          <div className="relative text-center text-white z-10 md:w-11/12">
            <h1 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-lg md:mx-0 mx-2.5">
              Secure Your Future with High-Return Property
            </h1>
            <p className=" md:text-2xl opacity-90 mt-8 md:px-0 px-8">
              Invest in rapidly developing areas with high foot traffic and
              excellent visibility. Ideal spaces for business expansion and
              growth.
            </p>

            <button className="btn btn-accent mt-5 text-secondary hover:text-base-100">
              Know More
            </button>
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
