const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true
  },
  firstName: {
    type: String,
    required: true
  },
  lasttName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  diet: {
    type: Array,
    default: []
  }
});

module.exports = { peopleSchema };
