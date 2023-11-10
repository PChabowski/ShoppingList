import { tasksList } from "./addTaskToArray.js";
import { attribute } from "./attribute.js";
import { deleteTask } from "./deleteTask.js";

function createElement(value) {
    const taskList = document.querySelector("#task-list");
    const taskItem = document.createElement('li');
    attribute.add(taskItem);
    taskItem.innerHTML = `
            ${value}
            <button class="delete-task">Usuń</button>
        `;
    taskList.appendChild(taskItem);
    deleteTask(taskItem);
}

function displayTask(taskText) {
    createElement(taskText);
}

function displayAllTasksFromArray() {
    tasksList.forEach(taskText => {
        createElement(taskText);
    });
}

export { displayTask, displayAllTasksFromArray };