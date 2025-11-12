import axios from "axios";
import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import { Commet } from "react-loading-indicators";
import { useLoaderData } from "react-router";

const AllProperties = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // axios.get("https://home-nest-server-ivory.vercel.app/properties").then((data) => {
    //   setProperty(data);
    //   setLoading(false);
    //   console.log(property);
    // });
  }, []);

  // fetch("https://home-nest-server-ivory.vercel.app/properties")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setProperty(data);
  //     setLoading(false);
  //   });
  // console.log(property);

  if (loading) {
    <Commet color="#32cd32" size="medium" text="" textColor="" />;
  }
  const propertyData = useLoaderData();
  return (
    <div className="md:container mx-auto">
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
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 my-10">
        {propertyData.map((card) => (
          <PropertyCard card={card}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
