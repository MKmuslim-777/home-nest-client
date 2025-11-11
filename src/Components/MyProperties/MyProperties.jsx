import axios from "axios";
import React, { useEffect, useState } from "react";
import MyPropertyCard from "../MyPropertyCard/MyPropertyCard";
import { Commet } from "react-loading-indicators";
import { useLoaderData } from "react-router";
import { MdAddCircleOutline } from "react-icons/md";

const MyProperties = () => {
  //   const [property, setProperty] = useState();
  const [loading, setLoading] = useState(false);
  const property = useLoaderData();
  //   useEffect(() => {
  //     axios.get("http://localhost:3000/properties").then((data) => {
  //       //   console.log(data.data);
  //       setLoading(false);
  //       setProperty(data.data);
  //       setLoading(true);
  //     });
  //   }, []);

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

    const propertyData = {
      propertyName: property,
      price: price,
      postedDate: new Date().toLocaleDateString(),
      location: location,
      category: category,
      postedBy: {
        name: name,
        email: email,
        profilePhotoUrl: "https://example.com/profile.jpg",
      },
    };
    form.reset();
    console.log(propertyData);
  };

  if (loading) {
    <Commet color="#32cd32" size="medium" text="" textColor="" />;
  }
  // console.log(property);
  return (
    <div className="container">
      <div className="text-center flex justify-center items-center">
        <h2 className="text-5xl font-bold text-secondary text-center my-10">
          My Properties
        </h2>
        <img
          src="https://img.icons8.com/badges/48/property.png"
          alt=""
          className="w-[50px]"
        />
      </div>
      <div className="justify-end">
        <button
          className="btn btn-secondary text-base-100 mb-3.5"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <MdAddCircleOutline /> Add New Property
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handlePropertySubmit} method="dialog">
              <h3 className="font-bold text-lg text-center my-5">
                Add New Property
              </h3>

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
                        placeholder="Your Name"
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
                        placeholder="Your Email"
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
                    name="propertyImageUrl"
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

      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 mb-10">
        {property.map((card) => (
          <MyPropertyCard key={card._id} card={card}></MyPropertyCard>
        ))}
      </div>
    </div>
  );
};

export default MyProperties;
