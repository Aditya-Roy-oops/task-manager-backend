const pool = require("../config/db");

exports.create = async (id, userId, title, description, status) => {
  await pool.query(
    "INSERT INTO tasks (id,user_id,title,description,status) VALUES (?,?,?,?,?)",
    [id, userId, title, description, status]
  );
};

exports.findAllByUser = async (userId) => {
  const [rows] = await pool.query(
    "SELECT * FROM tasks WHERE user_id=? ORDER BY created_at DESC",
    [userId]
  );
  return rows; // <-- IMPORTANT FIX
};

exports.update = async (id, userId, title, description, status) => {
  await pool.query(
    "UPDATE tasks SET title=?,description=?,status=? WHERE id=? AND user_id=?",
    [title, description, status, id, userId]
  );
};

exports.remove = async (id, userId) => {
  await pool.query(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [id, userId]
  );
};
