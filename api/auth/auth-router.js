const express = require("express");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  res.json({ message: "Register Working" });
});
router.post("/login", async (req, res, next) => {
  res.json({ message: "Login Working" });
});
router.get("/logout", async (req, res, next) => {
  res.json({ message: "Logout Working" });
});

module.exports = router;
