// 'use strict';


// Task 01

// const getItemsString = function(array) {
//   'use strict';
//   // Write code under this line
//   let length = array.length;
//   let result = '';
//   for( let i = 0; i < length; i+=1) {
//     result += `${i+1} - ${array[i]}\n`;
//     console.log(`${i+1} - ${array[i]}\n`);
//   }
//   return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(getItemsString([5, 10, 15]));
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

// Task 02

//Декларированная функция/Function Declaration
//const calculateEngravingPrice() {}

//Функция экспрешн/Function Expresion
//const calculateEngravingPrice = function () {}

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


// const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
//   // console.log('message ', message);
//   // console.log('pricePerWord ', pricePerWord);

//   let calculateArray = message.split(' ');
//   return calculateArray.length * pricePerWord;
// }
// console.log(calculateEngravingPrice('Hello Viva', 10)); 
//____________________________________________________________
// Task 03

// function findLongestWord (string = "") {
//   
//      const words =string.split(" ");
//      let longestdWord = words[0];
//      let length = words.length;      
//     for (let i =0; i<length; i+=1) {
//          if (longestdWord.length<words[i].length){
//              longestdWord = words[i];
//             }
//          }
//          return longestdWord;
// //    console.log(words);
// //   console.log(string.split(" "));
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumped'

// console.log(findLongestWord('Google do a roll'));
// // 'Google'

// console.log(findLongestWord('May the force be with you'));
// // 'force'
//_______________________________________________________________

// Task 04

//Example
// const msg = 'Hello Sveta and Sara';
// console.log(msg.slice(0, 6));
// console.log(msg);


// function formatString(string, maxLength = 40) {
//   if (string.length <= maxLength) {
//     return string
//   } else {
//     return string.slice(0, maxLength) + '...'
//   }
// }
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// // 'Vestibulum facilisis, purus ne...'
//____________________________________________________

// Task 05

// function checkForSpam(message) {
//   const msg = message.toLowerCase();
//   if (msg.includes('spam') || msg.includes('sale')) {
//     return true;
//   }
//   return false;
// }
// //const result = console.log(checkForSpam()); 
// console.log(checkForSpam('pizza')); 
// console.log(checkForSpam('hello')); 
// console.log(checkForSpam('spam')); 
// console.log(checkForSpam('sale')); 


//_________________________________________________

// Task 06

/**  Задача 2-6
Конструкция new Array(10) создаст массив,
длинной в 10 элементов.
Значения в таком массиве будут отсутствовать,
т.е. не будет даже undefined.
Поэтому такой массив нужно заполнить
значениями для дальнейшего использования.

Есть еще способ создания и заполнения массива -
можно создать пустой массив []
и заполнять его методом push()

Быстрая обработка массива
Преимущество создания массива заданной длины
перед добавлением в пустой массив в том,
что метод push() медленнее обрабатывается.

Если `new Array()` будет содержать
более одного аргумента, то будет
создан массив с элементами из аргументов.

Пример:
new Array(3);
// [,,]

new Array(1, 2, 3);
// [1, 2, 3]

Быстрое создание массива:
Пустой массив. Вызов new Array()
создаст пустой массив [].
Но это более медленный способ создания
массива по сравнению с использованием литерала.
Если нужен пустой массив,
то рекомендуется использовать литерал массива.

const arrFast = []; // быстрее
const arrSlow = new Array(); // медленнее

Создание нового массива
на основе преобразования данных
из старого массива
Напиши функцию mapArray(array),
принимающую 1 параметр array -
массив чисел. Функция создает
новый массив numbers размером
в длину массива array и заполняет
его числами из массива array
умноженными на 10. Для перебора массива
и добавления новых значений
используй цикл for. По завершению
перебора массива array
возвращается массив numbers.*/

// function mapArray(array) {
//     // const numbers = new Array(array.length);
//     const newArr = [];
//     const len = array.length;
//     for(let pizza = 0; pizza < len; pizza += 1) {
//         // console.log(array[pizza]);
//         newArr.push(array[pizza] * 10);
//     }
//     return newArr;
//   }
//   console.log(mapArray([-2, 0, 2]));
//  mapArray([1, 0, 2,1, 0, 2,1, 0, 2]);

// console.log(mapArray([1, 0, -121,1, 0,2332 , 2,10023, 0, 2]));
// console.table(mapArray([1, 0, 2, 1, 0, 2, 1, 0, 2]));
// console.dir(mapArray([1, 0, 2, 1, 0, 2, 1, 0, 2]));
// console.error(mapArray([1, 0, 2, 1, 0, 2, 1, 0, 2]));
// console.table(mapArray([1, 0, 2, 1, 0, 2, 1, 0, 2]));
//_________________________________________________________________
//Task 07 

