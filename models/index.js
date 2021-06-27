const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercises: [
      {
          type: String,
          name: String,
          duration: Number,
          weight: Number,
          reps: Number,
          sets: Number,
          distance: Number,
      },
  ],
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;