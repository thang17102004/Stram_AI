const fs = require("fs");
const path = require("path");
const libre = require("libreoffice-convert");

function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", chunk => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", err => reject(err));
  });
}

module.exports = async function convertDocxToPdf(inputPath) {
  const readStream = fs.createReadStream(inputPath);
  const docxBuf = await streamToBuffer(readStream);

  return new Promise((resolve, reject) => {
    libre.convert(docxBuf, ".pdf", undefined, (err, done) => {
      if (err) {
        return reject(`Conversion error: ${err}`);
      }

      const outputPath = inputPath.replace(/\.docx$/, ".pdf");
      const writeStream = fs.createWriteStream(outputPath);
      writeStream.write(done);
      writeStream.end(() => resolve(outputPath));
    });
  });
};
