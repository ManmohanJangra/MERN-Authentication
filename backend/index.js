const express = require("express");
require("./database/connection");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { loginDetail } = require("./models/userSchema");
const web = require("./routes/routes");
const multer = require("multer");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// DATABASAE CONNECTION USED HERE

app.use(passport.initialize());
app.use(
  passport.session({
    name: "Manmohan",
  })
);

// USER SCHEMA . JS USED HERE

passport.use(loginDetail.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use("/", web);

app.listen(port, (req, res) => {
  console.log(`Server started on port`);
});
