'use strict';
let textByWord = [];
let result;

const checkForSpam = function (message) {
  message = message.toLowercase;
  textByWord = message.split(' '); // !    НЕ РАБОТАЕТ СПЛИТ...(((*)))

  for (let word of textByWord)
    if (textByWord.includes('spam') || textByWord.includes('sale')) {
      result = 'true';
    }
  result = 'false';

  return result;
};

// todo:
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
