// const { create } = require('domain');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');
function takeTask(){
    const data = fs.readFileSync(filePath,'utf-8');
    return JSON.parse(data);
}


function addTask(title){
    const tasks = takeTask();
    const newTask  = {
    id : tasks.length + 1 ,
    title : title,
    createdAt : new Date().toISOString(),
    }    
    tasks.push(newTask);
    fs.writeFileSync(filePath,JSON.stringify(tasks,null,2));
    return newTask;
}

function getTaskByID(id){
    const tasks = takeTask();
    return tasks.find(task => task.id === parseInt(id));
}

module.exports = {
    addTask,
    getTaskByID
}