const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user_id: String,
  user_email: String,
  user_payment: "",
});
