const express = require("express");
const router = express.Router();

const storeCredentials = require("../storeCredentials");
const authenticateToken = require("../middleware/authToken");

router.get("/user/me", authenticateToken, (req, res) => {
  let details = storeCredentials.loadDetailsInJSON(); // get details from JSON File
  let foundUser = details.find(
    (detail) => detail.username == req.user.username
  ); //check user with username

  return res.status(200).json({
    result: true,
    data: foundUser,
  });
});

module.exports = router;
