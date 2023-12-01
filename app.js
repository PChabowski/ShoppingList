import { addTaskToArray } from "./modules/addTaskToArray.js";
//import { displayAllTasksFromArray } from "./modules/displayTaskFromArray.js";
import { displayTasks }  from "./modules/display.js";

document.addEventListener('DOMContentLoaded', function () {
  displayTasks();

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