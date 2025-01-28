import bcrypt from "bcryptjs";
import type { NextFunction, Request, Response } from "express";
import Users from "../models/user.model";
import { loginUser, registerUser } from "../services/auth.service";
import catchAsync from "../utils/catchAsync";

export const loginController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, userName, password } = req.body;
  const DBuser = await Users.findOne({ email, userName });

  if (!DBuser) {
    next({
      message: "User not found",
      statusCode: 404,
    });
  } else {
    const isPasswordValid = await bcrypt.compare(password, DBuser.password);

    if (!isPasswordValid) {
      next({
        message: "Invalid password",
        statusCode: 401,
      });
    } else {
      const { user, token } = await loginUser(DBuser);

      res.cookie("access_token", token.accessToken, {
        httpOnly: true,
        secure: true,
      });
      res.cookie("refresh_token", token.refreshToken, {
        httpOnly: true,
        secure: true,
      });
      res.status(200).json({
        status: "success",
        user,
      });
    }
  }
});

export const registerController = catchAsync(async (req: Request, res: Response) => {
  const result = await registerUser(req.body);
  const token = result.token;
  res.cookie("access_token", token.accessToken, {
    httpOnly: true,
    secure: true,
  });
  res.cookie("refresh_token", token.refreshToken, {
    httpOnly: true,
    secure: true,
  });
  res.status(200).json({
    success: true,
    data: result.user,
  });
});
