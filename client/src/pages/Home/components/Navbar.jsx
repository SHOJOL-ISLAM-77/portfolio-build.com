import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setStyle("shadow-lg bg-secondary");
      }
      if (window.scrollY > 150) {
        setStyle(`${style} bg-secondary opacity-95`);
      }
      if (window.scrollY === 0) {
        setStyle("");
      }
    });
  }, []);
  return (
    <nav className={`bg-primary text-text-color sticky top-0 z-50 border-b border-white transition-all ${style}`}>
      <div className="container flex items-start justify-between py-4">
        <Link to={"/"}>
          <img
            className="size-10 sm:size-15 rounded-full hover:scale-125 transition-all"
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
            alt="Logo"
          />
        </Link>
        <div className="sm:flex hidden justify-center items-center lg:text-xl lg:gap-6">
          {links.map((link, index) => (
            <NavLinks key={index} title={link.title} link={link.link} />
          ))}
        </div>

        <div
          className={`sm:hidden duration-1000 transition-all flex flex-col justify-center items-center relative ${
            show ? "mt-8 " : "-mt-96 "
          }`}>
          {links.map((link, index) => (
            <NavLinks key={index} title={link.title} link={link.link} />
          ))}
        </div>

        <div
          className="sm:hidden flex flex-col gap-1 mt-2 cursor-pointer"
          onClick={() => setShow(!show)}
          aria-label="Toggle Menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setShow(!show)}>
          <div
            className={`h-1 w-8 bg-white rounded transition-transform duration-500 ${
              show ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`h-1 w-8 bg-white rounded transition-opacity duration-500 ${show ? "opacity-0" : "opacity-100"}`}
          />
          <div
            className={`h-1 w-8 bg-white rounded transition-transform duration-500 ${
              show ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const links = [
  {
    title: "View Templates",
    link: "templates",
  },
  {
    title: "About Us",
    link: "about",
  },
  {
    title: "Blogs",
    link: "blogs",
  },
  {
    title: "contact",
    link: "contact",
  },
  {
    title: "Your Portfolio",
    link: "portfolio",
  },
  {
    title: "Login",
    link: "login",
  },
];
