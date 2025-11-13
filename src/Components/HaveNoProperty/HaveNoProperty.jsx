import React from "react";
import { useNavigate } from "react-router"; // নেভিগেট করার জন্য এটি প্রয়োজন
// আপনি প্রয়োজন অনুযায়ী একটি আইকন ইমপোর্ট করতে পারেন, যেমন:
import { HiOutlineHome } from "react-icons/hi";

const HaveNoProperty = () => {
  // useNavigate হুক ব্যবহার করে প্রোগ্রাম্যাটিকভাবে নেভিগেট করার জন্য
  const navigate = useNavigate();

  const handleNavigate = () => {
    // বাটন ক্লিক হলে ইউজারকে /AllProperty রুটে নেভিগেট করবে
    navigate("/AllProperty");
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 md:p-20 bg-white rounded-xl shadow-lg border border-gray-100 min-h-[400px]">
      {/* আইকন বা ইলাস্ট্রেশন */}
      <div className="mb-6 p-4 rounded-full bg-red-100 text-red-500">
        <HiOutlineHome className="w-12 h-12" />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
        আপনি এখনো কোনো প্রপার্টি যুক্ত করেননি
      </h2>

      {/* সংক্ষিপ্ত বার্তা */}
      <p className="text-gray-500 mb-8 text-lg text-center max-w-md">
        আপনার প্রথম প্রপার্টিটি যোগ করার মাধ্যমে আপনার যাত্রা শুরু করুন। এটি
        মাত্র কয়েক মিনিটের কাজ!
      </p>

      {/* বাটন */}
      <button
        onClick={handleNavigate}
        className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300 transform hover:scale-[1.02]"
      >
        Go to add a Property
      </button>
    </div>
  );
};

export default HaveNoProperty;
