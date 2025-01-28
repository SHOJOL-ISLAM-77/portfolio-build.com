import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UsersSchema: Schema = new Schema({
  userName: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileUrl: { type: String, required: true },
  portfolioId: { type: Schema.Types.ObjectId, ref: "Portfolio", default: null },
  role: { type: String, enum: ["holder"], default: "holder", required: true },
  createdAt: { type: Date, default: Date.now },
  personalUrl: { type: String },
  refreshToken: { type: String },
});

const Users = mongoose.model<IUser>("Users", UsersSchema);
export default Users;
