const express = require("express");
const User = require("../models/user-model");

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  User.create(req.body, (err, data) => {
    if (!err) {
      res.status(201).json(data);
    } else {
      res.status(400).json(err);
      console.log("err in when creating user");
    }
  });
});

module.exports = userRouter;
