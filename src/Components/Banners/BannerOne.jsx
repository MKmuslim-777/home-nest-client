import { FaLocationDot } from "react-icons/fa6";

const BannerOne = () => {
  return (
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
            indoor-outdoor living. Features floor-to-ceiling glass walls, a
            built-in BBQ, and a sparkling private pool.
          </p>
        </div>
        <div className="flex items-center justify-between mt-8">
          <p className="md:text-3xl text-2xl font-bold text-secondary ">$15K</p>
          <button className="myBtn ">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
