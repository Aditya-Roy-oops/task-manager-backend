const router = require("express").Router();
const ctrl = require("../controllers/task.controller");
const auth = require("../middleware/auth.middleware");
const { validateTask } = require("../middleware/validate");

router.use(auth);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all user tasks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get("/", ctrl.getTasks);


/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task created
 */
router.post("/", validateTask, ctrl.createTask);


/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update task
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task updated
 */
router.put("/:id", validateTask, ctrl.updateTask);


/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted
 */
router.delete("/:id", ctrl.deleteTask);

module.exports = router;


