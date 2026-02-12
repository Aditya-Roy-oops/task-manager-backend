const pool = require("../config/db");

exports.findUserByEmail = async (email) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email=?", [email]);
  return rows[0];
};

exports.createUser = async (id, email) => {
  await pool.query(
    "INSERT INTO users (id, email, is_verified) VALUES (?, ?, true)",
    [id, email]
  );
};
