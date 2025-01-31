import type { NextFunction, Response } from "express";
import { verifyToken } from "../utils/JWTUtils";
import type { AuthenticatedRequest } from "../utils/type";

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const token = req.cookies?.access_token;

  if (!token) {
    res.status(401).json({
      status: "error",
      errorCode: "UNAUTHORIZED",
      message: "Authentication Token is Missing",
    });
    return;
  }

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch {
    res.status(401).json({
      status: "error",
      errorCode: "TOKEN_INVALID",
      message: "Invalid or Expired Authentication Token",
    });
  }
};
