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

//Get enrollments
//GET /enrollments
//Public
export const getAllEnrollments = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const enrollments = await JobsEnrollmentModel.findAll();
    res.status(200).json(enrollments);
  } catch (error) {
    console.error("Error fetching enrollments", error);
    res.status(500).json({ message: "Error fetching enrollments" });
  }
};

//Get enrollments by id
//GET /enrollments/:id
//Public
export const getEnrollmentById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const enrollment = await JobsEnrollmentModel.findByPk(id);

    if (!enrollment)
      return res.status(404).json({ message: "Enrollment not found" });

    res.status(200).json(enrollment);
  } catch (error) {
    console.error("Error fetching enrollment", error);
    res.status(500).json({ message: "Error fetching enrollment" });
  }
};
