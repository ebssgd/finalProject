const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//TODO: Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(5.4 + 5.4);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//TODO: Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Invalid input");
    }

    const validate = await bcrypt.compare(req.body.pass, user.password);
    if (!validate) {
      res.status(400).json("Invalid input");
    }

    const { password, ...sith } = user._doc;
    res.status(200).json(sith);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
