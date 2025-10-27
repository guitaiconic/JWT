import express from "express";
import { getAllUsers, getUserById } from "../contollers/userControllers.js";

const router = express.Router();

//Get ALL USERS CONTROLLER
router.get("/", getAllUsers);

// //GET ALL USERS BY ID CONTROLLER
router.get("/:id", getUserById);

// //CREATE USERS CONTROLLER
router.post("/", createUsers);

// //UPDATE USERS COTROLLER
// router.put("/:id", updateUsers);

// //DELETE USERS CONTROLLER
// router.delete("/", deleteAllUsers);

//EXPORT ROUTERS
export default router;
