const express = require("express");
require("dotenv").config();
const stripe_secret_key = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripe_secret_key);
const cardRouter = express.Router();

cardRouter.get("/test", (req, res) => {
  res.status(200).send("Server is up and running");
});

cardRouter.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment total", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = cardRouter;
