import express from "express";
import { authenticate } from "../middlewares/auth.middlewares";
import { getAllUsersController } from "../controller/auth.controller";

const router = express.Router();

router.get("/", authenticate, getAllUsersController);

export default router;
