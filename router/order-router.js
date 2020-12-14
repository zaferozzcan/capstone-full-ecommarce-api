const express = require("express");
const Order = require("../models/order-model");

const orderRouter = express.Router();

orderRouter.get("/:user_id", (req, res) => {
  Order.find({ user_id: req.params.user_id }, (err, data) => {
    if (!err) {
      //   console.log("data", data);
      return res.status(200).send(data);
    } else {
      return res
        .status(400)
        .send(
          "There is an error in finding order with user_id",
          req.params.user_id,
          "error: ",
          err
        );
    }
  });
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
