import { getUsers } from "../services/user.service.ts";
import { NextFunction, Request, Response } from "express";

const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const users = await getUsers();
  res.json({ status: true, users });
  return;
};

export default {
  findAll,
};
