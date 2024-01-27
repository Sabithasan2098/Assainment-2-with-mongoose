import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
const app: Application = express();
// using middleWare cors----------------//
app.use(cors());

// other middleware---------------------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //  interface---------------------------//
  interface IUser {
    title: string;
    author: string[];
    genre: string;
    publicationYear: number;
    publisher: { name: string; location: string };
    reviews: { user: string; comment: string }[];
    rating: number;
    price: string;
  }

  //   schema-------------------------------//
  const userSchema = new Schema<IUser>({
    title: { type: String, required: true },
    author: { type: [String], required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: {
      name: { type: String, required: true },
      location: { type: String, required: true },
    },

    reviews: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
      },
    ],
    rating: { type: Number, required: true },
    price: { type: String, required: true },
  });

  //   model-----------------------------------//
  const User = model<IUser>("User", userSchema);
  const createUserToDB = async () => {
    const user = new User({
      title: "Book 1",
      author: ["author 1", "author 2"],
      genre: "Mystery",
      publicationYear: 2020,
      publisher: { name: "publisher A", location: "city A" },
      reviews: [
        { user: "user 1", comment: "Great book" },
        { user: "user 2", comment: "Interesting plot" },
      ],
      rating: 4.5,
      price: "90",
    });
    await user.save();
    console.log(user);
    res.send(user);
  };
  createUserToDB();
});

export default app;
