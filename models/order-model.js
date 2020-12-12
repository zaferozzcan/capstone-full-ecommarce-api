const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: String,
    user_email: String,
    user_address: String,
    user_city: String,
    user_zip: String,
    user_state: String,
    orders: [Object],
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;
