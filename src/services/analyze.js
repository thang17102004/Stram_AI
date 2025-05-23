const fs = require("fs");
const { OpenAI } = require("openai");
const mammoth = require("mammoth");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE,
});

function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", chunk => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}

module.exports = async function analyze(pathToFile) {
  try {
    const stream = fs.createReadStream(pathToFile);
    const buffer = await streamToBuffer(stream);

    // Dùng mammoth để trích xuất nội dung từ buffer của file .docx
    const result = await mammoth.extractRawText({ buffer });
    const content = result.value;

    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-zero:free",
      messages: [{ role: "user", content: `Bằng tiếng việt. Phân tích trích xuất thông tin văn bản theo: số hiệu văn bản, ngày ban hành, Cơ quan ban hành, Loại văn bản, người ký, chức vụ của người ký. Liệt kê theo Form Json của nội dung dưới:\n${content}` }],
    });

    
    console.log("Tóm tắt kết quả:", result);
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Lỗi khi xử lý tóm tắt:", error);
    return "Đã xảy ra lỗi khi tóm tắt nội dung.";
  }
};
