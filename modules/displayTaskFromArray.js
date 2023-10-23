import { tasksList } from "./addTaskToArray.js";
import { deleteTask } from "./deleteTask.js";
const taskList = document.querySelector("#task-list");


function displayTask() {
    const index = tasksList.length - 1;
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
            ${tasksList[index]}
            <button class="delete-task">Usuń</button>
        `;
    taskList.appendChild(taskItem);
    deleteTask(taskItem);
}

function displayAllTasksFromArray() {
    tasksList.forEach(taskText => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
                ${taskText}
                <button class="delete-task">Usuń</button>
            `;
        taskList.appendChild(taskItem);
        deleteTask(taskItem);
    });
    console.log(tasksList)
}

export { displayTask, displayAllTasksFromArray };