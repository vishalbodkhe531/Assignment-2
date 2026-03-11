import express from "express";
import {
  createVisitor,
  getVisitors,
  visitorIn,
} from "../controllers/visitor.controller";

const router = express.Router();

router.post("/create-visitor", createVisitor);
router.get("/get-visitors", getVisitors);
router.post("/visitor-in", visitorIn);

export default router;
