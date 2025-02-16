import { Router } from "express";
import userRoutes from "./userRoutes";
import jobRoutes from "./jobRoutes";
import authRouts from "./authRouts";
import enrollmentRouts from "./enrollmentRouts";

const router = Router();

router.use("/auth", authRouts);
router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);
router.use("/enrollments", enrollmentRouts);

export default router;
