import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router";

const CtaBanner = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between text-white text-center lg:text-left p-6 rounded-xl shadow-2xl bg-teal-600 backdrop-blur-sm">
          <div className="lg:max-w-xl mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Find Your Dream Home Today!
            </h2>
            <p className="mt-2 text-lg opacity-90">
              Our expert agents are ready to assist you. Contact us now for a
              personalized consultation.
            </p>
          </div>

          {/* CTA বাটন */}
          <div className="flex-shrink-0">
            <Link
              to={"/AllProperties"}
              className="flex items-center justify-center px-8 py-3 bg-white text-teal-700 font-bold text-lg rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-[1.05]"
            >
              Find Your Dream Home
              <HiOutlineArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
