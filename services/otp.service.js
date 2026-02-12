const pool = require("../config/db");

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

exports.createOTP = async (email) => {
  const otp = generateOTP();
  const expires = new Date(Date.now() + 5 * 60 * 1000);

  await pool.query("DELETE FROM otps WHERE email=?", [email]);

  await pool.query(
    "INSERT INTO otps (email, otp, expires_at) VALUES (?, ?, ?)",
    [email, otp, expires]
  );

  return otp;
};

exports.verifyOTP = async (email, otp) => {
  const [rows] = await pool.query(
    "SELECT * FROM otps WHERE email=? AND otp=?",
    [email, otp]
  );

  if (!rows.length) return false;
  if (new Date(rows[0].expires_at) < new Date()) return false;

  await pool.query("DELETE FROM otps WHERE email=?", [email]);
  return true;
};
