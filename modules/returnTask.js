import { tasksList } from "./addTaskToArray.js";
import { tasksListDone } from "./doneTask.js";
import { saveToLocalStorage } from "./funktionLocalStorage.js";
import { addAttributeToLi } from "./addAttribute.js";

function returnTask(task) {
    const doneButton = task.querySelector('.done-task');

    doneButton.addEventListener('click', () => {
        const index = task.getAttribute('task-done-id');
        if (index !== -1) {
            task.remove();
            tasksList.push(tasksListDone[index]);
            tasksListDone.splice(index, 1);
            saveToLocalStorage('taskList', JSON.stringify(tasksList));
            saveToLocalStorage('taskListDone', JSON.stringify(tasksListDone));
        }
        addAttributeToLi();
    });
}

export { returnTask };