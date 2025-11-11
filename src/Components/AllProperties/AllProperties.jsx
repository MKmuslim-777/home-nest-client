import axios from "axios";
import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import { Commet } from "react-loading-indicators";

const AllProperties = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // axios.get("http://localhost:3000/properties").then((data) => {
    //   setProperty(data);
    //   setLoading(false);
    //   console.log(property);
    // });
  }, []);

  // fetch("http://localhost:3000/properties")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setProperty(data);
  //     setLoading(false);
  //   });
  // console.log(property);

  if (loading) {
    <Commet color="#32cd32" size="medium" text="" textColor="" />;
  }
  return (
    <div>
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
      <div>
        {/* {property.map((card) => (
          <PropertyCard card={card}></PropertyCard>
        ))} */}
      </div>
    </div>
  );
};

export default AllProperties;
