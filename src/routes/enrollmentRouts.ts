import { Router } from "express";
import { createEnrollment } from "../controllers/EnrollmentController";

const router = Router();

router.post("/", createEnrollment);

export default router;
