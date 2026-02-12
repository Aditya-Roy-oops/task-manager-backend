/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get user tasks
 *     tags: [Tasks]
 */
const router = require("express").Router();
const ctrl = require("../controllers/task.controller");
const auth = require("../middleware/auth.middleware");
const {validateTask} = require("../middleware/validate");

router.use(auth);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create task
 *     tags: [Tasks]
 */
router.post("/",validateTask,ctrl.createTask);
router.get("/",ctrl.getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 */
router.put("/:id",validateTask,ctrl.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags: [Tasks]
 */
router.delete("/:id",ctrl.deleteTask);

module.exports = router;
