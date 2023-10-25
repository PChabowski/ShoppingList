import { tasksList } from "./addTaskToArray.js";
import { saveToLocalStorage } from "./funktionLocalStorage.js";

function deleteTask(task) {
    const deleteButton = task.querySelector('.delete-task');
    const index = task.getAttribute('data-id');

    deleteButton.addEventListener('click', () => {
        if (index !== -1) {
            task.remove();
            tasksList.splice(index, 1);
            localStorage.clear('taskList');
            saveToLocalStorage('taskList', JSON.stringify(tasksList));
        }
        location.reload();
    });
}

export { deleteTask };