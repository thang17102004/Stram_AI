const convertDocxToPdf = require('../services/convert');

exports.convertController = async (req, res) => {
  try {
    console.log("File upload info:", req.file);
    // const action = req.body.action; // nếu bạn cần action, nhưng ở route này chắc ko cần vì đã rõ summary rồi
    const pathToFile = req.file.path;

    const result = await convertDocxToPdf(pathToFile);
    res.download(result, "output.pdf");

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi tóm tắt file" });
  }
};
