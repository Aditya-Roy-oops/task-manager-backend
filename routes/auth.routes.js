/**
 * @swagger
 * /auth/request-otp:
 *   post:
 *     summary: Request OTP
 *     tags: [Auth]
 */

const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/request-otp", authController.requestOTP);
/**
 * @swagger
 * /auth/verify-otp:
 *   post:
 *     summary: Verify OTP and login
 *     tags: [Auth]
 */
router.post("/verify-otp", authController.verifyOTP);

module.exports = router;
