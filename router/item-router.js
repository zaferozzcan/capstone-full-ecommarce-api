const express = require("express");
const Item = require("../models/items-model");

const itemRouter = express.Router();

const today = Date().split(" ")[0];

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

itemRouter.delete("/:id", (req, res) => {
  item.delete({ _id: req.params.id }, (err, data) => {
    if (!err) {
      return res.status(200).send("Item has been deleted!");
    } else {
      return res.status(400).send({ error: err.message });
    }
  });
});
itemRouter.get("/deal", (req, res) => {
  if (today == "Wed") {
    console.log(today);
    Item.find({ category: "electronic" }, (err, data) => {
      if (!err) {
        return res
          .status(200)
          .send(data[Math.floor(Math.random() * data.length - 1)]);
      } else {
        return res.status(400).send({ error: err.message });
      }
    });
  } else {
    res.send("today is not Wednesday");
  }
});

module.exports = itemRouter;
