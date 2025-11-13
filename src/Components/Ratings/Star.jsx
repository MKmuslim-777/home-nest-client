import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";

const Star = () => {
  const [rating, setRating] = useState(0);

  return (
    <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      onChange={setRating}
      isRequired
    />
  );
};

export default Star;
