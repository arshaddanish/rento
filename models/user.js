const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  regDate: {
    type: Date,
    default: Date.now,
  },
  verDate: {
    type: Date,
  },
  verStatus: {
    type: String,
    default: "Not verified",
  },
  aadharImg: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  mode: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

// verStatus = ["Not verified", "Pending", "Verified", "Rejected"];
