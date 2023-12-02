import { tasksList } from "./addTaskToArray.js";
import { deleteTask } from "./deleteTask.js";
import { doneTask, tasksListDone } from "./doneTask.js";
import { returnTask } from "./returnTask.js";
import { Counter } from "./counter.js";
import { addAttributeToLi } from "./addAttribute.js";
import { addTextandButtonToTask } from "./addTextandButtonToTask.js";
import { addOnclickToButton } from "./addOnclickToButton.js";



export const counterElement = new Counter();

function createElement(idParent, nameElement) {
    const parent = document.querySelector(idParent);
    const child = document.createElement(nameElement);
    parent.appendChild(child);
    // trzeba tak zrobić zeby dodac funkcje do przycisków które sie tu dodaja
}

function addButtonOption(option) {
    let btn;
    switch(option) {
        case "done":
            btn = `<div class="btn-task">
                        <button class="done-task">Done</button>
                    </div>`;
            break;
        case "undone":
            btn = `<div class="btn-task">
                        <button class="delete-task">Delete</button>
                        <button class="done-task">Undone</button>
                    </div>`;
            break;
    }
    return btn;
}

function displayTasks() { // ulepszyc funkcje wyswietlania taskow
    tasksList.forEach(() => {
        createElement("#task-list", 'li');
    });
    tasksListDone.forEach(() => {
        createElement("#task-list-done", 'li');
    });
    addAttributeToLi();
    
    // Zrobic jedna petle w której beda w której beda dodane te wszystkie funkcje 
    // ale przerobic te funkcje tak ze beda dodawac tylko jeden element
    addTextandButtonToTask("#task-list li", tasksList, addButtonOption("done"));
    addTextandButtonToTask("#task-list-done li", tasksListDone, addButtonOption("undone"));
    
    addOnclickToButton("#task-list li", doneTask);
    addOnclickToButton("#task-list-done li", returnTask);
    addOnclickToButton("#task-list-done li", deleteTask);
    
}

export { displayTasks, createElement };