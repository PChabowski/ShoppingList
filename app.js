import { tasksList } from "./modules/addTaskToArray.js";
import { addTaskToArray } from "./modules/addTaskToArray.js";
import { displayAllTasksFromArray, displayTask } from "./modules/displayTaskFromArray.js";

document.addEventListener('DOMContentLoaded', function () {
  displayAllTasksFromArray();
  function show() {
    console.log(tasksList);
  }
  const addShowButton = document.getElementById('add-show-button');
  addShowButton.addEventListener('click', show)

  const addTaskButton = document.getElementById('add-task-button');
  
  addTaskButton.addEventListener('click', function () {
    addTaskToArray(); // Wywołaj funkcję addTaskToArray po kliknięciu przycisku
    displayTask();
  });
});