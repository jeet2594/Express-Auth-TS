import { prisma } from "../config/db.ts";

export const getUsers = async () => {
  return await prisma.user.findMany({ omit: { password: true } });
};
