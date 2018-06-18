const mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  config = require("@config");
const api = {};

api.signup = User => (req, res) => {
  if (req.body.username && req.body.password) {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      clients: []
    });

    newUser.save(error => {
      if (error)
        return res.status(400).json({
          success: false,
          message: "Username already exists"
        });
      const token = jwt.sign({ newUser }, config.secret);
      res.json({
        success: true,
        message: "Account created successfully",
        token
      });
    });
  } else {
    res.json({
      success: false,
      message: "Please, pass a username and password."
    });
  }
};

module.exports = api;
