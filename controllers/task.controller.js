const { v4: uuidv4 } = require("uuid");
const taskModel = require("../models/task.model");
const logAction = require("../utils/logger");

// helper to safely get user id
const getUserId = (req) => {
  if (!req.user || !req.user.id) {
    throw new Error("User not authenticated properly");
  }
  return req.user.id;
};


exports.createTask = async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const id = uuidv4();
    const { title, description, status = "pending" } = req.body;

    await taskModel.create(id, userId, title, description, status);
    await logAction(userId, "TASK_CREATED");

    res.json({ message: "Task created", id });
  } catch (err) {
    next(err);
  }
};


exports.getTasks = async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const rows = await taskModel.findAllByUser(userId);

    res.json(rows);
  } catch (err) {
    next(err);
  }
};


exports.updateTask = async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const { title, description, status } = req.body;

    await taskModel.update(req.params.id, userId, title, description, status);
    await logAction(userId, "TASK_UPDATED");

    res.json({ message: "Task updated" });
  } catch (err) {
    next(err);
  }
};


exports.deleteTask = async (req, res, next) => {
  try {
    const userId = getUserId(req);

    await taskModel.remove(req.params.id, userId);
    await logAction(userId, "TASK_DELETED");

    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};

