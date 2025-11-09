import axios from "axios";
import React, { useEffect } from "react";

const AllProperties = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/properties")
      .then((data) => console.log(data.data));
  }, []);
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
    </div>
  );
};

export default AllProperties;
