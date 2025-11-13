import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-50">
      <h1 className="text-9xl font-extrabold text-red-600">404</h1>
      <h2 className="text-3xl font-bold text-secondary mt-4 mb-3">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
