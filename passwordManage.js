const crypto = require("crypto");

function encryptPassword(password) {
  let salt = crypto.randomBytes(16).toString("hex");
  let hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "SHA256")
    .toString("hex");

  return [hash, salt];
}

function decryptPassword(password, salt, hash) {
  let calculatedHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "SHA256")
    .toString("hex");

  return calculatedHash === hash;
}

module.exports = { encryptPassword, decryptPassword };
