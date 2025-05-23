const express = require("express");
const router = express.Router();
const exportToPdf = require("../controllers/pdfController");

router.post("/exportPdf", exportToPdf.exportToPdf);

module.exports = router;