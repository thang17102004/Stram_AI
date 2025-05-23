const exportWord  = require('../services/exportWord');

exports.exportToWord = async (req, res) => {
  try {
    const content = req.body.content;
    const buffer = await exportWord.generateWordBuffer(content);
    res.setHeader("Content-Disposition", "attachment; filename=ketqua.docx");
    res.send(buffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi tạo file Word" });
  }
};