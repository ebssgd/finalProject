const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGODBURL)
  .then(console.log("No, I AM your father"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  return res.status(200).json("Upload completed");
});

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

app.listen("5000", () => {
  console.log("The force is strong with this one.");
});
