const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGODBURL)
  .then(console.log("No, I AM your father"))
  .catch((err) => console.log(err));

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("The force is strong with this one.");
});
