import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
const JWTSECRET = process.env.JWT_SECRET ?? "g!fbV_%UEOwzTRv";

interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ status: false, message: "Token Required" });
    return;
  }
  try {
    const decode = jwt.verify(token, JWTSECRET);
    req.user = decode;
    next();
  } catch (error: any) {
    res
      .status(403)
      .json({ status: false, message: "Invalid token", error: error.message });
    return;
  }
};
