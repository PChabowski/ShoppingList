import { tasksList } from "./addTaskToArray.js";
import { deleteTask } from "./deleteTask.js";
import { doneTask, tasksListDone } from "./doneTask.js";
import { returnTask } from "./returnTask.js";
import { Counter } from "./counter.js";
import { addAttributeToLi } from "./addAttribute.js";
import { addTextAndButtonToTask } from "./addFunction.js";



export const counterElement = new Counter();

function createElement(idParent, nameElement) {
    const parent = document.querySelector(idParent);
    const child = document.createElement(nameElement);
    parent.appendChild(child);
    return child;
    // trzeba tak zrobić zeby dodac funkcje do przycisków które sie tu dodaja
}

function addButtonOption(option) {
    let btn;
    switch (option) {
        case "done":
            btn = `<div class="btn-task">
                        <button class="done-task">Done</button>
                    </div>`;
            break;
        case "undo":
            btn = `<div class="btn-task">
                        <button class="delete-task">Delete</button>
                        <button class="done-task">Undo</button>
                    </div>`;
            break;
    }
    return btn;
}

function displayTasks(taskText) { // ulepszyc funkcje wyswietlania taskow
    const element = createElement("#task-list", 'li');
    addAttributeToLi();

    addTextAndButtonToTask(element, taskText, addButtonOption("done"));
    doneTask(element);
}

export function displayDoneTasks(taskText) { // ulepszyc funkcje wyswietlania taskow
    const element = createElement("#task-list-done", 'li');
    addAttributeToLi();

    addTextAndButtonToTask(element, taskText, addButtonOption("undo"));
    returnTask(element);
    deleteTask(element);
}

export function displayAllTasks(list, displayFunction) {
    list.forEach(text => {
        displayFunction(text);
    });
}

export { displayTasks, createElement };