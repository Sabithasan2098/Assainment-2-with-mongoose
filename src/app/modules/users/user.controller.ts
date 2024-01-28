import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getAllUserToDB,
  getSpecificUserToDB,
  getTopRatingBookToDB,
  getUserToDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAllUserToDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUserToDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getSpecificUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getSpecificUserToDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getTopRatingBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getTopRatingBookToDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};
