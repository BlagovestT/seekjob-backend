import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import UserModel from "../models/UserModel";
import { log } from "console";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    console.error("Token not provided");
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };
    const userId = decoded.id;

    if (!userId) {
      console.error("Unauthorized: No userId in token");
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log("Decoded userId from token:", userId);

    const user = await UserModel.findOne({ where: { id: userId } });
    console.log(user);

    if (!user) {
      console.error("User not found for userId:", userId);
      return res.status(401).json({ message: "User not found" });
    }

    req.body.user = user;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
