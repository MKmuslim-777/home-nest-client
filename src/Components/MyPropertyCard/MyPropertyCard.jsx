import React, { use, useState } from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoClose } from "react-icons/io5";

const propertyData = {
  imageUrl:
    "https://i.ibb.co.com/F4Q0FmCq/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg",
  status: "For Sale",
  price: 550000,
  title: "Modern Suburban Family Home",
  location: "123 Serene View Dr, Cityville, CA",
  beds: 4,
  baths: 3,
  sqft: 2800,
};

const MyPropertyCard = ({ property = propertyData, card }) => {
  const [myProperties, setMyProperties] = useState([]);
  const { user } = use(AuthContext);

  const showModal = () => {
    document.getElementById("my_modal_4").showModal();
  };

  const handleDeleteProperty = (_id) => {
    fetch(`https://home-nest-server-ivory.vercel.app/properties/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          window.location.reload();
          // console.log(data);
          toast.success("Deleted Successfully!");
        }
      });
  };

  const modalClose = () => {
    const modal = document.getElementById("my_modal_4");
    modal.close();
  };

  const handlePropertyUpdate = (e) => {
    e.preventDefault();
    const modal = document.getElementById("my_modal_4");
    modal.close();
  };

  // console.log(card._id);
  const { location, price, propertyImage, propertyName, _id } = card;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]">
        <figure className="relative h-56">
          <img
            src={propertyImage}
            alt={propertyName}
            className="w-full h-full object-cover"
          />
          {/* Status Badge - DaisyUI badge component */}
          {/* <div
          className={`badge badge-lg absolute top-3 left-3 font-semibold ${
            property.status === "For Sale" ? "badge-primary" : "badge-secondary"
          }`}
        >
          {property.status}
        </div> */}
        </figure>

        <div className="card-body p-5">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-bold text-secondary">${price}</h2>
          </div>
          <h3 className="card-title text-lg mb-1 line-clamp-2">
            {propertyName}
          </h3>

          <p className="flex items-center text-sm text-gray-600 mb-3">
            <HiLocationMarker className="w-4 h-4 mr-1 text-secondary" />
            <span className="truncate">{location}</span>
          </p>

          <div className="divider my-0"></div>

          <div className="flex justify-around pt-3 text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-1">
              <FaBed className="text-lg text-accent" />
              <span>{property.beds} Beds</span>
            </div>

            <div className="flex items-center space-x-1">
              <FaBath className="text-lg text-accent" />
              <span>{property.baths} Baths</span>
            </div>

            <div className="flex items-center space-x-1">
              <FaRulerCombined className="text-lg text-accent" />
              <span>{property.sqft} SqFt</span>
            </div>
          </div>

          <div className="card-actions w-full justify-between mt-4">
            <button
              className="btn btn-sm bg-[#00d3bb] text-base-100 border-none"
              onClick={() => {
                showModal();
              }}
            >
              Edit
            </button>
            <Link
              to={`/propertyDetails/${_id}`}
              className="btn btn-sm btn-secondary text-base-100"
            >
              View Details
            </Link>
            <button
              onClick={() => handleDeleteProperty(_id)}
              className="btn btn-sm bg-red-600 border-none text-base-100"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* Update modal form */}
      <div className="justify-end">
        <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handlePropertyUpdate} method="dialog">
              <div className="flex justify-between items-center">
                <div></div>
                <h3 className="font-bold text-lg text-center my-5">
                  Update Property
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
    </div>
  );
};

export default MyPropertyCard;
