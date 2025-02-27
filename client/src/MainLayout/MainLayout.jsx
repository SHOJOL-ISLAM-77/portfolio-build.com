import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { loginSuccess, setLoading } from "../feature/auth/authSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:7000/api/v1/auth/", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.user) {
          dispatch(loginSuccess(data?.user));
        }
        dispatch(setLoading(false));
      });
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
