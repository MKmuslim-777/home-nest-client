import axios from "axios";
import React, { useEffect } from "react";

const FearturedRealState = () => {
  //   const dataPromise = fetch("http://localhost:3000/properties")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  useEffect(() => {
    axios
      .get("http://localhost:3000/properties")
      .then((data) => console.log(data.data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-40 text-secondary">
        Featured Real Estate
      </h2>
      <div>{}</div>
    </div>
  );
};

export default FearturedRealState;
