const express = require("express");
const Item = require("../models/items-model");

const itemRouter = express.Router();

itemRouter.get("/", (req, res) => {
  Item.find({}, (err, data) => {
    if (!err) {
      return res.status(200).json(data);
    } else {
      return res.status(400).send({ error: err.message });
    }
  });
});

itemRouter.post("/", (req, res) => {
  Item.create(req.body, (err, data) => {
    if (!err) {
      return res.status(201).send(data);
    } else {
      res.status(400).send({ error: err.message });
    }
  });
});

module.exports = itemRouter;
