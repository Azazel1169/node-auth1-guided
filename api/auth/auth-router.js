const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const Users = require("../users/users-model.js");

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  const newUser = { username, password: hash };
  // Save the new user to the database
  try {
    const result = await Users.add(newUser);
    res.status(201).json({
      message: `Nice to have you, ${result.username}`,
    });
  } catch (err) {
    next(err);
  }
});
router.post("/login", async (req, res, next) => {
  res.json({ message: "Login Working" });
});
router.get("/logout", async (req, res, next) => {
  res.json({ message: "Logout Working" });
});

module.exports = router;
