const express = require("express");
const router = express.Router();

const storeCredentials = require("../storeCredentials");
const validation = require("../validation/validation");
const managePasswords = require("../passwordManage");

router.post("/signup", (req, res) => {
  let userName = req.body.username;
  let firstName = req.body.firstname;
  let lastName = req.body.lastname;
  let password = req.body.password;

  //check for valid username
  if (validation.validateUsername(userName)) {
    return res
      .status(400)
      .send(
        "Please provide proper username. Username should consist only lowercase characters and should be more than 4 characters."
      );
  }

  //check for valid firstname and lastname
  if (validation.validateName(firstName) || validation.validateName(lastName)) {
    return res
      .status(400)
      .send(
        "Please provide valid name. A valid Name should contains only characters."
      );
  }
  //check for valid password
  if (validation.validatePassword(password)) {
    return res
      .status(400)
      .send(
        "Please provide proper password. A proper password should be, More than 5 characters, should  have atleast one lowercase, one uppercase & one number"
      );
  }

  const [HashedPassword, salt] = managePasswords.encryptPassword(password);
  let data = {
    username: userName,
    firstName: firstName,
    lastName: lastName,
    password: HashedPassword,
    salt: salt,
  };

  if (storeCredentials.saveDetails(data)) {
    res.status(200).send({
      result: true,
      message: "SignUp success. Please proceed to Signin",
    });
  } else {
    res.status(404).send("UserName already Exists");
  }
});

module.exports = router;
