function hasNumber(myString) {
  return /\d/.test(myString);
}

function hasCapital(word) {
  return /[A-Z]/.test(word);
}

function hasLower(word) {
  return /[a-z]/.test(word);
}

function hasSpecialCharacters(string) {
  let specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialCharacters.test(string);
}

module.exports = { hasNumber, hasCapital, hasLower, hasSpecialCharacters };
