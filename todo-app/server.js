const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const taskManager = require('./taskManager');

const app = express();

// Middleware để xử lý form
app.use(bodyParser.urlencoded({ extended: true }));

// Trang chủ
app.get('/', async (req, res) => {
  // Lấy danh sách nhiệm vụ
  const tasks = taskManager.getTasks();
  
  // Lấy trích dẫn từ API
  let quote = 'Hãy làm việc chăm chỉ!';
  try {
    const response = await axios.get('https://api.quotable.io/random');
    quote = response.data.content;
  } catch (error) {
    console.log('Lỗi lấy trích dẫn:', error.message);
  }

  // Hiển thị HTML
  res.send(`
    <h1>Danh Sách Nhiệm Vụ</h1>
    <p><em>Trích dẫn hôm nay: ${quote}</em></p>
    <ul>
      ${tasks.map(task => `<li><a href="/task/${task.id}">${task.title}</a></li>`).join('')}
    </ul>
    <a href="/add"><strong>Thêm nhiệm vụ mới</strong></a>
  `);
});

// Trang thêm nhiệm vụ
app.get('/add', (req, res) => {
  res.send(`
    <h1>Thêm Nhiệm Vụ Mới</h1>
    <form method="POST" action="/add">
      <input type="text" name="title" placeholder="Nhập nhiệm vụ" required>
      <button type="submit">Thêm</button>
    </form>
    <a href="/"><strong>Quay về trang chủ</strong></a>
  `);
});

// Xử lý form thêm nhiệm vụ
app.post('/add', (req, res) => {
  const title = req.body.title;
  if (title) {
    taskManager.addTask(title);
  }
  res.redirect('/');
});

// Trang chi tiết nhiệm vụ
app.get('/task/:id', (req, res) => {
  const task = taskManager.getTaskById(req.params.id);
  if (task) {
    res.send(`
      <h1>Chi Tiết Nhiệm Vụ</h1>
      <p><strong>Tiêu đề:</strong> ${task.title}</p>
      <p><strong>Ngày tạo:</strong> ${task.createdAt}</p>
      <a href="/"><strong>Quay về trang chủ</strong></a>
    `);
  } else {
    res.send(`
      <h1>Nhiệm vụ không tìm thấy!</h1>
      <a href="/"><strong>Quay về trang chủ</strong></a>
    `);
  }
});

// Chạy server
app.listen(3001, () => {
  console.log('Website chạy tại http://localhost:3000');
});