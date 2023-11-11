import { addTaskToArray } from "./modules/addTaskToArray.js";
import { displayAllTasksFromArray } from "./modules/displayTaskFromArray.js";

document.addEventListener('DOMContentLoaded', function () {
  displayAllTasksFromArray();

  const addTaskButton = document.getElementById('add-task-button');

  addTaskButton.addEventListener('click', function () {
    addTaskToArray();
  });

  const taskInput = document.getElementById('task-input');
  taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      addTaskToArray();
    }
  });
});