import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavLinks = ({ title, link }) => {
  const handleLogout = () => {};

  return link === "logout" ? (
    <button
      onClick={handleLogout}
      className="text-xl font-bold bg-blue-500 px-5 py-2 rounded-lg cursor-pointer flex justify-center items-center gap-2">
      Logout <IoIosLogOut className="font-bold text-xl " />
    </button>
  ) : (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "-translate-y-2 text-2xl animate-bounce"
          : "hover:-translate-y-3 font-semibold hover:text-2xl transition-all p-2"
      }
      to={`/${link}`}>
      {title}
    </NavLink>
  );
};

export default NavLinks;
