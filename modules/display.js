import { deleteTask } from "./deleteTask.js";
import { doneTask } from "./doneTask.js";
import { returnTask } from "./returnTask.js";
import { addAttributeToLi } from "./addAttribute.js";
import { addTextAndButtonToTask } from "./addTextAndButton.js";
import { createElement } from "./createElement.js"
import { addButtonOption } from "./buttonOption.js"

export function displayTasks(taskText) { // ulepszyc funkcje wyswietlania taskow
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