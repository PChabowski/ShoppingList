import { tasksList } from "./addTaskToArray.js";
import { attribute } from "./attribute.js";
import { deleteTask } from "./deleteTask.js";
import { doneTask, tasksListDone } from "./doneTask.js"; 

function createElementList(text) {
    const taskList = document.querySelector("#task-list");
    const taskItem = document.createElement('li');
    attribute.add(taskItem);
    taskItem.innerHTML = `
            ${text}
            <button class="done-task">Zrobione</button>
        `;
    taskList.appendChild(taskItem);
    doneTask(taskItem);
}

function createElementListDone(text) {
    const taskList = document.querySelector("#task-list-done");
    const taskItem = document.createElement('li');
    attribute.add(taskItem);
    taskItem.innerHTML = `
            ${text}
            <div class="btn-task">
                <button class="done-task">Undone</button>
                <button class="delete-task">Uśun</button>
            </div>
        `;
    taskList.appendChild(taskItem);
    doneTask(taskItem);
    deleteTask(taskItem);
}

function displayTask(taskText) { //ta funkcja jest niepotrzeba wystarczy jedna która bedzie wypisywac wszystko z tablicy
    createElementList(taskText);
    createElementListDone(taskText);
}

function displayAllTasksFromArray() {
    tasksList.forEach(taskText => {
        createElementList(taskText);
    });
    tasksListDone.forEach(taskDoneText => {
        createElementListDone(taskDoneText);
    });
}

export { displayTask, displayAllTasksFromArray };