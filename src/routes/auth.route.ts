import express from "express";
import { authenticate } from "../middlewares/auth.middleware.ts";
import { login, register } from "../controller/auth.controller.ts";
import {
  registerValidator,
  validateBody,
} from "../validations/auth.validator.ts";
const router = express.Router();

router.post("/register", validateBody(registerValidator), register);
router.post("/login", login);

export default router;
