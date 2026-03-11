import express from "express";
import { createUserByAdmin, login } from "../controllers/login.controller";

const router = express.Router();

router.post("/create", createUserByAdmin);
router.post("/login", login);

export default router;
