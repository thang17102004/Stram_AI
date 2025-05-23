const { Document, Packer, Paragraph, TextRun } = require("docx");

exports.generateWordBuffer = async (content) => {
  const doc = new Document({
    sections: [{
      children: [new Paragraph({ children: [new TextRun(content)] })],
    }],
  });
  return await Packer.toBuffer(doc);
};