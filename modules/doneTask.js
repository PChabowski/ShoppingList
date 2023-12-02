import { tasksList } from "./addTaskToArray.js";
import { saveToLocalStorage } from "./funktionLocalStorage.js";
import { getDateFromLocalStorage } from "./addTaskToArray.js";
import { addAttributeToLi } from "./addAttribute.js";

const tasksListDone = getDateFromLocalStorage('taskListDone');

function doneTask(task) {
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
        addAttributeToLi();
    });
}

export { doneTask, tasksListDone };