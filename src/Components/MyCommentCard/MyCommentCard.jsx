import React, { use } from "react";
import {
  HiStar,
  HiPencilAlt,
  HiEye,
  HiTrash,
  HiMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyCommentCard = ({ card, sl }) => {
  const { user } = use(AuthContext);
  //   console.log(card);

  const { _id, propertyName, propertyImage, commentBy } = card;

  return (
    <>
      {/* 1. SL (Serial Number) */}
      <td className="px-4 py-4 text-sm font-medium text-gray-900 w-1/12">
        {sl}
      </td>

      {/* 2. Property Image */}
      <td className="px-4 py-4 w-1/12">
        <img
          src={card.propertyImage}
          alt={card.propertyName}
          className="w-16 h-12 object-cover rounded-md shadow"
        />
      </td>

      {/* 3. Property Details (Responsive: width adjusts) */}
      <td className="px-4 py-4 w-3/12">
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-800 line-clamp-1">
            {card.propertyName}
          </span>
          <span className="text-xs font-medium text-teal-600 flex items-center mt-1">
            <HiOutlineLocationMarker className="w-3 h-3 mr-1" />
            {"property.category"}
          </span>
        </div>
      </td>

      {/* 4. CommentBy Details (Responsive: width adjusts) */}
      <td className="px-4 py-4 w-3/12">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">
            {user.displayName}
          </span>
          <span className="text-xs text-gray-500 flex items-center mt-1">
            <HiMail className="w-3 h-3 mr-1" />
            <span className="truncate" title={user.email}>
              {user.email}
            </span>
          </span>
        </div>
      </td>

      {/* 5. Ratings (Responsive: fixed size) */}
      <td className="px-4 py-4 w-1/12 ">
        {/* <StarDisplay rating={"commentBy.ratings"} /> */}
        <div className="flex items-center">
          <p className="text-sm text-secondary mr-1.5">{commentBy.rating}</p>
          <img
            src="https://img.icons8.com/fluency/48/star--v1.png"
            className="w-[22px]"
            alt=""
          />
        </div>
      </td>

      {/* 6. Actions (Responsive: fixed size) */}
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium w-2/12">
        <div className="flex space-x-2">
          {/* Details Button (Link to property/comment page) */}
          <Link
            to={`/property/${card._id}`}
            className="p-2 text-blue-600 hover:text-blue-800 rounded-full transition duration-150"
            title="View Details"
          >
            <HiEye className="w-5 h-5" />
          </Link>

          {/* Edit Button */}
          <button
            // onClick={() => editHandler(comment.id)}
            className="p-2 text-yellow-600 hover:text-yellow-800 rounded-full transition duration-150"
            title="Edit Comment"
          >
            <HiPencilAlt className="w-5 h-5" />
          </button>

          {/* Delete Button */}
          <button
            // onClick={() => deleteHandler(comment.id)}
            className="p-2 text-red-600 hover:text-red-800 rounded-full transition duration-150"
            title="Delete Comment"
          >
            <HiTrash className="w-5 h-5" />
          </button>
        </div>
      </td>
    </>
  );
};

export default MyCommentCard;
