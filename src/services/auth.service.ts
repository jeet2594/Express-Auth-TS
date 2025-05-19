import { prisma } from "../config/db.ts";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.ts";

export const registerUser = async (
  email: string,
  password: string,
  role: string
) => {
  const hashed = await bcrypt.hash(password, 10);
  const userExist = await prisma.user.findUnique({ where: { email } });
  if (userExist) throw Error("Email Already Exist");
  const user = await prisma.user.create({
    data: { email, password: hashed, role, name: "jeet", lastname: "patel" },
  });

  const token = generateToken(user);
  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Incorrect password");
  const token = generateToken(user);
  return { user, token };
};
