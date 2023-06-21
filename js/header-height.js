// Динамически посчитать размер шапки
const { height: headerHeight } = document
  .querySelector('.header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${headerHeight}px`;
