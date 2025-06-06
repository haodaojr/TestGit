const express = require('express');
const app = express();

// Trang chủ
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
    <p>Chào mừng bạn đến với trang chủ!</p>
    <a href="/about" style="color: blue; text-decoration: none;"><strong>Vào trang About</strong></a><br>
    <a href="/contact" style="color: green; text-decoration: none;"><strong>Vào trang Liên hệ</strong></a>
  `);
});

// Trang about
app.get('/about', (req, res) => {
  res.send(`
    <h1>Trang Giới Thiệu</h1>
    <p>Đây là thông tin về chúng tôi.</p>
    <a href="/" style="color: blue; text-decoration: none;"><strong>Quay về trang chủ</strong></a>
  `);
});

// Trang liên hệ (mới)
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Trang Liên Hệ</h1>
    <p>Liên hệ chúng tôi qua email: example@email.com</p>
    <a href="/" style="color: blue; text-decoration: none;"><strong>Quay về trang chủ</strong></a>
  `);
});

// Chạy server
app.listen(3000, () => {
  console.log('Website chạy tại http://localhost:3000');
});