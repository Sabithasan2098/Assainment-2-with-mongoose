import User from "./user.schema&model";

export const createUserToDB = async () => {
  const user = await new User({
    title: "Book 2",
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
};

export const getAllUserToDB = async () => {
  try {
    const users = await User.find();
    return { status: 200, users };
  } catch (error) {
    console.log(error);
    throw new Error("This error from database");
  }
};

export const getUserToDB = async () => {
  try {
    const users = await User.aggregate([
      {
        $match: { genre: "Fantasy" },
      },
    ]);
    return { status: 200, users };
  } catch (error) {
    console.log(error);
    throw new Error("This error from database");
  }
};

export const getSpecificUserToDB = async () => {
  try {
    const users = await User.aggregate([
      {
        $match: {
          $and: [{ genre: "Sci-Fi" }, { "publisher.name": "Roli Books" }],
        },
      },
    ]);
    return { status: 200, users };
  } catch (error) {
    console.log(error);
    throw new Error("This error from database");
  }
};

export const getTopRatingBookToDB = async () => {
  try {
    const books = await User.aggregate([
      {
        $match: {
          $or: [
            { rating: { $gte: 4.5 } },
            { $and: [{ rating: { $gte: 4.0 } }, { rating: { $lt: 4.5 } }] },
          ],
        },
      },
      {
        $addFields: {
          featured: {
            $cond: {
              if: { $gte: ["$rating", 4.5] },
              then: "BestSeller",
              else: "Popular",
            },
          },
        },
      },
    ]);
    return { status: 200, books };
  } catch (error) {
    console.log(error);
    throw new Error("Error from the database");
  }
};
