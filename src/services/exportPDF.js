const PDFDocument = require("pdfkit");

exports.generatePdfStream = (content, res) => {
  const doc = new PDFDocument();
  res.setHeader("Content-Disposition", "attachment; filename=ketqua.pdf");
  res.setHeader("Content-Type", "application/pdf");
  doc.pipe(res);
  doc.font("Times-Roman").fontSize(12).text(content, { align: "left", lineGap: 4 });
  doc.end();
};
