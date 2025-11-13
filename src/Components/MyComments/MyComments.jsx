import React, { use, useEffect, useState } from "react";
import { HiOutlineChatAlt2, HiStar } from "react-icons/hi";
import MyCommentCard from "../MyCommentCard/MyCommentCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const MyComments = () => {
  const [loading, setLoading] = useState(false);
  // const property = useLoaderData();
  const { user } = use(AuthContext);
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(`http://localhost:3000/comments?email=${user.email}`) // <-
        .then((response) => {
          console.log("Fetched Data:", response.data);

          setPropertyData(response.data);
        })
        .catch((error) => {
          console.error("API Call Error:", error);

          toast.error("Failed to fetch properties.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user]);
  // console.log(propertyData);

  if (loading) {
    return <Loading></Loading>;
  }

  // const { user } = use(AuthContext);
  // const demoComments = [
  //   {
  //     id: 1,
  //     propertyName: "Luxury Apartment in Banani",
  //     commentText:
  //       "Excellent service and a smooth buying process! The location is perfect.",
  //     rating: 5,
  //     date: "2025-10-25",
  //   },
  //   {
  //     id: 2,
  //     propertyName: "Commercial Plot near Airport Road",
  //     commentText:
  //       "Good investment advice, although the paperwork took a bit longer than expected.",
  //     rating: 4,
  //     date: "2025-09-15",
  //   },
  //   {
  //     id: 3,
  //     propertyName: "Vacation Villa in Cox's Bazar",
  //     commentText:
  //       "The villa was beautiful, but the agent was slow to respond initially.",
  //     rating: 3.5,
  //     date: "2025-08-01",
  //   },
  // ];

  return (
    <section className="p-6 min-h-[65vh] mt-20 container">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center border-b pb-3">
        <HiOutlineChatAlt2 className="w-6 h-6 mr-3 text-teal-600" />
        Your All Of Comments & Ratings
      </h2>

      <div className="overflow-x-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                SL
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Property Image
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Property
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Comment By
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Ratings
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {propertyData.map((card) => (
              <tr
                key={card._id}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <MyCommentCard
                  key={card._id}
                  sl={propertyData.length}
                  card={card}
                ></MyCommentCard>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyComments;
