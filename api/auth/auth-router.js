const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const Users = require("../users/users-model.js");

// Check if user is logged in or registered
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    const newUser = { username, password: hash };
    // Save the new user to the database
    const result = await Users.add(newUser);
    res.status(201).json({
      message: `Nice to have you, ${result.username}`,
    });
  } catch (err) {
    next(err);
  }
});

// Login route
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const [user] = await Users.findBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      res.json({
        message: `Welcome back, ${user.username}`,
      });
    } else {
      next({ status: 401, message: "Invalid credentials" });
    }
  } catch (err) {
    next(err);
  }
});
router.get("/logout", async (req, res, next) => {
  res.json({ message: "Logout Working" });
});

module.exports = router;
