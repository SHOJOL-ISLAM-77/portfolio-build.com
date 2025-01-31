import express from "express";
import { getAllUsersController } from "../controller/auth.controller";
import { authenticate } from "../middlewares/auth.middlewares";

const router = express.Router();

router.get("/", authenticate, getAllUsersController);

export default router;
