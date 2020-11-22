/**19.11.2020
 * Task_01
 * Посчитать кол-во гласных и вывести функцию
 */

// const string = "Lorem spam find you";

// const searchLiteral = function (string) {
//     const literal = 'oeaiu';
//     let total = 0;
//     const wordsArr = string.split(' ');
//     const symbolsArr = literal.split('');
//     console.log(symbolsArr);

//     for (const word of wordsArr) {
//         let letters = word.split('');

//         for (const letter of letters) {
//         let symbol = literal.includes(letter);

//         if (symbol) {
//             total += 1;
//             }
//         }
//     }
//     return total;
// }
// console.log(searchLiteral(string)); 
//___________________________________________________
/**Task_02
 * Вывести алфавит и вычленить из него гласные, 
написать их количество;
 */

// const string = "Lorem spam find you uu";

// const searchLiteral = function (string, literal) {
//     //const LITERAL = 'oeaiu';
//     let total = 0;
//     const wordsArr = string.split(' ');
//     //const symbolsArr = literal.split('');
//     //console.log(symbolsArr);

//     for (const word of wordsArr) {
//         let letters = word.split('');

//         for (const letter of letters) {
//         let symbol = literal.includes(letter);

//         if (symbol) {
//             total += 1;
//             }
//         }
//     }
//     return total;
// }
// //console.log(searchLiteral(string)); 

// const searchVowels = function (string) {
//     let indexSymbol = 'a'.charCodeAt();

//     //console.log(indexSymbol);
//     //const literal = 'oeaiu';
//     // 97,101,105,111,117

//     let vowels = '';
//     let alphabet = '';

//     for (let i = 0; i < 26; i+=1) {
//         alphabet += String.fromCharCode(indexSymbol);
//         indexSymbol += 1;
//     }
//     for (let j = 0; j < alphabet.length; j+=1) {
//         //console.table(alphabet[j], alphabet[j].charCodeAt());
        
//         if (alphabet[j].charCodeAt() === 97
//             || alphabet[j].charCodeAt() === 101
//             || alphabet[j].charCodeAt() === 105
//             || alphabet[j].charCodeAt() === 111
//             || alphabet[j].charCodeAt() === 117) {
//             vowels += String.fromCharCode(alphabet[j].charCodeAt());
//         }
//     }
//     //console.log(vowels);
//     return searchLiteral(string, vowels)
//     //return alphabet;
// }
// console.log(searchVowels(string)); 
//____________________________________________________________
/**Task_03
 * есть строка 'abcdefj' = jfedcba
 */

// const reverseString = function (str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('abcdefj'));

//function reverseString(str) {
//     let newStr = '', i;
//     for (i = str.length - 1; i >= 0; i--) {
//         //newStr += str.charAt(i);
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));

//***вывести от 0 до 10
// for (let i = 10; i >= 0; i-=1) {
//     console.log(i);
// }

//***вывести в цикле for...of строка 'abcdefj' = jfedcba
//function reverseString(str) {
//     let newStr = '';
// for (let letter of str) {
//     //console.log(letter);
//      newStr = letter + newStr
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj')); 

//***вывести в цикле for...in строка 'abcdefj' = jfedcba
// const reverseString = function (str) {
//     let newStr = '';
//     for (let i in str) {
//         console.log(i);
//         newStr = str[i] + newStr;
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));
//_________________________________________________________________
/**Task_04
 * 
 * !!!!!!!!!!Может быть на собеседовании!!!!!!!!!
 * 
 * Найти максимальное число в массиве,
 * нельзя использовать spread и циклы
 */

// const arr = [2, 3, 5, 6, 7, 8, 12, 25, 36];

// function maxNumber(array) { 
//     return Math.max.apply(Math, array)
//     //return Math.max.bind(Math, ...array)();
// };
// const result = maxNumber(arr);
// console.log(result);
//____________________________________________________
/**Task_05
 * сделать через call, apply, bind
 */

// const user = {
//     name: 'Petro',
//     age: 20,
//     showData() {
//         console.log(this.name, this.age);
//     },
// };
// //user.showData();

// const cars = [
//     { name: 'BMV', age: 2 },
//     { name: 'AUDI', age: 4 },
//     { name: 'MINI', age: 8 }
// ];

// for (let oneCar of cars) {
//     //console.log(oneCar);
//     //console.log(oneCar.name, oneCar.age);
//     user.showData.call(oneCar);
//     //user.showData.bind(oneCar)();
// };