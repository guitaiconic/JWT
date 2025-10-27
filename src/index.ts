import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/userRoute.js";

dotenv.config();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017/";

//INITIALIZE MY APP
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the user management API");
});

app.get("/api/healthstatus", (req: any, res: any) => {
  res.status(200).send({ message: "API is running..." });
});
app.use("/api/users", userRoute);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Mongodeb is connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed", err);
  });
