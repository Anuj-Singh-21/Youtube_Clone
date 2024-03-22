import Express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = Express.Router();

// Create User
router.post("/signup", signup);
// SignIn
router.post("/signin", signin);
// GoogleAuth
router.post("/google");

export default router;
