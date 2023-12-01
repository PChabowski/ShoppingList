import { tasksList } from "./addTaskToArray.js";
import { attribute } from "./attribute.js";
import { saveToLocalStorage } from "./funktionLocalStorage.js";

function deleteTask(task) {
    const deleteButton = task.querySelector('.delete-task');
    let counter = 0;

    deleteButton.addEventListener('click', () => {
        const element = document.querySelectorAll("#task-list-done li");
        const index = task.getAttribute('data-id');
        if (index !== -1) {
            task.remove();
            tasksList.splice(index, 1);
            saveToLocalStorage('taskList', JSON.stringify(tasksList));
        }
        attribute.addAll(element, counter);
    });
}

export { deleteTask };