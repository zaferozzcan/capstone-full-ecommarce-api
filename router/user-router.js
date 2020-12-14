const express = require("express");
const User = require("../models/user-model");

const userRouter = express.Router();

userRouter.get("/all", (req, res) => {
  User.find({}, (err, data) => {
    if (!err) {
      res.status(200).send(data);
    }
  });
});

userRouter.post("/", (req, res) => {
  if (User.find({ user_email: req.body.user_email })) return;
  User.create(req.body, (err, data) => {
    if (!err) {
      res.status(201).json(data);
    } else {
      res.status(400).json(err);
      console.log("err in when creating user");
    }
  });
});

// userRouter.put("/order", (req, res) => {
//   const { user_email, user_id, user_address } = req.body;
//   User.findOneAndUpdate(
//     { user_email: user_email },
//     { user_id: user_id, user_address: user_address },
//     (err, data) => {
//       if (!err) {
//         return res.status(200).send(data);
//       } else {
//         res.status(400).json({ err: err.message });
//       }
//     }
//   );
// });

module.exports = userRouter;
