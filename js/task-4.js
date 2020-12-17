'use strict';

const formatString = function (string) {
  const stringToArray = string.split(''); //перевести строку в массив с элементами;
  // const limit = 40;
  let stringModified = [];
  let string40 = [];
  let string40dots = [];

  if (stringToArray.length <= 40) {
    stringModified = stringToArray.join(''); // массив строка;
    return stringModified;
    // break;
  }
  string40 = stringToArray.slice(0, 40);
  string40 = string40.join(''); // массив строка;
  string40dots = string40.push('...'); // ! НЕ СРАБАТЫВАЕТ PUSH ... (((*)))
  stringModified = string40dots;

  return stringModified;
};

// todo:

// ! задача:
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// * Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// * Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
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
