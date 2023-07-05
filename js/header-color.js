const colorsBoby = ['tomato', 'white', 'pink', 'orange'];
const max1 = colorsBoby.length - 1;
const min1 = 0;

const index = Math.round(Math.random() * (max1 - min1) + min1);
const color = colorsBoby[index];
console.log(color);

// document.body.style.background = color;

document.getElementsByClassName('header')[0].style.backgroundColor = color;