const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//TODO: Update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(5.4 + 5.4);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("This is not the account you are looking for.");
  }
});

module.exports = router;

//TODO: Delete
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("User has been deleted.");
      } catch (err) {
        return res.status(500).json(err);
      }
    } catch (err) {
      return res.status(401).json("User not found.");
    }
  } else {
    return res.status(401).json("You can only delete your account.");
  }
});

//TODO: Get User
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...jedi } = user._doc;
    return res.status(200).json(jedi);
  } catch (err) {
    return res.status(500).json(err);
  }
});
