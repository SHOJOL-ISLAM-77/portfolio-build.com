import { apiSlice } from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    registration: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    checkUserName: builder.mutation({
      query: (userName) => ({
        url: "/auth/checkUserName",
        method: "POST",
        body: userName,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation, useCheckUserNameMutation } = authApi;
