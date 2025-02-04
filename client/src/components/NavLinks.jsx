import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLogoutMutation } from "../feature/auth/authApi";
import { logout } from "../feature/auth/authSlice";
import Toast from "./Toast";

const NavLinks = ({ title, link }) => {
  const [logoutAPI] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await logoutAPI().unwrap();
    if (res.success) {
      dispatch(logout());
      Toast(true, res.message);
    }
  };

  return link === "logout" ? (
    <button
      onClick={handleLogout}
      className="text-base md:text-lg lg:text-xl font-bold bg-blue-500 px-5 py-1 xl:py-2 rounded-lg cursor-pointer flex justify-center items-center gap-2">
      Logout <IoIosLogOut className="font-bold text-xl" />
    </button>
  ) : (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "-translate-y-2 text-2xl sm:animate-bounce"
          : "hover:-translate-y-3 font-semibold hover:text-2xl transition-all p-2 py-3"
      }
      to={`/${link}`}>
      {title}
    </NavLink>
  );
};

export default NavLinks;
