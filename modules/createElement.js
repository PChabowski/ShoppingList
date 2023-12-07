export function createElement(idParent, nameElement) {
  const parent = document.querySelector(idParent);
  const child = document.createElement(nameElement);
  parent.appendChild(child);
  return child;
}