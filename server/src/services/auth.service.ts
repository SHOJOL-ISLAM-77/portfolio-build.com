import bcrypt from "bcryptjs";

import config from "../config";
import { IUser } from "../interfaces/user.interface";
import Users from "../models/user.model";
import { createAccessToken, createRefreshToken } from "../utils/JWTUtils";

export const loginUser = async (user: IUser) => {
  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  await Users.findByIdAndUpdate(user._id, { refreshToken });
  return {
    user: {
      name: user.fullName,
      email: user.email,
      profileUrl: user.profileUrl,
    },
    token: { accessToken, refreshToken },
  };
};

export const registerUser = async (userData: IUser) => {
  const result = await createUser(userData);

  if (!result) {
    throw new Error("Failed to create user");
  }
  const accessToken = createAccessToken(result);
  const refreshToken = createRefreshToken(result);
  await Users.findByIdAndUpdate(result._id, { refreshToken });

  const user = {
    _id: result._id,
    name: result.fullName,
    userName: result.userName,
    email: result.email,
    profileUrl: result.profileUrl,
    portfolioId: result.portfolioId,
    role: result.role,
    personalUrl: result.personalUrl,
  };
  return {
    user,
    token: {
      refreshToken,
      accessToken,
    },
  };
};

const createUser = async (userData: IUser) => {
  const { userName, fullName, email, password, profileUrl } = userData;

  if (!email || !password || !fullName || !profileUrl || !userName) {
    throw new Error("All fields are required");
  }
  const existingUser = await Users.findOne({ email, userName });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, Number(config.salt));

  const result = await Users.create({
    password: passwordHash,
    userName,
    fullName,
    email,
    profileUrl,
  });
  return result;
};
