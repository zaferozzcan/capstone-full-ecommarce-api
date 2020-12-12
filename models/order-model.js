const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_name: String,
    user_lastname: String,
    user_address: String,
    user_city: String,
    user_zip: String,
    user_state: String,
    user_id: String,
    orders: { Object },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;
