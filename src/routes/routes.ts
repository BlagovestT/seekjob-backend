import { Router } from "express";
import userRoutes from "./userRoutes";
import jobRoutes from "./jobRoutes";
import authRouts from "./authRouts";

const router = Router();

router.use("/auth", authRouts);
router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);

export default router;
