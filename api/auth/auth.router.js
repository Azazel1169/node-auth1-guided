const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const Users = require("../users/users-model.js");

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const salt = 12;
    const hash = bcrypt.hashSync(password, salt);
    const newUser = {
      username,
      password: hash,
    };
    const result = await Users.add(newUser);
    res.status(201).json({
      message: `User ${result.username} created successfully`,
      userId: result.id,
      username: result.username,
    });
  } catch (error) {
    next(error);
  }
});
router.post("/login", async (req, res, next) => {
  res.send({
    message: "Login Working",
  });
});
router.get("/logout", async (req, res, next) => {
  res.send({
    message: "Logout Working",
  });
});

module.exports = router;
