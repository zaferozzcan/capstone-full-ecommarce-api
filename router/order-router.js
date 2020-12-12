const express = require("express");
const Order = require("../models/order-model");

const orderRouter = express.Router();

orderRouter.get("/:user_id", (req, res) => {
  res.send("user id-->" + req.params.user_id);
});

orderRouter.post("/", (req, res) => {
  Order.create(req.body, (err, data) => {
    if (!err) {
      return res.status(201).send("order has been created");
    } else {
      return err.status(400).json({ error: err.message });
    }
  });
});

module.exports = orderRouter;
