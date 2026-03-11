import mongoose, { Schema, Document } from "mongoose";

export interface IVisitor extends Document {
  visitorNumber: string;
  visitorName: string;
  mobile: string;
  contactPerson: string;
  purpose: string;
  numberOfPersons: number;
  vehicleNumber: string;
  visitInTime: string;
  visitOutTime: string;
  totalTimeSpent: string;
  photo?: string;
}

const VisitorSchema: Schema = new Schema(
  {
    visitorNumber: {
      type: String,
      required: true,
    },
    visitorName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    numberOfPersons: {
      type: Number,
      required: true,
    },
    vehicleNumber: {
      type: String,
    },
    visitInTime: {
      type: String,
    },
    visitOutTime: {
      type: String,
    },
    totalTimeSpent: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IVisitor>("Visitor", VisitorSchema);
