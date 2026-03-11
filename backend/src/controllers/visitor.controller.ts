import { Request, Response } from "express";
import Visitor from "../models/Visitor";

export const createVisitor = async (req: Request, res: Response) => {
  try {
    const visitor = new Visitor(req.body);

    await visitor.save();

    res.json(visitor);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getVisitors = async (req: Request, res: Response) => {
  try {
    const visitors = await Visitor.find();

    res.json(visitors);
  } catch (err) {
    res.status(500).json(err);
  }
};
