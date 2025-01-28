import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ title, link }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "-translate-y-2 text-2xl"
          : "hover:-translate-y-3 font-semibold hover:text-2xl transition-all p-2"
      }
      to={`/${link}`}>
      {title}
    </NavLink>
  );
};

export default NavLinks;
