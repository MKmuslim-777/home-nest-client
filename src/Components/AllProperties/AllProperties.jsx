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
      .get(`http://localhost:3000/properties`) // <-
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
        <h2 className="text-5xl font-bold text-secondary text-center my-10">
          All Properties
        </h2>
        <img
          src="https://img.icons8.com/badges/48/property.png"
          alt=""
          className="w-[50px]"
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 my-10 md:w-11/12 mx-auto">
        {property.map((card) => (
          <PropertyCard card={card}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
