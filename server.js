require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe_secret_key = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripe_secret_key);

const app = express();
const db = mongoose.connection;
const PORT = process.env.PORT;
const mongoURI = process.env.MONGODB_URI;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("👉🏼The connection with mongod is established🤟🏼🎼");
  }
);
// database error checks
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));
const cardRouter = require("./router/card-router");
const orderRouter = require("./router/order-router.js");
app.use("/card", cardRouter);
app.use("/order", orderRouter);

app.listen(5000, () => {
  console.log("PORT", PORT);
});
