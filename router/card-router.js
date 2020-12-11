const express = require("express");

const cardRouter = express.Router();

cardRouter.get("/test", (req, res) => {
  res.status(200).send("Server is up and running");
});

module.exports = cardRouter;
