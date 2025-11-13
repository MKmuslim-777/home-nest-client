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
    <div className="container mx-auto min-h-[65vh]">
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
          <div className="modal-box">
            <form onSubmit={handlePropertySubmit} method="dialog">
              <div className="flex justify-between items-center">
                <div></div>
                <h3 className="font-bold text-lg text-center my-5">
                  Add New Property
                </h3>
                <div>
                  <IoClose onClick={modalClose} />
                </div>
              </div>

              <div className="form-control">
                <div className="flex gap-2.5">
                  <div>
                    <label className="label mt-2.5">
                      <span className="label-text text-secondary">Name</span>
                    </label>
                    <label className="input-group ">
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        readOnly
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>

                  <div>
                    <label className="label mt-2.5">
                      <span className="label-text text-secondary">Email</span>
                    </label>
                    <label className="input-group ">
                      <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered w-[260px] "
                        required
                      />
                    </label>
                  </div>
                </div>

                <label className="label mt-2.5">
                  <span className="label-text text-secondary">
                    Property Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="propertyName"
                    placeholder="Property Name"
                    className="input input-bordered w-full"
                    required
                  />
                </label>

                <label className="label mt-2.5">
                  <span className="label-text text-secondary">Category</span>
                </label>
                <label className="input-group">
                  <select
                    defaultValue="Category"
                    name="category"
                    className="select w-full"
                  >
                    <option disabled={true}>Category</option>
                    <option>Residential-Apartment</option>
                    <option>AmberResidential-House</option>
                    <option>Commercial-Office</option>
                    <option>Commercial-Retail</option>
                    <option>Land-Residential</option>
                    <option>Land-Commercial</option>
                    <option>Industrial-Warehouse</option>
                    <option>Special-Holiday</option>
                  </select>
                </label>

                {/* Beds, Baths, SqFt */}
                <div className="flex gap-2.5">
                  <div>
                    <label className="label mt-2.5">
                      <span className="label-text text-secondary">Beds</span>
                    </label>
                    <label className="input-group ">
                      <input
                        type="number"
                        name="beds"
                        placeholder="Beds"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>

                  <div>
                    <label className="label mt-2.5">
                      <span className="label-text text-secondary">Baths</span>
                    </label>
                    <label className="input-group ">
                      <input
                        type="number"
                        name="baths"
                        placeholder="Baths"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>

                  <div>
                    <label className="label mt-2.5">
                      <span className="label-text text-secondary">SqFt</span>
                    </label>
                    <label className="input-group ">
                      <input
                        type="number"
                        name="sqft"
                        placeholder="SqFt"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <div>
                    <label className="label mt-2.5">
                      <span className="label-text text-secondary">
                        Property Price
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="number"
                        name="price"
                        placeholder="Property Price"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>

                  <div>
                    <label className="label mt-2.5">
                      <span className="label-text text-secondary">
                        Location
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="location"
                        placeholder="State Location"
                        className="input input-bordered w-[250px]"
                        required
                      />
                    </label>
                  </div>
                </div>

                <label className="label mt-2.5">
                  <span className="label-text text-secondary">
                    Property Image URL
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="propertyImageUrl"
                    placeholder="https://example.com/profile.jpg"
                    className="input input-bordered w-full"
                    required
                  />
                </label>

                <label className="label mt-2.5">
                  <span className="label-text text-secondary">Description</span>
                </label>
                <label className="input-group">
                  <textarea
                    type="text"
                    name="description"
                    placeholder="About Property"
                    className="textarea w-full"
                    required
                  />
                </label>
              </div>
              <button className="btn btn-secondary w-full mt-2.5 text-base-100">
                Add Property
              </button>
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
