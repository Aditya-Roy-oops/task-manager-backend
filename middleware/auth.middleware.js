const jwt = require("jsonwebtoken");
const config = require("../config/jwt");

module.exports = (req, res, next) => {
  try {

    // accept both header cases
    const header =
      req.headers.authorization ||
      req.headers.Authorization ||
      req.get("Authorization");

    if (!header) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decoded = jwt.verify(token, config.accessSecret);

    // attach user properly
    req.user = { id: decoded.id };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
