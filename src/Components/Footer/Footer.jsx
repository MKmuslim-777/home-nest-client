import React from "react";
import { FaFacebook, FaGithub, FaHome, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-primary w-full">
      <footer className="footer sm:footer-horizontal md:w-11/12 mx-auto text-base-content p-10 px-20">
        <aside>
          <Link to={"/"}>
            <img
              src="https://i.ibb.co.com/My9r9KYr/Gemini-Generated-Image-979ngy979ngy979n-1.png"
              alt=""
              className="w-[190px] "
            />
          </Link>
          <p className="text-secondary">
            Searching for your dream property shouldn't feel like <br /> a
            chore. At HomeNest, we simplify the search, offering <br /> curated
            listings and expert guidance to help you find <br /> your perfect
            space—whether it's a cozy apartment or a luxury villa.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-secondary">Company</h6>
          <NavLink to={"/"} className={" text-secondary link link-hover"}>
            Home
          </NavLink>

          <NavLink
            to={"/AllProperties"}
            className={" text-secondary link link-hover"}
          >
            All Properties
          </NavLink>

          <NavLink
            to={"/contact"}
            className={" text-secondary link link-hover"}
          >
            Contact
          </NavLink>
        </nav>
        <nav>
          <h6 className="footer-title text-secondary font-semibold">Legal</h6>
          <a className="link link-hover text-secondary">Terms of use</a>
          <a className="link link-hover text-secondary">Privacy policy</a>
          <a className="link link-hover text-secondary">Cookie policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <NavLink
              className={"text-3xl md:ml-2.5 text-secondary hover:text-black"}
            >
              <FaXTwitter />
            </NavLink>
            <NavLink
              className={"text-3xl md:ml-2.5 text-secondary hover:text-black"}
            >
              <FaGithub />
            </NavLink>
            <NavLink
              className={
                "text-3xl md:ml-2.5 text-secondary hover:text-blue-500"
              }
            >
              <FaFacebook />
            </NavLink>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
