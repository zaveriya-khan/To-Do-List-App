function addTask() {
    const newTask = document.createElement('li');
    const tasklist = document.getElementById('tasklist');
    
    const taskText = document.getElementById('inputTask').value.trim();
    if (taskText === "") return; // prevent empty tasks

    newTask.textContent = taskText;
    document.getElementById('inputTask').value = "";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        newTask.remove();
    };

    newTask.appendChild(deleteBtn);
    tasklist.appendChild(newTask);
};
