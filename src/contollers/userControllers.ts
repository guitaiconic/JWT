import type { createUsersDto } from "../dtos/request/userRequest.js";
import { Users } from "../models/userModels.js";
import { globalResponse } from "../response/globalResponse.js";
import { asyncHandler } from "../utils/errorhandler.js";

export const getAllUsers = asyncHandler(
  async (req: any, res: any, err: any) => {
    const users = await Users.find();
    if (!users) res.status(200).json(globalResponse(null, "Empty data", 200));
    res.status(200).json(globalResponse(users, "Success", 200));
  }
);

// export const getUserById = asyncHandler (async(req: any, res: any) => {
//   //const id = req.query
//   const id = req.params.id;
//   console.log(id);
//   try {
//     const user = await Users.findById(id);
//     if (!user)
//       res.status(400).json(globalResponse(null, "User not found", 400));
//     res.status(200).json(globalResponse(user, "Success", 200));
//   })

// const createUsers = async (req: any, res: any) => {
//   const {username, password}: createUsersDto = req.body;

//   try {
//     if(!crea)
//   } catch (err: any) {
//     return errorHandler(req, res, err);
//   }
// };
