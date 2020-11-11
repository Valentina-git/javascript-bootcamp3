// 'use strict';
 

// Task first

const getItemsString = function(array) {
  'use strict';
  // Write code under this line
  let length = array.length;
  let result = '';
  for( let i = 0; i < length; i+=1) {
    result += `${i+1} - ${array[i]}\n`;
    console.log(`${i+1} - ${array[i]}\n`);
  }
  return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(getItemsString([5, 10, 15]));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

/*
'1 - 5
2 - 10
3 - 15'
*/
/**
 Условия из бота при проверке кода:
- Код должен содержать функцию getItemsString;
- Результатом вызова функции должна быть строка, если array массив;
- Результатом вызова функции должна быть пустая строка, если array - пустой массив
- Для массива строк результат не совпадает с ожидаемым
- Для массива чисел результат не совпадает с ожидаемым
- Ожидается использование метода 'for'
- Ожидается использование метода 'length'*/


//-------------------------------------------------------------------------

// Task second

/**  Подсчет стоимости гравировки украшений
Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию 
calculateEngravingPrice(message = "", pricePerWord = 0) 
принимающую строку (в строке будут только слова и пробелы) 
и цену гравировки одного слова, 
и возвращающую цену гравировки всех слов в строке.

Для решения этой задачи не используйте циклы. 
Т.е. никаких for, while, do while, for of, for in, forEach 
или функциональных методов.*/

const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord; // Write code in this line

if(pricePerWord === 80) {
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
}

if(pricePerWord === 160) {
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
}
if(pricePerWord === 240) {
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
}
if(pricePerWord === 120) {
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
}
if(pricePerWord === 120) {
console.log(calculateEngravingPrice('Uno', 100)); // 100
}
calculateEngravingPrice();