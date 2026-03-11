import { Request, Response } from "express";
import Visitor from "../models/Visitor";

export const createVisitor = async (req: Request, res: Response) => {
  try {
    const visitor = new Visitor(req.body);
    const savedVisitor = await visitor.save();

    res.status(201).json({
      message: "Visitor created successfully",
      data: savedVisitor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating visitor",
      error,
    });
  }
};

export const getVisitors = async (req: Request, res: Response) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 });

    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching visitors",
      error,
    });
  }
};

export const visitorIn = async (req: Request, res: Response) => {
  try {
    const {
      visitorNumber,
      visitorName,
      mobile,
      contactPerson,
      purpose,
      numberOfPersons,
      vehicleNumber,
      visitInTime,
      photo,
    } = req.body;

    const visitor = new Visitor({
      visitorNumber,
      visitorName,
      mobile,
      contactPerson,
      purpose,
      numberOfPersons,
      vehicleNumber,
      visitInTime,
      photo,
    });

    await visitor.save();

    res.status(201).json({
      success: true,
      message: "Visitor entry created",
      data: visitor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating visitor entry",
    });
  }
};
