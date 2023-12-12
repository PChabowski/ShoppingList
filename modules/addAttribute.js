export function addAttribute(where, name) {
  const element = document.querySelectorAll(where);
  for (let i = 0; i < element.length; i++) {
    element[i].setAttribute(name, i);
  }
}

export function addAttributeToLi() {
  addAttribute("#task-list li", "task-id");
  addAttribute("#task-list-done li", "task-done-id");
}