const Joi = require("joi");

exports.validateEmail = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  next();
};

exports.validateTask = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow(""),
    status: Joi.string().valid("pending","in_progress","done")
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  next();
};
