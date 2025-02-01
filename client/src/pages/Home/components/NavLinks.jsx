import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useLogoutMutation } from "../../../feature/auth/authApi";
import { useDispatch } from "react-redux";
import { logout } from "../../../feature/auth/authSlice";
import Toast from "../../../components/Toast";

const NavLinks = ({ title, link }) => {
  const [logoutAPI, { isLoadign }] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await logoutAPI().unwrap();
    if (res.success) {
      console.log(res);
      dispatch(logout());
      Toast(true, res.message);
    }
  };

  return link === "logout" ? (
    <button
      onClick={handleLogout}
      className="text-xl font-bold bg-blue-500 px-5 py-2 rounded-lg cursor-pointer flex justify-center items-center gap-2"
    >
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
      to={`/${link}`}
    >
      {title}
    </NavLink>
  );
};

export default NavLinks;
