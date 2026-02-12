const jwt = require("jsonwebtoken");
const config = require("../config/jwt");

exports.generateTokens = (userId) => {
  const accessToken = jwt.sign({ id: userId }, config.accessSecret, {
    expiresIn: config.accessExpiry
  });

  const refreshToken = jwt.sign({ id: userId }, config.refreshSecret, {
    expiresIn: config.refreshExpiry
  });

  return { accessToken, refreshToken };
};
