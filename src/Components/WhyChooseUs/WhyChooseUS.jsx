import React from "react";

const WhyChooseUS = () => {
  return (
    <div className="py-16 ">
      {" "}
      {/* Added a light background for contrast */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:border-r-2 border-gray-300 px-3.5 py-14">
            <img
              className="text-secondary"
              src="https://img.icons8.com/dotty/80/property.png"
              alt=""
            />
            <p className="text-xl font-bold text-secondary">
              PROPERTY MANAGEMENT
            </p>
            <p className="text-secondary text-center">
              10 new offers every day. 350 offers on site, trusted by a
              community of thousands of users.
            </p>
          </div>

          <div className="flex flex-col items-center md:border-r-2 border-gray-300 px-3.5 py-14">
            <img
              className="text-secondary w-[80px]"
              src="https://img.icons8.com/ios/50/key-exchange.png"
              alt=""
            />
            <p className="text-xl font-bold text-secondary">
              Mortgage Services
            </p>
            <p className="text-secondary text-center">
              With a robust selection of popular properties on hand, as well as
              leading properties from real estate experts.
            </p>
          </div>

          <div className="flex flex-col items-center  px-3.5 py-14">
            <img
              className="text-secondary w-[80px]"
              src="https://img.icons8.com/carbon-copy/100/trust.png"
              alt=""
            />
            <p className="text-xl font-bold text-secondary">
              TRUSTED BY THOUSANDS
            </p>
            <p className="text-secondary text-center">
              10 new offers every day. 350 offers on site, trusted by a
              community of thousands of users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
