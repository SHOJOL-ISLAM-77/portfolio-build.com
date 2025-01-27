import mongoose from "mongoose";

export interface IUser extends Document {
  _id?: mongoose.Types.ObjectId;
  userName: string;
  fullName: string;
  email: string;
  password: string;
  profileUrl: string;
  portfolioId: mongoose.Types.ObjectId | null;
  role: "holder";
  createdAt: Date;
  personalUrl: string;
}
