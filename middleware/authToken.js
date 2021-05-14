const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(400).json({
      result: false,
      message: "Please provide a JWT token",
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(400).json({
        result: false,
        message: "JWT Verification failed",
      });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
