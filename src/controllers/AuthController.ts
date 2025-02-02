import { Request, Response } from "express";
import { hash, compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import UserModel from "../models/UserModel";

export const register = async (req: any, res: any) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await UserModel.findOne({ where: { email } });

    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await hash(password, 10);

    await UserModel.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
};

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    });

    res.status(200).json({ user: user, token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
};
