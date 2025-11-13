import axios from "axios";
import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import { Commet } from "react-loading-indicators";
import { useLoaderData } from "react-router";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

const AllProperties = () => {
  const [property, setProperty] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://home-nest-server-ivory.vercel.app/properties`) // <-
      .then((response) => {
        console.log("Fetched Data:", response.data);

        setProperty(response.data);
      })
      .catch((error) => {
        console.error("API Call Error:", error);

        toast.error("Failed to fetch properties.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  // const propertyData = useLoaderData();
  return (
    <div className="">
      <div className="text-center flex justify-center items-center">
        <h2 className="md:text-5xl text-3xl font-bold text-secondary text-center my-10">
          All Properties
        </h2>
        <img
          src="https://img.icons8.com/badges/48/property.png"
          alt=""
          className="w-[50px] md:block hidden"
        />
      </div>
      <div className="md:container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-10 gap-2.5 mb-10 mx-auto px-2.5">
        {property.map((card) => (
          <PropertyCard card={card}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
