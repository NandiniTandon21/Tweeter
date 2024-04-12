const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});

const tweetSchema = Joi.object({
  text: Joi.string().max(280).required(),
});

const validate = (schema, data) => {
  const { error } = schema.validate(data);
  if (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  userSchema,
  tweetSchema,
  validate,
};