import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import userRoutes from "./app/modules/users/user.route";
const app: Application = express();
// using middleWare cors----------------//
app.use(cors());

// other middleware---------------------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
