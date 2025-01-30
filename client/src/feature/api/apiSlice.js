import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../auth/authSlice";

const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:7000/api/v1"
    : "https://portfolio-buildcom.vercel.app/api/v1";

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.warn("Unauthorized! Logging out...");
    api.dispatch(logout());

    window.location.href = "/login";
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ["User", "Template", "Blog", "Portfolio"],
});
