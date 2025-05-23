const express = require("express");
const router = express.Router();
const upload = require("../middlewareUpload/upload");
const { summarizeController } = require("../controllers/summaryController");

router.post("/summary", (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      // Bắt lỗi multer ở đây
      console.error("Lỗi upload multer:", err);
      return res.status(400).json({ error: "Lỗi khi upload file: " + err.message });
    }
    next(); // nếu không lỗi thì chuyển sang controller
  });
}, summarizeController);

module.exports = router;
