import express from "express";
import rateLimit from "express-rate-limit";
import {
  checkUserNameController,
  loginController,
  logoutController,
  registerController,
  checkAuthController,
} from "../controller/auth.controller";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many requests, please try again later.",
    statusCode: 429,
    success: false,
  },
});

router.post("/register", limiter, registerController);
router.post("/login", limiter, loginController);
router.post("/logout", logoutController);
router.post("/checkUserName", checkUserNameController);
router.get("/", checkAuthController);

export default router;
