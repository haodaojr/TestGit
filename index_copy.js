// const { console } = require('inspector');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

let todos = [];
let currentId = 1;

function displaymenu(){
    console.log("\n=== Todo List ===");
    console.log("1. Xem danh sach cong viec");
    console.log("2. Them cong viec moi");
    console.log("3. Cap nhat cong viec");
    console.log("4. Xoa cong viec");
    console.log("5. Thoat");
    console.log("=============================");
    rl.question("Nhap lua chon cua ban : " , handleMenu);
}

function handleMenu(choice){
    switch(choice.trim()){
        case '1':
            viewtodo();
            break;
        case '2':
            addtodo();
            break;
        case '3':
            updatetodo();
            break;
        case '4':
            deletetodo();
            break;
        case '5':
            rl.close();
            console.log("Cam on ban da su dung dich vu");
            break;
        default:
            console.log("Lua chon khong hop le");
            displaymenu();
    }
}

function viewtodo(){
    console.log("Danh sach cong viec");
    if(todos.length === 0 ) console.log("Danh sach trống");
    else todos.forEach(todo => console.log(`ID : ${todo.id} - Task : ${todo.task}`));
    displaymenu();
}

function addtodo(){
     rl.question("Nhap cong viec : ",(task)=>{
        if(!task.trim()) console.log("Ban chua nhap cong viec");
        else todos.push({id : currentId++ ,task : task.trim()});
        console.log("Da them cong viec");
        displaymenu();
     });
}


function updatetodo(){
  rl.question("Nhap ID cong viec can cap nhat : ",(Id_input)=>{
    const id = parseInt(Id_input.trim());
    if(isNaN(id)){console.log("ID khong hop le"); displaymenu(); return;}
    const todo = todos.find(t => t.id === id);
    if(!todo){console.log("Khong tim thay cong viec"); displaymenu(); return;}
    rl.question("Nhập nội dung công việc mới",(newtask)=>{
        if(!newtask.trim()) console.log("Nội dung công việc không được để trống");
        else todo.task = newtask.trim();
        console.log("Đã cập nhật công việc");
        displaymenu();
    });
  });
}

function deletetodo(){ 
    rl.question("Nhap ID cong viec can xoa : ",(Id_input)=>{
        const id = parseInt(Id_input.trim());
        if(isNaN(id)){console.log("ID khong hop le"); displaymenu(); return;}
    const index = todos.findIndex(t => t.id === id);
    if(index === -1) console.log("Khong tim thay cong viec");
    else todos.splice(index,1);
    console.log("Da xoa cong viec");
    displaymenu();
    });
}


displaymenu()