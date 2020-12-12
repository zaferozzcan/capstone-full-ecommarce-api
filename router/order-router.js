const express = require("express");
const Orders = require("../models/order-model");

const orderRoute = express.Router;

orderRoute.get("/:user_id", (req, res) => {
  Orders.find({ user_id: req.params.user_id });
});
