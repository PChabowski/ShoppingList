import { saveToLocalStorage, loadFromLocalStorage } from "./funktionLocalStorage.js";
import { displayTasks } from "./display.js";
import { check } from "./check.js";

const tasksList = getDateFromLocalStorage('taskList');

export function getDateFromLocalStorage(nameDate) {
  const storedTasks = loadFromLocalStorage(nameDate);
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function addTaskToArray() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '' || check(tasksList, taskText)) return;
  displayTasks();

  tasksList.push(taskText);
  saveToLocalStorage('taskList', JSON.stringify(tasksList));

  taskInput.value = '';
}

export { addTaskToArray, tasksList };