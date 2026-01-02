import axios from "axios";
import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { HiSearch } from "react-icons/hi";

const AllProperties = () => {
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://home-nest-server-ivory.vercel.app/properties`)
      .then((response) => {
        setProperty(response.data);
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
    <div className="min-h-screen bg-base-200/30 pb-20 mt-18">
      {/* Header Section with Background */}
      <div className="bg-secondary py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img
            src="https://www.transparenttextures.com/patterns/cubes.png"
            alt=""
          />
        </div>

        <div className="relative z-10 container mx-auto text-center text-white">
          <div className="flex justify-center items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-6xl font-black">All Properties</h1>
            <img
              src="https://img.icons8.com/badges/48/ffffff/property.png"
              alt="icon"
              className="w-12 h-12 hidden md:block animate-pulse"
            />
          </div>
          <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl font-medium">
            Discover your dream space from our curated list of verified premium
            properties.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar Section */}
      <div className="container mx-auto -mt-8 px-4 relative z-20">
        <div className="bg-base-100 p-4 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 items-center border border-base-200">
          <div className="relative w-full">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search by location or property name..."
              className="input input-bordered w-full pl-12 focus:border-secondary outline-none rounded-xl"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn btn-secondary rounded-xl px-8 flex items-center gap-2 w-full md:w-auto text-white">
            {/* <HiOutlineAdjustmentsHorizontal className="text-xl" /> */}
            Filters
          </button>
        </div>
      </div>

      {/* Stats/Results Info */}
      <div className="container mx-auto px-4 mt-10 mb-6 flex justify-between items-end">
        <div>
          <h3 className="text-xl font-bold text-secondary">
            Available Listings
          </h3>
          <p className="text-sm text-base-content/60">
            Showing {property.length} results
          </p>
        </div>
        <select className="select select-md  font-semibold focus:bg-transparent ">
          <option disabled selected>
            Sort By
          </option>
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Property Grid */}
      <div className="container mx-auto px-4">
        {property.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {property
              .filter(
                (item) =>
                  item.propertyName
                    ?.toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.location
                    ?.toLowerCase()
                    .includes(searchQuery.toLowerCase())
              )
              .map((card) => (
                <PropertyCard key={card._id} card={card} />
              ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold opacity-30">
              No Properties Found
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProperties;
