import express from "express";
import { createVisitor, getVisitors } from "../controllers/visitor.controller";

const visitorRouter = express.Router();

visitorRouter.post("/create", createVisitor);

visitorRouter.get("/all", getVisitors);

export default visitorRouter;
