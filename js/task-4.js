'use strict';

const formatString = function (string) {
  let string40;
  if (string.length <= 40) {
    return string;
  } else {
    string40 = string.slice(0, 40);
    return string40 + '...';
  }
};

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

//* ---------------- OLD WORK ----------------

// const formatString = function (string) {
//   const stringToArray = string.split(''); //перевести строку в массив с элементами;
//   // const limit = 40;
//   let stringModified = [];
//   let string40 = [];
//   let string40dots = [];

//   if (stringToArray.length <= 40) {
//     stringModified = stringToArray.join(''); // массив строка;
//     return stringModified;
//     // break;
//   }
//   string40 = stringToArray.slice(0, 40);
//   string40.push('...');
//   string40 = string40.join(''); // массив строка;
//   stringModified = string40;

//   return stringModified;
// };
