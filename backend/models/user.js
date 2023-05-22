const Joi = require("joi");
const Jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 1024,
  },
  role: {
    type: String,
    default: "manager",
    enum: ['manager', 'stakeholder', 'reviewer'],
    lowercase: true
  },
  date: {
    type: Date, default: Date.now
  }
});

userSchema.methods.generateAuthToken = function () {
  const token = Jwt.sign({ _id: this.user._id, role: this.user.role }, "myKey");
  return token;
};
const User = mongoose.model("Users", userSchema);


function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });

  return schema.validate(user);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validateUser = validateUser;
