const rateLimit = require("express-rate-limit");

exports.authLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: { message: "Too many OTP requests. Try later." }
});

exports.apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60
});
