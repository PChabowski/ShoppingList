import { addAttributeToLi } from "./addAttribute.js";
import { tasksListDone } from "./doneTask.js";
import { saveToLocalStorage } from "./funktionLocalStorage.js";

function deleteTask(task) {
    const deleteButton = task.querySelector('.delete-task');

    deleteButton.addEventListener('click', () => {
        const index = task.getAttribute('task-done-id');
        if (index !== -1) {
            task.remove();
            tasksListDone.splice(index, 1);
            saveToLocalStorage('taskListDone', JSON.stringify(tasksListDone));
        }
        addAttributeToLi();
    });
}

export { deleteTask };