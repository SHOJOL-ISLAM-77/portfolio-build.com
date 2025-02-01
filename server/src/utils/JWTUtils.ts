import jwt from "jsonwebtoken";

import config from "../config/index";
import { IUser } from "../interfaces/user.interface";
import { NextFunction, Request, Response } from "express";
import Users from "../models/user.model";

export const signToken = (payload: object) => {
  return jwt.sign(payload, config.access_token_secret as string, {
    expiresIn: "15m",
  });
};

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.access_token;
    const secret = config.access_token_secret;

    if (!token) {
      return { error: "Unauthorized: No token provided", status: 401 };
    }

    try {
      const user = jwt.verify(token, secret as string);
      return { user };
    } catch (error: any) {
      if (error.name === "TokenExpiredError") {
        const refreshToken = req.cookies.refresh_token;
        if (!refreshToken) {
          return { error: "Forbidden: No refresh token provided", status: 403 };
        }
        const user = await Users.findOne({ refreshToken });
        if (!user) {
          res.clearCookie("access_token").clearCookie("refresh_token");
          return { error: "Invalid refresh token, logging out", status: 403 };
        }
        const newAccessToken = await createAccessToken(user);
        res.cookie("access_token", newAccessToken, {
          httpOnly: true,
          secure: true,
        });
        const newUser = await jwt.verify(
          newAccessToken as any,
          secret as string
        );
        return { user: newUser };
      } else {
        return { error: "Invalid token", status: 401 };
      }
    }
  } catch (error) {
    console.error("Token verification error:", error);
    return { error: "Internal server error", status: 500 };
  }
};

export const createAccessToken = async (result: IUser): Promise<string> => {
  return await signToken({
    email: result.email,
    userName: result.userName,
    fullName: result.userName,
    profileUrl: result.profileUrl,
    id: result._id,
    portfolioId: result.portfolioId,
    role: result.role,
  });
};

export const createRefreshToken = async (result: IUser) => {
  try {
    return await jwt.sign(
      {
        email: result.email,
        userName: result.userName,
        fullName: result.userName,
        profileUrl: result.profileUrl,
        id: result._id,
        portfolioId: result.portfolioId,
        role: result.role,
      },
      config.refresh_token_secret as string,
      { expiresIn: "7d" }
    );
  } catch {
    throw new Error("Failed to create refresh token");
  }
};
