import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { MdAddCircleOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router";

const UpdateProperty = () => {
  const data = useLoaderData();
  //   console.log(data._id);
  const navigate = useNavigate();

  const { user } = use(AuthContext);
  const handlePropertyUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const property = form.propertyName.value;
    const price = form.price.value;
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
    };

    fetch(`https://home-nest-server-ivory.vercel.app/properties/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(propertyData),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.acknowledged) {
          console.log(response);
          //   form.reset();
          navigate("/myProperties");
          toast.success("Your Data successfully Updated!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto my-10 shadow-lg p-5 py-10 rounded-2xl border border-gray-50 bg-primary md:w-[450px]">
      <div className="">
        <form onSubmit={handlePropertyUpdate}>
          <div className="flex justify-between items-center">
            <div></div>
            <h3 className="font-bold text-lg text-center my-5">
              Update Property
            </h3>
            <div>{/* <IoClose /> */}</div>
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
                    className="input input-bordered  "
                    required
                  />
                </label>
              </div>
            </div>

            <label className="label mt-2.5">
              <span className="label-text text-secondary">Property Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="propertyName"
                defaultValue={data.propertyName}
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="label mt-2.5">
              <span className="label-text text-secondary">Category</span>
            </label>
            <label className="input-group">
              <select
                defaultValue={data.category}
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
                    defaultValue={data.beds}
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
                    defaultValue={data.baths}
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
                    defaultValue={data.sqft}
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
                    defaultValue={data.price}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>

              <div>
                <label className="label mt-2.5">
                  <span className="label-text text-secondary">Location</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="location"
                    defaultValue={data.location}
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
                defaultValue={data.propertyImage}
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
                rows={"8"}
                defaultValue={data.description}
                className="textarea w-full"
                required
              />
            </label>
          </div>
          <button className="btn btn-secondary w-full mt-2.5 text-base-100">
            Update Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
