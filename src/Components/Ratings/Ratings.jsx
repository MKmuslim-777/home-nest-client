import React, { use, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const StarInput = ({ selected, onClick }) => (
  <svg
    onClick={onClick}
    className={`w-8 h-8 cursor-pointer transition duration-150 ${
      selected ? "text-yellow-500" : "text-gray-300 hover:text-yellow-400"
    }`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.09 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Ratings = ({ property }) => {
  const { user } = use(AuthContext);
  const [rating, setRating] = useState(0);
  //   console.log(property);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const commentData = {
      commentBy: {
        rating: Number(rating),
        name: form.name.value,
        email: form.email.value,
        comment: form.comment.value,
      },
    };

    const propertyData = {
      propertyName: property?.propertyName,
      price: Number(property?.price),
      postedDate: property?.propertyData,
      location: property?.location,
      category: property?.category,
      propertyImage: property?.propertyImage,
      description: property?.description,
      beds: Number(property?.beds),
      baths: Number(property?.baths),
      sqft: Number(property?.sqft),
      commentBy: commentData?.commentBy,
    };

    console.log(propertyData);

    fetch(
      `https://home-nest-server-ivory.vercel.app/properties/${property._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.acknowledged) {
          console.log(response);
          form.reset();
          toast.success("Your Data successfully Updated!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="mt-12 p-6 bg-gray-50 rounded-lg mx-auto md:w-4/12 shadow-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
        Give Ratings
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Rating:
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((starValue) => (
              <StarInput
                key={starValue}
                selected={starValue <= rating}
                onClick={() => setRating(starValue)}
              />
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            readOnly
            defaultValue={user?.displayName}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            readOnly
            defaultValue={user?.email}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Comment
          </label>
          <textarea
            id="comment"
            rows="4"
            name="comment"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            placeholder="Type your mind..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Ratings;
