import { Router } from "express";
import {
  getAllJobs,
  getJobById,
  updateJobById,
  deleteJobById,
  createJob,
} from "../controllers/JobController";

const router = Router();

router.post("/", createJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.get("/:id", updateJobById);
router.get("/:id", deleteJobById);

export default router;
