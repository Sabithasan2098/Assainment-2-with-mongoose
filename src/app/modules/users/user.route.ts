import express from "express";
import {
  createUser,
  getSpecificUsers,
  getUsers,
  getAllUsers,
  getTopRatingBook,
} from "./user.controller";
const router = express.Router();

router.post("/postUsers", createUser);
router.get("/getAllUsers", getAllUsers);
router.get("/getUsers", getUsers);
router.get("/getSpecificAllUsers", getSpecificUsers);
router.get("/getTopRatingBook", getTopRatingBook);

export default router;
