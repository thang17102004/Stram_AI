const path = require('path');
const db = require('../../db');

exports.getLoginForm = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  console.log(email + password);
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) return res.send('Lỗi khi truy vấn CSDL');

    if (results.length === 0) {
      return res.redirect("/login.html?error=1");
    }
    
    // Đăng nhập thành công
    else
      return res.redirect("/dashboard");
    });
};