import { Router } from "express";
import {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
} from "../controllers/EnrollmentController";

const router = Router();

router.post("/", createEnrollment);
router.get("/", getAllEnrollments);
router.get("/:id", getEnrollmentById);

export default router;
