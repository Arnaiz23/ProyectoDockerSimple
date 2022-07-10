const mongoose = require("mongoose");

const { Schema } = mongoose;

const People = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("People", People);
