import { tasksList } from "./addTaskToArray.js";
import { attribute } from "./attribute.js";
import { deleteTask } from "./deleteTask.js";

function createElementList(text) {
    const taskList = document.querySelector("#task-list");
    const taskItem = document.createElement('li');
    attribute.add(taskItem);
    taskItem.innerHTML = `
            ${text}
            <button class="delete-task">Usuń</button>
        `;
    taskList.appendChild(taskItem);
    deleteTask(taskItem);
}

function displayTask(taskText) {
    createElementList(taskText);
}

function displayAllTasksFromArray() {
    tasksList.forEach(taskText => {
        createElementList(taskText);
    });
}

export { displayTask, displayAllTasksFromArray };