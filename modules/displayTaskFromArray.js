import { tasksList } from "./addTaskToArray.js";
import { deleteTask } from "./deleteTask.js";

function displayTasksFromArray() {
    const taskList = document.querySelector("#task-list");
    const index = tasksList.length - 1;
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
            ${tasksList[index]}
            <button class="delete-task">Usuń</button>
        `;
    taskList.appendChild(taskItem);
    deleteTask(taskItem);
}

function writeAll() {
    tasksList.forEach(taskText => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
                ${taskText}
                <button class="delete-task">Usuń</button>
            `;
        taskList.appendChild(taskItem);
        //deleteTask(taskItem); zaimportuj jedynie funkcje usuniecia
    });
}

export { displayTasksFromArray };