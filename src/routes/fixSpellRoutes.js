const express = require("express");
const router = express.Router();
const upload = require("../middlewareUpload/upload");
const { fixSpellController } = require("../controllers/fixSpellController");

router.post("/fixSpell", (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      // Bắt lỗi multer ở đây
      console.error("Lỗi upload multer:", err);
      return res.status(400).json({ error: "Lỗi khi upload file: " + err.message });
    }
    next(); // nếu không lỗi thì chuyển sang controller
  });
}, fixSpellController);

module.exports = router;
