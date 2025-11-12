import React, { useState } from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router";
import { toast } from "react-toastify";

const propertyData = {
  imageUrl:
    "https://i.ibb.co.com/F4Q0FmCq/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg",
  status: "For Sale",
  price: 550000,
  title: "Modern Suburban Family Home",
  location: "123 Serene View Dr, Cityville, CA",
  beds: 4,
  baths: 3,
  sqft: 2800,
};

const MyPropertyCard = ({ property = propertyData, card }) => {
  const [myProperties, setMyProperties] = useState([]);

  const handleDeleteProperty = (_id) => {
    fetch(`http://localhost:3000/properties/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          toast.success("Deleted Successfully!");
        }
      });
  };

  // console.log(card._id);
  const { location, price, propertyImage, propertyName, _id } = card;
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]">
      <figure className="relative h-56">
        <img
          src={propertyImage}
          alt={propertyName}
          className="w-full h-full object-cover"
        />
        {/* Status Badge - DaisyUI badge component */}
        {/* <div
          className={`badge badge-lg absolute top-3 left-3 font-semibold ${
            property.status === "For Sale" ? "badge-primary" : "badge-secondary"
          }`}
        >
          {property.status}
        </div> */}
      </figure>

      <div className="card-body p-5">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold text-secondary">${price}</h2>
        </div>
        <h3 className="card-title text-lg mb-1 line-clamp-2">{propertyName}</h3>

        <p className="flex items-center text-sm text-gray-600 mb-3">
          <HiLocationMarker className="w-4 h-4 mr-1 text-secondary" />
          <span className="truncate">{location}</span>
        </p>

        <div className="divider my-0"></div>

        <div className="flex justify-around pt-3 text-sm font-medium text-gray-700">
          <div className="flex items-center space-x-1">
            <FaBed className="text-lg text-accent" />
            <span>{property.beds} Beds</span>
          </div>

          <div className="flex items-center space-x-1">
            <FaBath className="text-lg text-accent" />
            <span>{property.baths} Baths</span>
          </div>

          <div className="flex items-center space-x-1">
            <FaRulerCombined className="text-lg text-accent" />
            <span>{property.sqft} SqFt</span>
          </div>
        </div>

        <div className="card-actions w-full justify-between mt-4">
          <button className="btn btn-sm bg-[#00d3bb] text-base-100 border-none">
            Edit
          </button>
          <Link
            to={`/propertyDetails/${_id}`}
            className="btn btn-sm btn-secondary text-base-100"
          >
            View Details
          </Link>
          <button
            onClick={() => handleDeleteProperty(_id)}
            className="btn btn-sm bg-red-600 border-none text-base-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPropertyCard;
