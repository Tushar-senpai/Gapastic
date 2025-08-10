import express from "express";  
import { signup, login, logout, updateProfile } from "../controllers/auth.contoller.js";
const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.post("/signup", signup);

router.put("/update-profile", updateProfile);
export default router;