const validation = require("./validationHelper");

function validateUsername(userName) {
  if (
    userName.length < 4 ||
    validation.hasNumber(userName) ||
    validation.hasCapital(userName) ||
    validation.hasSpecialCharacters(userName)
  ) {
    return true;
  }
}

function validateName(name) {
  if (validation.hasNumber(name) || validation.hasSpecialCharacters(name)) {
    return true;
  }
}

function validatePassword(password) {
  if (
    password.length < 6 ||
    !validation.hasNumber(password) ||
    !validation.hasCapital(password) ||
    !validation.hasLower(password) ||
    validation.hasSpecialCharacters(password)
  ) {
    return true;
  }
}

module.exports = { validateName, validatePassword, validateUsername };
