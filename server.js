require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe_secret_key = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripe_secret_key);
const cardRouter = require("./router/card-router");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/card", cardRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
