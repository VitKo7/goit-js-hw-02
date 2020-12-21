'use strict';

let userInput;
const numbers = [];
let total = 0;
let message;

while (userInput !== null) {
  userInput = prompt('Введите число:');

  if (!+userInput) {
    if (userInput) {
      alert('Было введено не число, попробуйте еще раз!');
    }
  } else {
    numbers.push(userInput);
  }
}
for (let i = 0; i < numbers.length; i += 1) {
  total += +numbers[i];
}

message = `Общая сумма чисел равна ${total}`;
console.log(message);

// continue;
// alert('Отменено пользователем');
// userInput = Number(userInput);
// if (Number.isNaN(userInput)) {

// while (true) {
//   userInput = prompt('Введите число:');

//   if (!+userInput) {
//     if (userInput) {
//       alert('Было введено не число, попробуйте еще раз!');
//     }
//     for (let i = 0; i < numbers.length; i += 1) {
//       total += +numbers[i];
//     }
//     message = `Общая сумма чисел равна ${total}`;
//     break;
//   }

//   numbers.push(userInput);
// }
// console.log(message);
