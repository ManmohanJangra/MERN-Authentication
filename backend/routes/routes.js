const express = require("express");
const app = express.Router();
const loginController = require("../controller/controller");
const passport = require("passport");

app.post("/login", loginController.login);
app.post("/register", loginController.registration);

module.exports = app;
