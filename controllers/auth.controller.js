const { createOTP, verifyOTP } = require("../services/otp.service");
const { generateTokens } = require("../services/token.service");
const userModel = require("../models/user.model");
const sendOTP = require("../utils/sendMail");
const { v4: uuidv4 } = require("uuid");

exports.requestOTP = async (req, res, next) => {
  try {
    const { email } = req.body;

    const otp = await createOTP(email);
    await sendOTP(email, otp);

    if (process.env.NODE_ENV !== "production") {
      return res.json({ message: "OTP generated (dev mode)", otp });
    }

    res.json({ message: "OTP sent to email" });
  } catch (err) {
    next(err);
  }
};


exports.verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const valid = await verifyOTP(email, otp);
    if (!valid) return res.status(400).json({ message: "Invalid OTP" });

    let user = await userModel.findUserByEmail(email);

    if (!user) {
      const id = uuidv4();
      await userModel.createUser(id, email);
      user = { id, email };
    }

    const tokens = generateTokens(user.id);

    res.json({
      message: "Login successful",
      userId: user.id,
      ...tokens
    });

  } catch (err) {
    next(err);
  }
};
