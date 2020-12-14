const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  order_id: { String },
  title: { type: String },
  image: { type: String },
  price: { type: String },
});

const orderSchema = new mongoose.Schema(
  {
    user_id: String,
    user_email: String,
    user_addres: String,
    // user_city: String,
    // user_zip: String,
    // user_state: String,
    orders: [orderItemSchema],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
