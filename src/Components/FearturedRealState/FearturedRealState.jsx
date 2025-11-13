import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import PropertyCard from "../PropertyCard/PropertyCard";
import { data } from "react-router";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import FeaturedCard from "./FeaturedCard";

const FearturedRealState = () => {
  //   const dataPromise = fetch("https://home-nest-server-ivory.vercel.app/properties")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  const [property, setProperty] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://home-nest-server-ivory.vercel.app/properties")
      .then((data) => {
        console.log(data.data);
        setProperty(data.data);
        // console.log(property);
        // setLoading(false);
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

  console.log(property);
  return (
    <div>
      <h2 className="md:text-5xl text-3xl font-bold text-center mt-40 text-secondary">
        Featured Real Estate
      </h2>
      <div>
        <Marquee pauseOnHover={true} play={true}>
          {property.map((card) => (
            <FeaturedCard key={card._id} card={card}></FeaturedCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FearturedRealState;
