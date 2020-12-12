const express = require("express");
const Order = require("../models/order-model");

const orderRouter = express.Router();

orderRouter.get("/:user_id", (req, res) => {
  res.send("user id-->" + req.params.user_id);
});

module.exports = orderRouter;
