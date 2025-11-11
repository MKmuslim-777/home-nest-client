import React from "react";
import { FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdPermContactCalendar } from "react-icons/md";
import { Link, NavLink } from "react-router";
// import logo from "../assets/company_image/toytopia.png";
// import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  //   const { user, signout } = use(AuthContext);
  const links = (
    <>
      <li className="mr-5">
        <NavLink
          to={"/"}
          className={
            "font-semibold text-secondary text-[18px] hover:bg-transparent "
          }
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li className="mr-5">
        <NavLink
          to={"/AllProperties"}
          className={
            "font-semibold text-secondary text-[18px] hover:bg-transparent"
          }
        >
          <img
            src="https://img.icons8.com/material-outlined/24/property.png"
            alt=""
          />{" "}
          All Properties
        </NavLink>
      </li>
      <li className="mr-5">
        <NavLink
          to={"/contact"}
          className={
            "font-semibold text-secondary text-[18px] hover:bg-transparent"
          }
        >
          <MdPermContactCalendar />
          Contact
        </NavLink>
      </li>
      <li className="mr-5">
        <NavLink
          to={"/myProperties"}
          className={
            "font-semibold text-secondary text-[18px] hover:bg-transparent"
          }
        >
          My Properties
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container navbar ">
        <div className="navbar-start">
          <div className="drawer lg:hidden">
            <input
              id="my-drawer-1"
              type="checkbox"
              className="drawer-toggle lg:hidden"
            />
            <div className="drawer-content lg:hidden">
              <label
                htmlFor="my-drawer-1"
                className="btn border-none shadow-none bg-transparent lg:hidden"
              >
                <TiThMenu className=" hover:text-base-100" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-1"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-primary min-h-full w-80 p-4">{links}</ul>
            </div>
          </div>
          <Link to={"/"}>
            <img
              src={
                "https://i.ibb.co.com/My9r9KYr/Gemini-Generated-Image-979ngy979ngy979n-1.png"
              }
              className="w-[190px] "
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="rounded-full dropdown dropdown-hover  ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-primary btn-circle m-1"
            >
              <img
                src={`https://img.icons8.com/puffy-filled/32/user.png`}
                className="rounded-full w-[33px]"
                alt="User Image"
              />
            </div>
            <div
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm flex flex-col justify-center items-center outline-none"
            >
              <div className="flex flex-col items-center">
                <img
                  src={"https://img.icons8.com/puffy-filled/32/user.png"}
                  className="rounded-full w-[90px] border border-secondary"
                  alt="User Profile"
                />
                <p className=" text-secondary mt-2 font-semibold">User</p>
                <p className=" text-secondary font-semibold">
                  Example@gmail.com
                </p>
                <div className="flex gap-2.5">
                  <button className="btn btn-secondary text-base-100 mt-2">
                    Edit
                  </button>
                  <button className="btn btn-outline hover:bg-secondary hover:text-base-100 mt-2">
                    Sign Out
                  </button>
                </div>

                {/* {user ? (
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.icons8.com/puffy-filled/32/user.png"
                    }
                    className="rounded-full w-[90px]"
                    alt="User Profile"
                  />
                  <p className="text-[18px] mt-2.5 font-semibold">
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={handleSignOut}
                    className="btn w-full mt-5 text-secondary bg-white"
                  >
                    Sign Out */}
                {/* </button> */}
              </div>
              {/* ) : (
                <Link
                  to={"/auth/login"}
                  className="btn ml-5 text-white bg-secondary"
                >
                  Sign In
                </Link>
              )} */}
            </div>
          </div>
          {/* <Link to={"/auth/login"} className="myBtn ml-3.5">
            Sign Up
          </Link> */}
          <Link to={"/auth/login"} className="myBtn ml-3.5">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
