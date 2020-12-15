const express = require("express");

const socketRouter = express.Router();

socketRouter.get("/", (req, res) => {
  res.send("Server is up and running");
});

module.exports = socketRouter;
