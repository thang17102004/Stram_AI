const express = require("express");
const router = express.Router();
const upload = require("../middlewareUpload/upload");
const { convertController } = require("../controllers/convertController");

router.post("/convert", upload.single("file"), convertController);

module.exports = router;
