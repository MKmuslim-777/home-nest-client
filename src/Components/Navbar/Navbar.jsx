import React, { use } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { GoComment, GoSignOut } from "react-icons/go";
import ThemeToggle from "../ToggleBtn/ThemeToggle";
import Logo from "../../Shared/Logo/Logo";

const Navbar = () => {
  const { user, handlesignOut } = use(AuthContext);

  const handleSignOut = () => {
    handlesignOut()
      .then(() => {
        toast.success("Successfully Signed Out!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      {["/", "/AllProperties", "/myProperties"].map((path, index) => (
        <li key={index}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `relative font-semibold text-[16px] px-4 py-2 transition-all duration-300 hover:text-secondary bg-transparent !bg-none ${
                isActive
                  ? "text-secondary after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:bg-secondary"
                  : "text-base-content"
              }`
            }
          >
            {path === "/"
              ? "Home"
              : path
                  .replace("/", "")
                  .replace(/([A-Z])/g, " $1")
                  .trim()}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 z-[1000] w-full bg-base-100/80 backdrop-blur-lg border-b border-base-200  shadow-sm">
      <div className="container mx-auto navbar py-2 px-2 md:px-0">
        {/* Navbar Start: Mobile Menu & Logo */}
        <div className="navbar-start">
          <div className="lg:hidden">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-1" className="btn btn-ghost btn-circle">
                <TiThMenu size={22} className="text-secondary" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
              <ul className="menu p-6 w-72 min-h-full bg-base-100 text-base-content space-y-4 shadow-2xl">
                <div className="mb-6 px-4">
                  <Logo></Logo>
                </div>
                {links}
              </ul>
            </div>
          </div>

          <Link
            to={"/"}
            className="ml-2 lg:ml-0 transition-transform active:scale-95"
          >
            <img
              src="https://i.ibb.co.com/My9r9KYr/Gemini-Generated-Image-979ngy979ngy979n-1.png"
              className="w-[140px] md:w-[175px]"
              alt="Brand Logo"
            />
          </Link>
        </div>

        {/* Navbar Center: Visible only on Desktop (lg) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-1 font-medium">
            {links}
          </ul>
        </div>

        {/* Navbar End: Icons & Auth Buttons */}
        <div className="navbar-end gap-2 md:gap-3">
          <ThemeToggle />

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar online border-2 border-secondary/20 hover:border-secondary transition-all"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://img.icons8.com/puffy-filled/32/user.png"
                    }
                    alt="User"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-4 z-[1] p-5 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-64 border border-base-200"
              >
                <div className="flex flex-col items-center pb-4 mb-3 border-b border-base-100 italic">
                  <img
                    src={
                      user?.photoURL ||
                      "https://img.icons8.com/puffy-filled/32/user.png"
                    }
                    className="w-14 h-14 rounded-full border-2 border-secondary p-0.5 mb-2 shadow-sm"
                    alt="Profile"
                  />
                  <p className="font-bold text-[16px] text-base-content">
                    {user?.displayName}
                  </p>
                  <p className="text-[12px] text-base-content/60 truncate w-full text-center">
                    {user?.email}
                  </p>
                </div>

                <li className="mb-1">
                  <NavLink
                    to="/dashboard"
                    className="py-2.5 px-4 hover:bg-secondary/10 rounded-lg transition-colors flex items-center gap-3"
                  >
                    {/* <GoComment className="text-secondary text-lg" /> */}
                    <span className="font-medium">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="py-2.5 px-4 text-error hover:bg-error/10 rounded-lg transition-colors flex items-center gap-3 w-full"
                  >
                    <GoSignOut size={18} />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/auth/login"
                className="hidden sm:flex btn btn-ghost btn-sm md:btn-md rounded-full px-5 font-bold hover:bg-secondary hover:text-white"
              >
                Sign In
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-secondary btn-sm md:btn-md rounded-full px-6 text-white shadow-md hover:shadow-secondary/30 hover:scale-105 transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
