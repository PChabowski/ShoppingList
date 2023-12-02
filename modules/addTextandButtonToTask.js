export function addTextandButtonToTask(where, text, button) {
  const element = document.querySelectorAll(where);
  for (let i = 0; i < text.length; i++) {
    element[i].innerHTML = text[i] + button;
  }
}