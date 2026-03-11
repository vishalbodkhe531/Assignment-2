import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  role: "security" | "manager" | "hr";
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["security", "manager", "hr"],
    required: true,
  },
});

export default mongoose.model<IUser>("User", UserSchema);
