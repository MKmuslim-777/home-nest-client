import React from "react";
import { FaHome } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
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
          className={"font-semibold text-secondary text-[18px]"}
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li className="mr-5">
        <NavLink
          to={"/AllProperties"}
          className={"font-semibold text-secondary text-[18px]"}
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
          to={"/my_profile"}
          className={"font-semibold text-secondary text-[18px]"}
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
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
            <div tabIndex={0} role="button" className="btn btn-circle m-1">
              <img
                // src={`${
                //   user
                //     ? user.photoURL
                //     : "https://img.icons8.com/puffy-filled/32/user.png"
                // }`}
                className="rounded-full w-[33px]"
                alt=""
              />
            </div>
            <div
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm flex flex-col justify-center items-center outline-none"
            >
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
        {/* <Link
            to={"/auth/register"}
            className="btn  bg-[#dd6f6d] border-none hover:bg-[#f58e8c] text-white md:block hidden"
          >
            Sign Up
          </Link> */}
        <Link to={"/auth/login"} className="myBtn ml-3.5">
          Sign In
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
