import express from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
