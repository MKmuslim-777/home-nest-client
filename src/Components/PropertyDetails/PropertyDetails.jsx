import axios from "axios";
import React, { use, useEffect, useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineUserCircle,
  HiTag,
  HiCurrencyDollar,
  HiHome,
  HiOutlineCube,
} from "react-icons/hi";
import { FaBed, FaBath } from "react-icons/fa"; // আরও মানানসই আইকন
import { useLoaderData, Link } from "react-router";
import Ratings from "../Ratings/Ratings";
import Loading from "../Loading/Loading";
import useAuth from "../../Hooks/useAuth";

const PropertyDetails = () => {
  const { user } = useAuth();
  const { _id: productId } = useLoaderData();
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get(`https://home-nest-server-ivory.vercel.app/properties/${productId}`)
      .then((data) => {
        setProperty(data.data);
      });
  }, [productId]);

  const {
    propertyName,
    description,
    price,
    location,
    category,
    propertyImage,
    postedDate,
    postedBy,
    beds,
    baths,
    sqft,
    _id,
  } = property;

  if (!propertyName) return <Loading />;

  return (
    <div className="bg-base-200/30 min-h-screen mt-5 py-10 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Breadcrumb or Small Label */}
        <div className="mb-6">
          <span className="text-secondary font-bold uppercase tracking-widest text-xs">
            Property Details
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-base-content mt-2">
            {propertyName}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Side: Image and Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Section */}
            <div className="relative group">
              <figure className="rounded-3xl shadow-2xl overflow-hidden h-[50vh] md:h-[70vh]">
                <img
                  src={propertyImage}
                  alt={propertyName}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </figure>
              {/* Floating Price Tag */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20">
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Total Price
                </p>
                <p className="text-3xl font-black text-secondary">${price}</p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Beds", value: beds, icon: <FaBed /> },
                { label: "Baths", value: baths, icon: <FaBath /> },
                { label: "Sqft", value: sqft, icon: <HiOutlineCube /> },
                { label: "Category", value: category, icon: <HiTag /> },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-base-100 p-4 rounded-2xl border border-base-200 shadow-sm flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-xl">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xs text-base-content/50 uppercase font-bold">
                      {stat.label}
                    </p>
                    <p className="font-bold text-base-content">
                      {stat.value || "N/A"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Card */}
            <div className="bg-base-100 p-8 rounded-3xl border border-base-200 shadow-sm">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <HiOutlineLocationMarker className="text-xl" />
                <span className="font-semibold text-lg">{location}</span>
              </div>
              <h2 className="text-2xl font-black text-base-content mb-4 underline decoration-secondary/30 decoration-4 underline-offset-8">
                About this Property
              </h2>
              <p className="text-base-content/70 leading-relaxed text-lg whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>

          {/* Right Side: Agent Info & Quick Facts */}
          <div className="lg:col-span-1 space-y-6">
            {/* Agent Card */}
            <div className="bg-base-100 p-8 rounded-3xl border border-base-200 shadow-xl sticky top-24">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <HiOutlineUserCircle className="text-secondary text-2xl" />{" "}
                Listed by Agent
              </h3>

              <div className="flex items-center gap-4 mb-8">
                <div className="avatar">
                  <div className="w-20 rounded-2xl ring ring-secondary ring-offset-base-100 ring-offset-4">
                    <img
                      src={
                        postedBy?.profilePhotoUrl ||
                        "https://img.icons8.com/puffy-filled/64/user.png"
                      }
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-black text-base-content">
                    {postedBy?.name}
                  </h4>
                  <p className="text-sm text-secondary font-semibold">
                    Verified Agent
                  </p>
                </div>
              </div>

              <div className="space-y-4 bg-base-200/50 p-4 rounded-2xl mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <HiOutlineCalendar className="text-secondary text-lg" />
                  <span className="text-base-content/60">
                    Posted on: <b className="text-base-content">{postedDate}</b>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm truncate">
                  <HiCurrencyDollar className="text-secondary text-lg" />
                  <span className="text-base-content/60 truncate">
                    {postedBy?.email}
                  </span>
                </div>
              </div>

              <a
                href={`mailto:${postedBy?.email}`}
                className="btn btn-secondary w-full rounded-2xl text-white font-bold h-14 shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all border-none"
              >
                Send Inquiry
              </a>
            </div>

            {/* Extra Promo/Trust Card */}
            {/* <div className="bg-secondary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Want a Tour?</h4>
                <p className="text-white/70 text-sm mb-4">
                  Book a physical visit to this property with our expert.
                </p>
                <button className="btn btn-sm btn-white rounded-lg">
                  Schedule Now
                </button>
              </div>
              <HiHome className="absolute -bottom-4 -right-4 text-9xl text-white/10 group-hover:scale-110 transition-transform" />
            </div> */}
          </div>
        </div>

        {/* Ratings Section */}
        <div className="mt-16">
          <div className="divider mb-10">Reviews & Ratings</div>
          <Ratings property={property} id={_id} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
