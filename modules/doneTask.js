import { tasksList } from "./addTaskToArray.js";
//import { attribute } from "./attribute.js";
import { counterElement } from "./display.js";
import { saveToLocalStorage } from "./funktionLocalStorage.js";
import { getDateFromLocalStorage } from "./addTaskToArray.js";

const tasksListDone = getDateFromLocalStorage('taskListDone');

function doneTask(task) { // poprawnie
    const doneButton = task.querySelector('.done-task');

    doneButton.addEventListener('click', () => {
        const index = task.getAttribute('task-id');
        if (index !== -1) {
            task.remove();
            tasksListDone.push(tasksList[index]);
            tasksList.splice(index, 1);
            saveToLocalStorage('taskList', JSON.stringify(tasksList));
            saveToLocalStorage('taskListDone', JSON.stringify(tasksListDone));
        }
        reset();
    });
}

function reset() { // poprawnie
    const element = document.querySelectorAll("[task-id]");
    let i = 0;
    while (i < element.length) {
        element[i].setAttribute('task-id', i);
        i++;
    }
    counterElement.count = i;
}

export { doneTask, tasksListDone };