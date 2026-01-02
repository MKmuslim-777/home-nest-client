import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router";

const PropertyCard = ({ card }) => {
  const {
    location,
    price,
    propertyImage,
    propertyName,
    _id,
    beds,
    baths,
    sqft,
  } = card;

  return (
    <div className="group card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full">
      {/* ইমেজ সেকশন */}
      <figure className="relative h-48 overflow-hidden">
        <img
          src={propertyImage}
          alt={propertyName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <div className="badge badge-secondary text-white font-bold text-xs p-3 shadow-lg">
            FOR SALE
          </div>
        </div>
      </figure>

      <div className="card-body p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xl font-black text-secondary">${price}</span>
            <span className="text-sm text-base-content/50 line-through">
              ${parseInt(price) + 500}
            </span>
          </div>

          <h3 className="font-bold text-base-content text-md line-clamp-1 mb-1 group-hover:text-secondary transition-colors">
            {propertyName}
          </h3>

          <p className="flex items-center text-xs text-base-content/60 mb-3">
            <HiLocationMarker className="text-secondary mr-1 shrink-0" />
            <span className="truncate">{location}</span>
          </p>
        </div>

        <div>
          <div className="divider my-0 opacity-50"></div>

          <div className="flex justify-between py-3 text-[12px] font-medium text-base-content/70">
            <div className="flex items-center gap-1">
              <FaBed className="text-secondary" />
              <span>{beds || 0}</span>
            </div>
            <div className="flex items-center gap-1 border-x border-base-300 px-3">
              <FaBath className="text-secondary" />
              <span>{baths || 0}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRulerCombined className="text-secondary" />
              <span>{sqft || 0} ft²</span>
            </div>
          </div>

          <Link
            to={`/propertyDetails/${_id}`}
            className="btn btn-sm btn-secondary btn-outline w-full rounded-lg hover:text-white transition-all font-bold mt-1"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
