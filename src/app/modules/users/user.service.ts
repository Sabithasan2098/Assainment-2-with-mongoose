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
