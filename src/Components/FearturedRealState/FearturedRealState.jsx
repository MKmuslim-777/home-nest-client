import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router";

const FearturedRealState = () => {
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://home-nest-server-ivory.vercel.app/properties")
      .then((data) => {
        // সাধারণত ফিচারেড সেকশনে ৩-৪টি ডাটা দেখানো হয়
        setProperty(data.data.slice(0, 4));
      })
      .catch((error) => {
        toast.error("Failed to fetch properties.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">
            Best Choice
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">
            Featured Real Estate
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
          <p className="max-w-xl mx-auto mt-6 text-gray-500">
            Handpicked properties that offer the best value, location, and
            luxury. Find your next dream home here.
          </p>
        </div>

        {/* Improved Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 ">
          {property.map((card) => (
            <div
              key={card._id}
              className="transform transition-all duration-500 hover:-translate-y-3"
            >
              <FeaturedCard card={card} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to={"/AllProperties"}
            className="btn btn-secondary btn-outline rounded-full px-10 hover:shadow-lg hover:text-white hover:shadow-secondary/20 transition-all"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FearturedRealState;
