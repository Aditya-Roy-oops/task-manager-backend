const rateLimit = require("express-rate-limit");

const skipDocs = (req) => {
  return req.path.startsWith("/docs") || req.path.startsWith("/api-docs");
};

exports.authLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 50, // was 5 (too strict for testing)
  skip: skipDocs,
  message: { message: "Too many OTP requests. Try later." }
});

exports.apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 300, // was 60 (swagger bursts)
  skip: skipDocs
});
