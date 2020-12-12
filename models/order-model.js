const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: String,
    user_email: String,
    user_address: String,
    user_city: String,
    user_zip: String,
    user_state: String,
    orders: [],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
