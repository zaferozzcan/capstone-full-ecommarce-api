const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  price: { type: String },
});

const Item = mongoose.Model("Item", itemSchema);

module.exports = Item;
