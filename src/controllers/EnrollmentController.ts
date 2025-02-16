import { Request, Response } from "express";
import JobsEnrollmentModel from "../models/JobsEnrollmentModel";

//Create enrollments
//POST /enrollments
//Public
export const createEnrollment = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { job_id, user_id } = req.body;

    if (!job_id || !user_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEnrollment = await JobsEnrollmentModel.create({
      job_id,
      user_id,
    });
    res.status(201).json(newEnrollment);
  } catch (error) {
    console.error("Error with enrollment", error);
    res.status(500).json({ message: "Error creating enrollment" });
  }
};
