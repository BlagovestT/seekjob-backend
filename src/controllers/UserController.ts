import { Request, Response } from "express";
import UserModel from "../models/UserModel";

// Get all users
// GET /users
// Public
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Get user by id
// GET /users/:id
// Public
export const getUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByPk(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user", error);
    res.status(500).json({ message: "Error fetching user" });
  }
};

// Update user by id
// PUT /users/:id
// Public
export const updateUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email } = req.body;

    const user = await UserModel.findByPk(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    await user.update({ first_name, last_name, email });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user", error);
    res.status(500).json({ message: "Error updating user" });
  }
};

// Delete user by id
// DELETE /users/:id
// Public
export const deleteUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByPk(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    await user.destroy();

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(500).json({ message: "Error deleting user" });
  }
};
