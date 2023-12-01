import { tasksList } from "./addTaskToArray.js";
//import { attribute } from "./attribute.js";
//import { deleteTask } from "./deleteTask.js";
import { doneTask, tasksListDone } from "./doneTask.js";
import { Counter } from "./counter.js"

export const counterElement = new Counter();

function createElement(idParent, nameElement, addNewObj) {
    const parent = document.querySelector(idParent);
    const child = document.createElement(nameElement);
    child.innerHTML = addNewObj;
    parent.appendChild(child);
    // trzeba tak zrobić zeby dodac funkcje do przycisków które sie tu dodaja
}

function button(option, text) {
    let btn;
    switch(option) {
        case "done":
            btn = `${text}<div class="btn-task">
                        <button class="done-task">Done</button>
                    </div>`;
            break;
        case "undone":
            btn = `${text}<div class="btn-task">
                        <button class="delete-task">Delete</button>
                        <button class="done-task">Undone</button>
                    </div>`;
            break;
    }
    return btn;
}

function displayTasks() { // ulepszyc funkcje wyswietlania taskow
    tasksList.forEach(taskText => {
        createElement("#task-list", 'li', button("done", taskText));
    });
    tasksListDone.forEach(taskText => {
        createElement("#task-list-done", 'li', button("undone", taskText));
    });
}

export { displayTasks, createElement };