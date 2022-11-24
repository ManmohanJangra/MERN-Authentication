const express = require("express");
const { loginDetail } = require("../models/userSchema");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const login = function (req, res) {
  const { email, password } = req.body;
  const User = new loginDetail({
    username: email,
    password: password,
  });
  passport.authenticate("local", {
    failureFlash: true,
  })(req, res, function (err) {
    if (!err) {
      res.send({ message: "Successfully Logged In" });
    } else {
      res.send({ message: "Incorrect Password" });
    }
  });
};

const registration = (req, res) => {
  const { name, email, password } = req.body;
  loginDetail.register(
    {
      name,
      username: email,
    },
    password,
    (err, user) => {
      if (!err) {
        res.send({ message: "User Registered Successfully" });
      } else {
        res.send(err);
      }
    }
  );
};

module.exports = {
  login,
  registration,
};
