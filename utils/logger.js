const pool = require("../config/db");

async function logAction(userId, action) {
  try {
    await pool.query(
      "INSERT INTO logs (user_id, action) VALUES (?, ?)",
      [userId, action]
    );
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}

module.exports = logAction;
