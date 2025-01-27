import express from "express";
import { registerController } from "../controller/auth.controller";

const router = express.Router();

router.post("/register", registerController);
// router.post("/login", loginController);

export default router;
