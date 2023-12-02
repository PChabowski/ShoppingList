export function addOnclickToButton(where, btnFun) {
  const element = document.querySelectorAll(where);
  for (let i = 0; i < where.length; i++) {
    btnFun(element[i]);
  }
}