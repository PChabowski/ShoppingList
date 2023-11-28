import { tasksList } from "./addTaskToArray.js";
import { attribute } from "./attribute.js";
import { saveToLocalStorage } from "./funktionLocalStorage.js";

const tasksListDone = [];

function doneTask(task) {
    const doneButton = task.querySelector('.done-task');

    doneButton.addEventListener('click', () => {//przycisk zaliczenia zadania musi miec osobny licznik niz ma przycisk ucuniecia zadania
        const index = task.getAttribute('data-id');
        if (index !== -1) {
            task.remove();
            tasksListDone.push(tasksList[index]);
            tasksList.splice(index, 1);
            saveToLocalStorage('taskList', JSON.stringify(tasksList));
            saveToLocalStorage('taskListDone', JSON.stringify(tasksListDone));
        }
        attribute.addAll();
    });
}

export { doneTask, tasksListDone };