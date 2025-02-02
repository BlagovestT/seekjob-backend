import { Router } from "express";
import { register, login } from "../controllers/AuthController";
import { profile } from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", [AuthMiddleware], profile);

export default router;
