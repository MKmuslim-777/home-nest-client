import React from "react";

const TrustedByThousands = () => {
  const trustMetrics = [
    {
      title: "STAR RATING",
      value: "4.9/5",
      description: "Based on 3,500+ reviews from Google Reviews.",
      icon: "https://img.icons8.com/dotty/80/handshake.png",
    },
    {
      title: "PROPERTIES SOLD",
      value: "250+",
      description: "Successfully matched clients with their perfect homes.",
      icon: "https://img.icons8.com/ios/50/home--v1.png",
    },
    {
      title: "YEARS IN SERVICE",
      value: "5 Years",
      description: "Leading the market since 2019.",
      icon: "https://img.icons8.com/ios-filled/50/combo-chart--v1.png", // Graph/Chart Icon
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Trusted by Thousands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-base-100 p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl border-t-4 border-accent flex flex-col justify-center items-center"
            >
              <img src={metric.icon} alt="" className="w-[80px] mb-3" />

              <p className="text-5xl font-extrabold text-secondary mb-2">
                {metric.value}
              </p>

              <h3 className="text-lg font-semibold text-secondary/80 uppercase tracking-wider mb-2">
                {metric.title}
              </h3>
              <p className="text-gray-500">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByThousands;
