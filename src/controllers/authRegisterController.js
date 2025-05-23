const path = require('path');
const db = require('../../db');

exports.getRegisterform = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'))
}

exports.postRegister = (req, res) =>{
  const {email, password} = req.body;
  console.log(email + password);
  db.query('insert into users (email, password) values(?, ?)', [email, password], (err, results) => {
    if (err) return res.send( `
        <h2>Tên đăng nhập đã có vui lòng đăng ký tên khác<h2>
        <p><a href="/register">Đăng ký</a></p>
        <p><a href="/">Đăng nhập</a></p>
        `);

    if (results.length === 0) return res.send('sai tài khoản or mk');

    res.send(`
      <h2>Đăng ký thành công!</h2>
      <p><a href="/">Đăng nhập</a></p>
    `);
  });
}

