import { saveToLocalStorage, loadFromLocalStorage } from "./funktionLocalStorage.js";
import { displayTask } from "./displayTaskFromArray.js";
import { check } from "./check.js";

const tasksList = getTaskArrayFromLocalStorage();

function getTaskArrayFromLocalStorage() {
  const storedTasks = loadFromLocalStorage('taskList');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function addTaskToArray() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '' || check(tasksList, taskText)) return;
  displayTask(taskText);

  tasksList.push(taskText);
  saveToLocalStorage('taskList', JSON.stringify(tasksList));

  taskInput.value = '';
}

export { addTaskToArray, tasksList };