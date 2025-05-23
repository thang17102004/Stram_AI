const summarize = require('../services/summarizer');

exports.summarizeController = async (req, res) => {
  try {
    console.log("File upload info:", req.file);
    // const action = req.body.action; // nếu bạn cần action, nhưng ở route này chắc ko cần vì đã rõ summary rồi
    const pathToFile = req.file.path;

    const result = await summarize(pathToFile);
    res.json({ result });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi tóm tắt file" });
  }
};
