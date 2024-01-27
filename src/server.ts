const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// database connection------------------//

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    console.log("database connection successful");
  } catch {
    console.log("failed to connect");
  }
}
main();

// -------------------------------------//

app.get("/", (req, res) => {
  res.send("My mongoose server is running now");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
