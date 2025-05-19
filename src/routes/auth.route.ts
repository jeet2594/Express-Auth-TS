import express from "express";
import { authenticate } from "../middlewares/auth.middleware.ts";
import { login, register } from "../controller/auth.controller.ts";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
