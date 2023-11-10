import { addTaskToArray, tasksList } from "./modules/addTaskToArray.js";
import { displayAllTasksFromArray, displayTask } from "./modules/displayTaskFromArray.js";

function show() {
  console.log(tasksList);
}

document.addEventListener('DOMContentLoaded', function () {
  displayAllTasksFromArray();
  //const addShowButton = document.getElementById('add-show-button');
  //addShowButton.addEventListener('click', show)

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