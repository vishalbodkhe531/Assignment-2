import mongoose, { Schema, Document } from "mongoose";

export interface IVisitor extends Document {
  visitorNumber: string;
  visitorName: string;
  mobile: string;
  purpose: string;
  contactPerson: string;
  persons: number;
  vehicleNumber: string;
  checkInTime: Date;
  checkOutTime: Date;
}

const VisitorSchema: Schema = new Schema({
  visitorNumber: String,
  visitorName: String,
  mobile: String,
  purpose: String,
  contactPerson: String,
  persons: Number,
  vehicleNumber: String,

  checkInTime: {
    type: Date,
    default: Date.now,
  },

  checkOutTime: Date,
});

export default mongoose.model<IVisitor>("Visitor", VisitorSchema);
