import { Router } from "express";
import userRoutes from "./userRoutes";
import jobRoutes from "./jobRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);

export default router;
