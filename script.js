document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Por favor, ingresa una tarea válida.");
        return;
    }
    
    let taskList = document.getElementById("task-list");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class='delete' onclick='removeTask(this)'>Eliminar</button>`;
    taskList.appendChild(li);
    
    saveTask(taskText);
    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    let taskText = li.textContent.replace("Eliminar", "").trim();
    
    li.remove();
    deleteTask(taskText);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("task-list");
    
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class='delete' onclick='removeTask(this)'>Eliminar</button>`;
        taskList.appendChild(li);
    });
}

function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
