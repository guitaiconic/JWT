import type { createUsersDto } from "../dtos/request/userRequest.js";
import { Users } from "../models/userModels.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// GET all users
export const getAllUsers = asyncHandler(async (req: any, res: any) => {
  const users = await Users.find();

  if (!users || users.length === 0) {
    const err = new Error("No users found");
    (err as any).statusCode = 404;
    throw err;
  }

  return res.status(200).json({
    statusCode: 200,
    message: "Success",
    data: users,
  });
});

// GET user by ID
export const getUserById = asyncHandler(async (req: any, res: any) => {
  const id = req.params.id;
  const user = await Users.findById(id);

  if (!user) {
    const err = new Error("User not found");
    (err as any).statusCode = 404;
    throw err;
  }

  return res.status(200).json({
    statusCode: 200,
    message: "Success",
    data: user,
  });
});

// CREATE user
export const createUser = asyncHandler(async (req: any, res: any) => {
  const { username, password }: createUsersDto = req.body;

  if (!username || !password) {
    const err = new Error("Missing fields");
    (err as any).statusCode = 400;
    throw err;
  }

  const newUser = await Users.create({ username, password });

  return res.status(201).json({
    statusCode: 201,
    message: "User created",
    data: newUser,
  });
});
