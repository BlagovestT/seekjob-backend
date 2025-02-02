import { Request, Response } from "express";
import JobModel from "../models/JobModel";

// Create job
//POST /jobs
//Public
export const createJob = async (req: Request, res: Response): Promise<any> => {
  try {
    const {
      user_id,
      title,
      description,
      location,
      employment_type,
      min_experience,
      keywords,
    } = req.body;

    if (
      !user_id ||
      !title ||
      !description ||
      !location ||
      !employment_type ||
      !min_experience ||
      !keywords
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newJob = await JobModel.create({
      user_id,
      title,
      description,
      location,
      employment_type,
      min_experience,
      keywords,
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error creating job", error);
    res.status(500).json({ message: "Error creating job" });
  }
};

// Get all jobs
// GET /jobs
// Public
export const getAllJobs = async (req: Request, res: Response): Promise<any> => {
  try {
    const jobs = await JobModel.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs", error);
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

//Get job by id
// GET /jobs/:id
// Public
export const getJobById = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const job = await JobModel.findByPk(id);

    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    console.error("Error fetching jobs", error);
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

// Update job by id
// PUT /jobs/:id
// Public
export const updateJobById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      location,
      employment_type,
      min_experience,
      keywords,
    } = req.body;

    const job = await JobModel.findByPk(id);

    if (!job) return res.status(404).json({ message: "job not found" });

    await job.update({
      title,
      description,
      location,
      employment_type,
      min_experience,
      keywords,
    });

    res.status(200).json(job);
  } catch (error) {
    console.error("Error updating job", error);
    res.status(500).json({ message: "Error updating job" });
  }
};

// Delete job by id
// DELETE /jobs/:id
// Public
export const deleteJobById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const job = await JobModel.findByPk(id);

    if (!job) return res.status(404).json({ message: "job not found" });

    await job.destroy();

    res.status(200).json({ message: "job deleted" });
  } catch (error) {
    console.error("Error deleting job", error);
    res.status(500).json({ message: "Error deleting job" });
  }
};
