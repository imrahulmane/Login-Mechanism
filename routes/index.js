const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, Welcome to Login Mechanism.");
});

module.exports = router;
