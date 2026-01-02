import React from "react";

const TrustedByThousands = () => {
  const trustMetrics = [
    {
      title: "STAR RATING",
      value: "4.9/5",
      description: "Based on 3,500+ reviews from Google Reviews.",
      icon: "https://img.icons8.com/dotty/80/handshake.png",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "PROPERTIES SOLD",
      value: "250+",
      description: "Successfully matched clients with their perfect homes.",
      icon: "https://img.icons8.com/ios/50/home--v1.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "YEARS IN SERVICE",
      value: "5 Years",
      description: "Leading the market since 2019.",
      icon: "https://img.icons8.com/ios-filled/50/combo-chart--v1.png",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-primary/20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-4 tracking-tight">
            Trusted by <span className="text-secondary/90">Thousands</span>
          </h2>
          <p className="text-base-content/70 text-lg">
            Our track record speaks for itself. We've helped thousands of
            families find their dream property with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-base-100 p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-200 flex flex-col items-center hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <img
                  src={metric.icon}
                  alt={metric.title}
                  className="w-12 h-12 object-contain group-hover:rotate-5 transition-transform"
                />
              </div>

              {/* Value */}
              <h4 className="text-5xl font-black mb-2 text-secondary">
                {metric.value}
              </h4>

              {/* Title */}
              <p className="text-xs font-bold text-base-content/40 uppercase tracking-[0.2em] mb-4">
                {metric.title}
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-primary/20 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>

              {/* Description */}
              <p className="text-base-content/60 leading-relaxed text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByThousands;
