document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.querySelector("#task-list");
    const taskInput = document.querySelector("#task-input");
    const addTaskButton = document.querySelector("#add-task-button");

    // Funkcja dodawania do listy
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${taskText}
            <button class="delete-task">Usuń</button>`
        ;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        deleteTask(taskItem);
        
    }

    function deleteTask(task) {
        // Usuwanie zadania po kliknięciu przykisku "Usuń"
        const deleteButton = task.querySelector('.delete-task');
        deleteButton.addEventListener('click', () =>{
            task.remove();
        })
    }

    // Obługa dodawania zadania po kliknięciu przycisku
    addTaskButton.addEventListener('click', addTask);
    
    // Obługa dodawania zadania po naciśnieciu klawisza Enter w polu ktkstowym
    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

})