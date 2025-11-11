import axios from "axios";
import React, { useEffect, useState } from "react";
import MyPropertyCard from "../MyPropertyCard/MyPropertyCard";
import { Commet } from "react-loading-indicators";
import { useLoaderData } from "react-router";

const MyProperties = () => {
  //   const [property, setProperty] = useState();
  const [loading, setLoading] = useState(false);
  const property = useLoaderData();
  //   useEffect(() => {
  //     axios.get("http://localhost:3000/properties").then((data) => {
  //       //   console.log(data.data);
  //       setLoading(false);
  //       setProperty(data.data);
  //       setLoading(true);
  //     });
  //   }, []);
  if (loading) {
    <Commet color="#32cd32" size="medium" text="" textColor="" />;
  }
  console.log(property);
  return (
    <div className="container">
      <div className="text-center flex justify-center items-center">
        <h2 className="text-5xl font-bold text-secondary text-center my-10">
          My Properties
        </h2>
        <img
          src="https://img.icons8.com/badges/48/property.png"
          alt=""
          className="w-[50px]"
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mb-10">
        {property.map((card) => (
          <MyPropertyCard key={card._id} card={card}></MyPropertyCard>
        ))}
      </div>
    </div>
  );
};

export default MyProperties;
