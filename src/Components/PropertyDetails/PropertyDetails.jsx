import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineUserCircle,
  HiTag,
  HiCurrencyDollar,
} from "react-icons/hi";
import { useLoaderData } from "react-router";

const PropertyDetails = () => {
  const { _id: productId } = useLoaderData();
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/properties/${productId}`).then((data) => {
      // console.log("after axios get", data);
      setProperty(data.data);
    });
  }, [productId]);
  console.log(property);

  const {
    propertyName,
    description,
    price,
    location,
    category,
    propertyImage,
    postedDate,
    postedBy,
  } = property;
  //   console.log(postedBy.name);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <figure className="rounded-xl shadow-2xl overflow-hidden mb-6">
            <img
              src={propertyImage}
              alt={propertyName}
              className="w-full h-[50vh] md:h-[60vh] object-cover transition duration-500 hover:scale-[1.03]"
            />
          </figure>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              {propertyName}
            </h1>

            <div className="flex flex-wrap items-center space-x-4 text-gray-600 mb-6">
              <span className="flex items-center text-lg font-semibold text-secondary">
                <HiCurrencyDollar className="w-6 h-6 mr-1" />
                {price}
              </span>
              <span className="flex items-center text-base">
                <HiOutlineLocationMarker className="w-5 h-5 mr-1 text-secondary" />
                {location}
              </span>
              <div
                className="badge badge-outline badge-secondary
               font-medium"
              >
                {category}
              </div>
            </div>

            <div className="divider"></div>

            <h2 className="text-2xl font-bold text-gray-700 mt-4 mb-3">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          {/* Poster Information Card */}
          <div className="card bg-base-100 shadow-xl border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
              <HiOutlineUserCircle className="w-6 h-6 mr-2" /> {postedBy?.name}
            </h3>
            <div className="flex items-center space-x-4">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">
                  {"postedBy.profilePhotoUrl"}
                </p>
                <p className="text-sm text-gray-600">Real Estate Agent</p>
              </div>
            </div>

            <div className="divider my-4"></div>

            {/* Posting Date */}
            <div className="flex items-center text-sm text-gray-600">
              <HiOutlineCalendar className="w-5 h-5 mr-2 text-secondary" />
              Posted on:{" "}
              <span className="font-semibold ml-1">{postedDate}</span>
            </div>

            {/* Contact Button */}
            <button className="btn btn-secondary w-full mt-6 text-white text-lg">
              Contact Agent
            </button>
          </div>

          {/* Quick Facts Card (If you had more data like size, beds, baths) */}
          <div className="card bg-base-100 shadow-xl border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <HiTag className="w-6 h-6 mr-2" /> Quick Facts
            </h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Type</span>
                <span className="font-semibold text-right">{category}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Price</span>
                <span className="font-semibold text-right text-lg text-secondary">
                  {price}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Area</span>
                <span className="font-semibold text-right">{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
