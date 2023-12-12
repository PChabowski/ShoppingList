import { addTaskToArray, tasksList } from "./modules/addTaskToArray.js";
import { tasksListDone } from "./modules/doneTask.js";
import { displayAllTasks, displayDoneTasks, displayTasks }  from "./modules/display.js";

document.addEventListener('DOMContentLoaded', function () {
  displayAllTasks(tasksList, displayTasks);
  displayAllTasks(tasksListDone, displayDoneTasks);  

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