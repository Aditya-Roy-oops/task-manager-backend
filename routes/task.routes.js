const router = require("express").Router();
const ctrl = require("../controllers/task.controller");
const auth = require("../middleware/auth.middleware");
const { validateTask } = require("../middleware/validate");

router.use(auth);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get user tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */
router.get("/", ctrl.getTasks);


/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Learn Backend
 *               description:
 *                 type: string
 *                 example: Practice assignment
 *               status:
 *                 type: string
 *                 example: pending
 */
router.post("/", validateTask, ctrl.createTask);


/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
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
 */
router.put("/:id", validateTask, ctrl.updateTask);


/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete("/:id", ctrl.deleteTask);

module.exports = router;
