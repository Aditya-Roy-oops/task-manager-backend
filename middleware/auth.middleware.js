const jwt = require("jsonwebtoken");
const config = require("../config/jwt");

module.exports = (req, res, next) => {
  try {
    const header =
      req.headers.authorization ||
      req.headers.Authorization ||
      req.get("Authorization");

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];

    const decoded = jwt.verify(token, config.accessSecret);

    // IMPORTANT: match controller expectation
    req.user = {
      id: decoded.userId || decoded.id,   // supports both payload formats
      email: decoded.email || null
    };

    if (!req.user.id) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
