import axios from "axios";
import React, { useEffect } from "react";

const FearturedRealState = () => {
  //   const dataPromise = fetch("https://home-nest-server-ivory.vercel.app/properties")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  useEffect(() => {
    axios
      .get("https://home-nest-server-ivory.vercel.app/properties")
      .then((data) => console.log(data.data));
  }, []);
  return (
    <div>
      <h2 className="md:text-5xl text-3xl font-bold text-center mt-40 text-secondary">
        Featured Real Estate
      </h2>
      <div>{}</div>
    </div>
  );
};

export default FearturedRealState;
