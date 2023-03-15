const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. Not authorized...");
  try {
    const jwtSecretKey = "thisissecret";
    const decoded = jwt.verify(token, jwtSecretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).send("Invalid auth token...");
  }
}

module.exports = auth;
