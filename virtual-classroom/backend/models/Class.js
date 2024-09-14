// models/Class.js
const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  className: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  units: [
    {
      title: String,
      sessions: [
        {
          title: String,
          content: String,  // Could be text, video URL, etc.
        },
      ],
    },
  ],
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Class", ClassSchema);
