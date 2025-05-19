import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service.ts";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const result = await registerUser(email, password, role);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
