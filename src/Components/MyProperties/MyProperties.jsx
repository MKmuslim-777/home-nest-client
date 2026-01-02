import React, { use, useEffect, useState } from "react";
import MyPropertyCard from "../MyPropertyCard/MyPropertyCard";
import { Commet } from "react-loading-indicators";
import { data, useLoaderData } from "react-router";
import { MdAddCircleOutline } from "react-icons/md";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import Loading from "../Loading/Loading";

const MyProperties = () => {
  const [loading, setLoading] = useState(false);
  const property = useLoaderData();
  const { user } = use(AuthContext);
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(
          `https://home-nest-server-ivory.vercel.app/properties?email=${user?.email}`
        ) // <-
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
  }, [user?.email]);

  console.log(propertyData);

  const handlePropertySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const property = form.propertyName.value;
    const price = form.price.value;
    // const postedDate = new Date();
    const location = form.location.value;
    const category = form.category.value;
    const name = form.name.value;
    const email = form.email.value;
    const description = form.description.value;

    const propertyData = {
      propertyName: property,
      price: Number(price),
      postedDate: new Date().toLocaleDateString(),
      location: location,
      category: category,
      propertyImage: form.propertyImageUrl.value,
      description: description,
      beds: Number(form.beds.value),
      baths: Number(form.baths.value),
      sqft: Number(form.sqft.value),
      postedBy: {
        name: name,
        email: email,
        profilePhotoUrl: user.photoURL,
      },
    };

    fetch("https://home-nest-server-ivory.vercel.app/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(propertyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          // window.location.reload();
          toast.success("Successfully Published Your Property!");

          const modal = document.getElementById("my_modal_5");
          if (modal) {
            modal.close();
          }
        }
      });
  };

  const modalClose = () => {
    const modal = document.getElementById("my_modal_5");
    modal.close();
  };

  if (loading) {
    return <Loading></Loading>;
  }
  // console.log(property);
  return (
    <div className="container mx-auto min-h-[65vh] mt-20">
      <title>HomeNest | My Properties</title>
      <div className="text-center flex justify-center items-center">
        <h2 className="md:text-5xl text-3xl font-bold text-secondary text-center my-10">
          My Properties
        </h2>
        <img
          src="https://img.icons8.com/badges/48/property.png"
          alt=""
          className="w-[50px] md:block hidden"
        />
      </div>
      <div className="justify-end px-2.5 ">
        <button
          className="btn btn-secondary text-base-100 mb-3.5 md:w-[200px] w-full"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <MdAddCircleOutline /> Add New Property
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box max-w-2xl">
            {" "}
            {/* modal width বাড়ানো হয়েছে */}
            <form onSubmit={handlePropertySubmit} method="dialog">
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h3 className="font-bold text-2xl text-secondary">
                  Add New Property
                </h3>
                <button
                  type="button"
                  onClick={modalClose}
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  <IoClose size={24} />
                </button>
              </div>

              <div className="form-control space-y-4">
                {/* Agent Info (Read Only) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Agent Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      readOnly
                      className="input input-bordered bg-base-200 cursor-not-allowed"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Agent Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      readOnly
                      className="input input-bordered bg-base-200 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Property Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Property Name
                    </label>
                    <input
                      type="text"
                      name="propertyName"
                      placeholder="e.g. Dream Haven Villa"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Category
                    </label>
                    <select
                      name="category"
                      className="select select-bordered w-full"
                      defaultValue="Residential-Apartment"
                    >
                      <option>Residential-Apartment</option>
                      <option>Residential-House</option>
                      <option>Commercial-Office</option>
                      <option>Commercial-Retail</option>
                      <option>Land-Residential</option>
                      <option>Industrial-Warehouse</option>
                    </select>
                  </div>
                </div>

                {/* Status & Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Property Status
                    </label>
                    <select
                      name="status"
                      className="select select-bordered w-full"
                      defaultValue="For Sale"
                    >
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Property Price ($)
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="Amount in USD"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                {/* Beds, Baths, SqFt, Floor */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Beds
                    </label>
                    <input
                      type="number"
                      name="beds"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Baths
                    </label>
                    <input
                      type="number"
                      name="baths"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      SqFt
                    </label>
                    <input
                      type="number"
                      name="sqft"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Floor No
                    </label>
                    <input
                      type="number"
                      name="floorNo"
                      placeholder="G+2"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                {/* Location & Image URL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      City/Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, State"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="label-text text-secondary font-semibold mb-1">
                      Primary Image URL
                    </label>
                    <input
                      type="url"
                      name="propertyImageUrl"
                      placeholder="https://image-link.com"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                {/* Video / Virtual Tour Link (New) */}
                <div className="flex flex-col">
                  <label className="label-text text-secondary font-semibold mb-1">
                    Video/Virtual Tour URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="videoUrl"
                    placeholder="YouTube or 360 View Link"
                    className="input input-bordered"
                  />
                </div>

                {/* Amenities (Checkboxes - New) */}
                <div className="flex flex-col">
                  <label className="label-text text-secondary font-semibold mb-2">
                    Amenities
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    {[
                      "Wifi",
                      "Swimming Pool",
                      "Gym",
                      "Parking",
                      "Security",
                      "Garden",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="amenities"
                          value={item}
                          className="checkbox checkbox-secondary checkbox-sm"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col">
                  <label className="label-text text-secondary font-semibold mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe the unique features of the property..."
                    className="textarea textarea-bordered h-24 w-full"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="btn btn-secondary w-full text-white font-bold text-lg"
                >
                  Publish Property
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>

      {propertyData ? (
        <div className="md:container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-10 gap-2.5 mb-10 mx-auto px-2.5">
          {propertyData.map((card) => (
            <MyPropertyCard key={card._id} card={card}></MyPropertyCard>
          ))}
        </div>
      ) : (
        <h3 className="border-4 border-red-600">
          You Have not Published Any property
        </h3>
      )}
    </div>
  );
};

export default MyProperties;
