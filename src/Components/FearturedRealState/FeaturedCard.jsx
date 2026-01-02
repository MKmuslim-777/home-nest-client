import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router";

const FeaturedCard = ({ card }) => {
  const { location, price, propertyImage, propertyName, _id } = card;

  return (
    <div className="group card bg-base-100 border border-base-200 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
      {/* Property Image & Badges */}
      <figure className="relative h-64 overflow-hidden">
        <img
          src={propertyImage}
          alt={propertyName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Featured Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-secondary/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
            Featured
          </span>
        </div>
        {/* Price Overlay on Image (Optional) */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md">
          <div className="flex flex-col">
            {/* Regular Price (Strikethrough) */}
            <span className="text-[10px] text-gray-500 line-through font-medium leading-none mb-0.5">
              $ {parseInt(price) + 500} {/* Static calculation for demo */}
            </span>
            <span className="text-lg font-black text-secondary leading-none">
              ${price}
            </span>
          </div>
        </div>
      </figure>

      <div className="card-body p-6">
        {/* Property Name */}
        <h3 className="text-xl font-bold text-base-content line-clamp-1 group-hover:text-secondary transition-colors duration-300">
          {propertyName}
        </h3>

        {/* Location */}
        <p className="flex items-center text-sm text-base-content/60 mb-4 mt-1">
          <HiLocationMarker className="w-4 h-4 mr-1 text-secondary shrink-0" />
          <span className="truncate">{location}</span>
        </p>

        {/* Property Features (Icons) */}
        <div className="flex items-center justify-between py-4 border-y border-dashed border-base-300 mb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
              <FaBed />
            </div>
            <span className="text-xs font-semibold text-base-content/70">
              {card.beds || 0} Beds
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
              <FaBath />
            </div>
            <span className="text-xs font-semibold text-base-content/70">
              {card.baths || 0} Baths
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
              <FaRulerCombined />
            </div>
            <span className="text-xs font-semibold text-base-content/70">
              {card.sqft || 0} SqFt
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="card-actions">
          <Link
            to={`/propertyDetails/${_id}`}
            className="btn btn-secondary w-full rounded-xl text-white font-bold tracking-wide shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
