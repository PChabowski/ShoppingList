function loadFromLocalStorage(taskName) {
    return localStorage.getItem(taskName);
}

function saveToLocalStorage(taskName, value) {
    localStorage.setItem(taskName, value);
}

function removeFromLocalStorage(taskName) {
    localStorage.removeItem(taskName);
}

export { loadFromLocalStorage, saveToLocalStorage, removeFromLocalStorage };