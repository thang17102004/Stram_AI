const express = require("express");
const router = express.Router();
const upload = require("../middlewareUpload/upload");
const { analyzeController } = require("../controllers/analyzeController");

router.post("/analyze", (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      // Bắt lỗi multer ở đây
      console.error("Lỗi upload multer:", err);
      return res.status(400).json({ error: "Lỗi khi upload file: " + err.message });
    }
    next(); // nếu không lỗi thì chuyển sang controller
  });
}, analyzeController);

module.exports = router;
