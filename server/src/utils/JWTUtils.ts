import jwt from "jsonwebtoken";

import config from "../config/index";
import { IUser } from "../interfaces/user.interface";

export const signToken = (payload: object) => {
  return jwt.sign(payload, config.access_token_secret as string, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  const secret = config.access_token_secret;
  try {
    return jwt.verify(token, secret as string);
  } catch {
    throw new Error("Invalid or expired token");
  }
};

export const createAccessToken = async (result: IUser) => {
  return await signToken({
    email: result.email,
    name: result.userName,
    fullName: result.userName,
    id: result._id,
    portfolioId: result.portfolioId,
    role: result.role,
  });
};

export const createRefreshToken = async (result: IUser) => {
  return await signToken({
    email: result.email,
    name: result.userName,
    fullName: result.userName,
    id: result._id,
    portfolioId: result.portfolioId,
    role: result.role,
  });
};
