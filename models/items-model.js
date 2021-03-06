const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  price: { type: Number },
  category: { type: String },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
