const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user_id: String,
  user_email: String,
  user_address: String,
  user_payment: "",
});

const User = mongoose.model("User", userSchema);

module.exports = User;
