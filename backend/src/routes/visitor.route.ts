import express from "express";
import { createVisitor, getVisitors } from "../controllers/visitor.controller";

const router = express.Router();

router.post("/create-visitor", createVisitor);
router.get("/get-visitors", getVisitors);

export default router;
