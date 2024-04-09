const mongoose = require("mongoose");
const { Schema } = mongoose;
const required = true;
const counterSchema = new Schema({
  createdTime: { type: Date, default: Date.now },
  activeDuration: { type: Number },
  deleteDate: { type: Date },
  timerValue: { type: String, required },
  timerName: { type: String, required },
});

const Counter = mongoose.model("Countdown", counterSchema);

module.exports = Counter;
