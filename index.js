// /**
//  * index.js
//  * 
//  * Ứng dụng Todo List chạy trên terminal sử dụng Node.js thuần (không dùng Express, không API)
//  * 
//  * Hướng dẫn:
//  * - Chạy ứng dụng: node index.js
//  * - Ứng dụng sẽ hiển thị menu để bạn chọn các chức năng:
//  *   + 1: Xem danh sách công việc
//  *   + 2: Thêm công việc mới
//  *   + 3: Cập nhật công việc
//  *   + 4: Xóa công việc
//  *   + 5: Thoát ứng dụng
//  * 
//  * Lưu ý: Dữ liệu lưu tạm trong mảng, khi thoát ứng dụng dữ liệu sẽ mất.
//  */

// const readline = require('readline');
// // Dòng này dùng để import module readline có sẵn trong Node.js 
// // dùng để đọc input từ người dùng qua terminal.
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let todos = [];
// let currentId = 1;

// // Hàm hiển thị menu chính
// function showMenu() {
//     console.log('\n=== Todo List ===');
//     console.log('1. Xem danh sách công việc');
//     console.log('2. Thêm công việc mới');
//     console.log('3. Cập nhật công việc');
//     console.log('4. Xóa công việc');
//     console.log('5. Thoát');
//     rl.question('Chọn chức năng (1-5): ', handleMenu);
// }

// // Xử lý lựa chọn menu
// function handleMenu(choice) {
//     switch (choice.trim()) {
//         case '1':
//             viewTodos();
//             break;
//         case '2':
//             addTodo();
//             break;
//         case '3':
//             updateTodo();
//             break;
//         case '4':
//             deleteTodo();
//             break;
//         case '5':
//             console.log('Tạm biệt!');
//             rl.close();
//             break;
//         default:
//             console.log('Lựa chọn không hợp lệ, vui lòng chọn lại.');
//             showMenu();
//     }
// }

// // Xem danh sách công việc
// function viewTodos() {
//     console.log('\nDanh sách công việc:');
//     if (todos.length === 0) {
//         console.log('Chưa có công việc nào.');
//     } else {
//         todos.forEach(todo => {
//             console.log(`ID: ${todo.id} - ${todo.task}`);
//         });
//     }
//     showMenu();
// }

// // Thêm công việc mới
// function addTodo() {
//     rl.question('Nhập nội dung công việc mới: ', (task) => {
//         if (task.trim() === '') {
//             console.log('Nội dung công việc không được để trống.');
//             showMenu();
//         } else {
//             todos.push({ id: currentId++, task: task.trim() });
//             console.log('Đã thêm công việc.');
//             showMenu();
//         }
//     });
// }

// // Cập nhật công việc
// function updateTodo() {
    // rl.question('Nhập ID công việc cần cập nhật: ', (idInput) => {
    //     const id = parseInt(idInput.trim());
    //     if (isNaN(id)) {
    //         console.log('ID không hợp lệ.');
    //         showMenu();
    //         return;
    //     }
//         const todo = todos.find(t => t.id === id);
//         if (!todo) {
//             console.log('Không tìm thấy công việc với ID này.');
//             showMenu();
//             return;
//         }
//         rl.question('Nhập nội dung công việc mới: ', (newTask) => {
//             if (newTask.trim() === '') {
//                 console.log('Nội dung công việc không được để trống.');
//             } else {
//                 todo.task = newTask.trim();
//                 console.log('Đã cập nhật công việc.');
//             }
//             showMenu();
//         });
//     });
// }

// // Xóa công việc
// function deleteTodo() {
//     rl.question('Nhập ID công việc cần xóa: ', (idInput) => {
//         const id = parseInt(idInput.trim());
//         if (isNaN(id)) {
//             console.log('ID không hợp lệ.');
//             showMenu();
//             return;
//         }
//         const index = todos.findIndex(t => t.id === id);
//         if (index === -1) {
//             console.log('Không tìm thấy công việc với ID này.');
//             showMenu();
//             return;
//         }
//         todos.splice(index, 1);
//         console.log('Đã xóa công việc.');
//         showMenu();
//     });
// }

// // Bắt đầu ứng dụng
// showMenu();


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// rl.question("Bạn tên là gì : " , (answe)=>{
//     console.clear();
//     console.log(`thong tin cua ban la : ${answe}`);
//     rl.close();
// })