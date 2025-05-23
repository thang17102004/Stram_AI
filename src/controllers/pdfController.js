const exportPDF = require('../services/exportPDF');

exports.exportToPdf = (req, res) => {
  const content = req.body.content;
  try {
    exportPDF.generatePdfStream(content, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi tạo file PDF" });
  }
};