'use strict';

const calculateEngravingPrice = function (message, pricePerWord) {
  if (typeof message !== 'string' && typeof pricePerWord !== 'number') {
    console.log('Введены не корректные данные :>> ');
  }
  let messageByWord = message.split(' ');
  let wordsQuantity = messageByWord.length;

  return wordsQuantity * pricePerWord;
};

// alert(
//   `Вы заказали гравировку надписи ${userInput} при стоимости ${pricePerWord} кредитов за слово. Стоимость вашего заказа: ${calculateEngravingPrice} кредитов.`,
// );

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