/** Задача 2-7
Создание нового массива
на основе отбора из исходного массива
Напиши функцию filterArray(array),
принимающую 1 параметр array - массив.
Функция проверяет каждое значение массива
- является ли значение конечным числом
(Number.isFinite). Для проверки используй цикл for.
Числа добавляются в новый массив numbers
с помощью метода push, а не числа - игнорируются.
По завершению проверки массива array возвращается
массив numbers.*/

// function filterArray(array) { 
//   const numbers = [];
//   const len = array.length;

//   for (let pen = 0; pen < len; pen += 1) {
//     //console.log(array[pen]);
//     if (Number.isFinite(array[pen])) {
//       numbers.push(array[pen]);
//     }
//   }
//   return numbers;
// }
// console.log(filterArray([2,3,5,7])); 

//____________________________________________

//Task 08

/** Задача 2-8
Вычисление суммы массива

Напиши функцию reduceArray(array),
которая принимает числовой массив array.
Если массив array не пустой,
необходимо посчитать сумму всех элементов массива,
используя цикл for. Для подсчета суммы используй
переменную total. Функция должна
возвращать 0 если массив пустой
и значение total в противном случае. */

// function reduceArray(array) {
//   const len = array.length;
//   let total = 0;

//   if (!len) {
//       return 0;
//     } 
//   for (let flesh = 0; flesh < len; flesh++) {
//     //console.log(array[flesh]);
//     total += array[flesh];

//   }
//   return total;
// }
// console.log(reduceArray([1, 2, 3, 4, 5,10,100])); 
//console.log(reduceArray([])); 
//_______________________________________________

//Task 09

/** Задача 2-9
 *
Есть массив logins с логинами пользователей.
Напиши скрипт добавления логина в массив logins. 

Добавляемый логин должен:

проходить проверку на длину
от 4 до 16-ти символов включительно
быть уникален, то есть
отсутствовать в массиве logins

Разбей задачу на подзадачи с помощью функций.
Проверку на отсутствие аргументов
или на правильный тип аргументов делать не нужно.

Напиши функцию isLoginValid(login),
в которой проверь количество символов
параметра login и верни true или false
в зависимости от того, попадает ли длина
параметра в заданный диапазон
от 4-х до 16-ти символов включительно.

Напиши функцию isLoginUnique(allLogins, login),
которая принимает список всех логинов и
добавляемый логин как параметры и проверяет
наличие login в массиве allLogins,
возвращая true если такого
логина еще нет и false если логин уже используется.

Напиши функцию addLogin(allLogins, login) которая:

Принимает новый логин и массив всех
логинов как параметры
Проверяет валидность логина используя
вспомогательную функцию isLoginValid
Если логин не валиден, прекратить исполнение
функции addLogin и вернуть строку 'Ошибка!
Логин должен быть от 4 до 16 символов'
Если логин валиден, функция addLogin
проверяет уникальность логина с
помощью функции isLoginUnique
Если isLoginUnique вернет false,
тогда addLogin не добавляет логин в массив и возвращает строку
'Такой логин уже используется!'
Если isLoginUnique вернет true,
addLogin добавляет новый логин в logins и возвращает строку
'Логин успешно добавлен!'
🔔 Принцип единственной ответственности функции -
каждая функция делает что-то одно.
Это позволяет переиспользовать код и изменять
логику работы функции только в одном месте,
не затрагивая работу программы в целом.

Предикатные функции возвращают только true или false.
Такие функции принято называть начиная
с is: isLoginUnique и isLoginValid в нашем случае.

isLoginUnique только проверяет есть ли
такой логин в массиве и возвращает true или false.
isLoginValid только проверяет валидный ли
логин и возвращает true или false.
addLogin добавляет или не добавляет логин в массив.
При этом для проверок условия добавления использует
результаты вызовов других функций - isLoginUnique и isLoginValid. */


//Variant_02

// function isLoginValid(login, min = 4, max = 16) {
//   if (login === null) {
//     return false;
//   }
//   if (login.length >= min && login.length <= max) {
//     return true;
//   }
//   return false;
// }

// function isLoginUnique(allLogins, login) {
//   if (allLogins.indexOf(login) != -1) {
//     return false;
//   }
//   return true;
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       allLogins.push(login);
//       message = SUCCESS;
//     } else {
//       message = REFUSAL;
//     }
//   } else {
//     message = ERROR;
//   }

//   return message;
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// //console.log(isLoginValid(input));
// //console.log(isLoginUnique  (logins, input))

// console.log(addLogin(logins, "Ajax"));
// // // 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// // // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// // // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// // // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, input));

//_______________________________________________