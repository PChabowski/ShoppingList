import { addTaskToArray } from "./modules/addTaskToArray.js";
import { displayTasksFromArray } from "./modules/displayTaskFromArray.js";

document.addEventListener('DOMContentLoaded', function () {
    const addTaskButton = document.getElementById('add-task-button');
  
    addTaskButton.addEventListener('click', function () {
      addTaskToArray(); // Wywołaj funkcję addTaskToArray po kliknięciu przycisku
      displayTasksFromArray();
    });
  });