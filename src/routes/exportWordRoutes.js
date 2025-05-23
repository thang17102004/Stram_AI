const express = require("express");
const router = express.Router();
const wordController = require("../controllers/wordController");

router.post("/exportWord", wordController.exportToWord);

module.exports = router;