// uploadMiddleware.js
const multer = require('multer');

// Khai báo nơi lưu file
const upload = multer({ dest: 'uploads/' });

module.exports = upload;