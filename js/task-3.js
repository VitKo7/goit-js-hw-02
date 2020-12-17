'use strict';

const findLongestWord = function (string) {
  const stringToArray = string.split(' '); // разбиваем массив по словам;

  let minLength = 0;
  let LongestWord;

  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i].length > minLength) {
      minLength = stringToArray[i].length;
      LongestWord = i;
    }
  }

  return stringToArray[LongestWord]; // выводим самое длинное слово;
};

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'

// ? можно ли решить эту задачу через '.sort()' или '.reverse()' - отсортировав слова по длине?

// ! вариант-1 - ?
// textByWord.sort(function(a, b) {return a - b}); // сортирует массив по возрастанию
//     textByWord[0] // содержит наименьшее значение;
//     textByWord[textByWord.length-1] //содержит наибольшее значение;

// ! вариант-2 - ?
// textByWord.sort((a, b) => a - b);
// findLongestWord = textByWord[0]; //находим самое длинное слово;
