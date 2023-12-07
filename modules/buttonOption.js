export function addButtonOption(option) {
  let btn;
  switch (option) {
      case "done":
          btn = `<div class="btn-task">
                      <button class="done-task">Done</button>
                  </div>`;
          break;
      case "undo":
          btn = `<div class="btn-task">
                      <button class="delete-task">Delete</button>
                      <button class="done-task">Undo</button>
                  </div>`;
          break;
  }
  return btn;
}