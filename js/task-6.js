'use strict';

let userInput;
const numbers = [];
let total = 0;

while ((userInput = prompt('Введите число:')) !== null) {
  userInput = Number(userInput);

  if (Number.isNaN(userInput)) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }

  numbers.push(userInput);
}

alert('Отменено пользователем');

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);

alert(`Общая сумма чисел равна ${total}`);
