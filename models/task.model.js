const pool = require("../config/db");

exports.create = (id, userId, title, description, status) =>
  pool.query(
    "INSERT INTO tasks (id,user_id,title,description,status) VALUES (?,?,?,?,?)",
    [id,userId,title,description,status]
  );

exports.findAllByUser = (userId) =>
  pool.query("SELECT * FROM tasks WHERE user_id=?", [userId]);

exports.update = (id,userId,title,description,status) =>
  pool.query(
    "UPDATE tasks SET title=?,description=?,status=? WHERE id=? AND user_id=?",
    [title,description,status,id,userId]
  );

exports.remove = (id,userId) =>
  pool.query("DELETE FROM tasks WHERE id=? AND user_id=?", [id,userId]);
