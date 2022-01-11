// Import Student Controller
const StudentController = require("../controllers/StudentController");

// import express
const express = require("express");

// objek router
const router = express.Router();

// routing
router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// Export router
module.exports = router;
