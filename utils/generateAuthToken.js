const jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
  const jwtSecretKey = "thisissecret";
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    jwtSecretKey
  );

  return token;
};

module.exports = generateAuthToken;
