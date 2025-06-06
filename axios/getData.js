const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    console.log('Tiêu đề bài viết:', response.data.title);
  })
  .catch(error => {
    console.log('Lỗi:', error.message);
  });