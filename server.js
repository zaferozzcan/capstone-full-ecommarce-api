require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const socketio = require("socket.io");

const stripe_secret_key = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripe_secret_key);

const app = express();
// web socket initialization
var server = require("http").createServer(app);
const io = socketio(server); // referenced from https://github.com/socketio/chat-example.git
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
const userRouter = require("./router/user-router.js");
const socketRouter = require("./router/socket-router.js");
app.use("/card", cardRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/help", socketRouter);

server.listen(PORT || 5000, () => {
  console.log("Server is running on port", PORT);
});
