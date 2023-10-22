import { tasksList } from "./addTaskToArray.js";
import { removeFromLocalStorage } from "./funktionLocalStorage.js";

function deleteTask(task) {
    const taskList = document.querySelector("#task-list");
    const deleteButton = task.querySelector('.delete-task');
    const taskIndex = Array.from(taskList.children).indexOf(task);

    deleteButton.addEventListener('click', () => {
        task.remove();
        if (taskIndex !== -1) {
            tasksList.splice(taskIndex);
            //removeFromLocalStorage(taskIndex); do dopracowania
        }
    });
}

export { deleteTask };