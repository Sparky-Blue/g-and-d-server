const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songsSchema = new Schema({
  title: {
    type: String,
    unique: true,
    lowercase: true
  },
  artist: {
    type: String,
    required: true
  },
  addedBy: {
    type: String
  },
  spotify: {
    type: Boolean,
    default: false
  },
  added: {
    type: Boolean,
    default: false
  }
});

module.exports = { songsSchema };
