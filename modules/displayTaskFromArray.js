import { tasksList } from "./addTaskToArray.js";
import { deleteTask } from "./deleteTask.js";

const taskList = document.querySelector("#task-list");
let i = 0;

function inkrement() {
    return i++;
}

function displayTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.setAttribute('data-id', inkrement());
    taskItem.innerHTML = `
            ${taskText}
            <button class="delete-task">Usuń</button>
        `;
    taskList.appendChild(taskItem);
    deleteTask(taskItem);
}

function displayAllTasksFromArray() {
    tasksList.forEach(taskText => {
        const taskItem = document.createElement('li');
        taskItem.setAttribute('data-id', inkrement());
        taskItem.innerHTML = `
                ${taskText}
                <button class="delete-task">Usuń</button>
            `;
        taskList.appendChild(taskItem);
        deleteTask(taskItem);
    });
}

export { displayTask, displayAllTasksFromArray };