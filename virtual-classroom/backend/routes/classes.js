// routes/classes.js
const express = require("express");
const Class = require("../models/Class");
const router = express.Router();

// Create a class
router.post("/", async (req, res) => {
  const { className, units } = req.body;
  const instructor = req.user.id;

  try {
    const newClass = new Class({
      className,
      units,
      instructor,
    });
    await newClass.save();
    res.json(newClass);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Enroll in a class
router.post("/:id/enroll", async (req, res) => {
  try {
    const classroom = await Class.findById(req.params.id);
    classroom.enrolledStudents.push(req.user.id);
    await classroom.save();
    res.json(classroom);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
