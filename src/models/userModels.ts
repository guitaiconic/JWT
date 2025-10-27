import mongoose, { Schema, Document } from "mongoose";

interface IUsers extends Document {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Users = mongoose.model<IUsers>("users", userSchema);
