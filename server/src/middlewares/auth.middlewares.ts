import type { NextFunction, Response } from "express";
import { verifyToken } from "../utils/JWTUtils";
import type { AuthenticatedRequest } from "../utils/type";

export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result = await verifyToken(req, res);

  if (result.error) {
    res.status(result.status).json({
      success: false,
      message: result.error || "Invalid or Expired Authentication Token",
    });
  } else {
    req.user = result.user;
    next();
  }
};
