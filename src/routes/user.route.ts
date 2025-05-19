import express from "express";
import userController from "../controller/user.controller.ts";
import { authenticate } from "../middlewares/auth.middleware.ts";
const router = express.Router();

router.get("/", authenticate, userController.findAll);

export default router;
