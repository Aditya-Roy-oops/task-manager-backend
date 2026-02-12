const pool = require("../config/db");

exports.createLog = async (userId, action) => {
  await pool.query(
    "INSERT INTO logs (user_id, action) VALUES (?, ?)",
    [userId, action]
  );
};
