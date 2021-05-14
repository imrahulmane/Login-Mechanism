const express = require("express");
const router = express.Router();

const storeCredentials = require("../storeCredentials");
const managePasswords = require("../passwordManage");

router.post("/signin", (req, res) => {
  username = req.body.username;
  password = req.body.password;

  let details = storeCredentials.loadDetailsInJSON(); // get details from JSON File
  let foundUser = details.find((detail) => detail.username == username); //check user with username
  if (foundUser) {
    let passwordMatch = managePasswords.decryptPassword(
      password,
      foundUser.salt,
      foundUser.password
    );
    if (passwordMatch) {
      let payloadParameters = {
        username: username,
        firstname: foundUser.firstName,
      };
      const accessToken = jwt.sign(
        payloadParameters,
        process.env.ACCESS_TOKEN_SECRET
      );

      res.status(200).send({
        result: true,
        jwt: accessToken,
        message: "signin success",
      });
    } else {
      res.status(401).send({
        result: false,
        message: "Password does not match!",
      });
    }
  } else {
    res.status(401).send({
      result: false,
      message: "Username not found!",
    });
  }
});

module.exports = router;
