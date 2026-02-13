const pool = require("../config/db");

exports.create = (id, userId, title, description, status) =>
  pool.query(
    "INSERT INTO tasks (id,user_id,title,description,status) VALUES (?,?,?,?,?)",
    [id,userId,title,description,status]
  );

exports.findAllByUser = async (userId) => {
  const result = await pool.query("SELECT * FROM tasks WHERE user_id=?", [userId]);
  return result[0] || result; // works for mysql & mysql2
};


exports.update = (id,userId,title,description,status) =>
  pool.query(
    "UPDATE tasks SET title=?,description=?,status=? WHERE id=? AND user_id=?",
    [title,description,status,id,userId]
  );

exports.remove = (id,userId) =>
  pool.query("DELETE FROM tasks WHERE id=? AND user_id=?", [id,userId]);

