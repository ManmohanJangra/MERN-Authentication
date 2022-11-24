const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [20, "Name must be at most 20 characters long"],
  },
  username: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    minlength: [3, "Password must be at least 3 characters long"],
  },
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const loginDetail = mongoose.model("userSchema", userSchema);

module.exports = {
  loginDetail,
};
