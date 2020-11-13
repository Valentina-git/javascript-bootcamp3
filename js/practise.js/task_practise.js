'use strict';

// Example 01 practise:

// const sum = function (number_1, number_2) {
//     console.log(number_1 + number_2);
// }
// // sum(9, 17)

// const div = function (number_1, number_2) {
//     console.log(number_1 / number_2);
// }
// // div(25, 5)

// const mult = function (a, b) {
//     console.log(a * b);
// }
// // mult(90, 10)

// const sub = function (num1, num2) {
//     console.log(num1 - num2);
// }
// // sub(100, 50)

// // +, *, -, /

//  const calc = function (number_1, number_2, operator) {

//     if (operator === '+') {
//          sum(number_1, number_2);
//      } else if (operator === '*') {
//          mult(number_1, number_2);
//      } else if (operator === '-') {
//          sub(number_1, number_2);
//      } else if (operator === '/' && number_2 !== 0) {
//          div(number_1, number_2);
//      } else { console.log('Division by zero') }
// }

// calc(50, 100, '+')
// calc(30, 2, '*')
// calc(100, 25, '-')
// calc(30, 0, '/')

//----------------------------------------------------------------------------------
// Example 02 

// let users = ['Vova', 'Sara', 'Mike', 'Mike', 'Bob', 'Lena'];


// function arrayFind(myArray, name) {
//     let length = myArray.length
//     for (let i = 0; i < length; i += 1) {
//         // console.log(myArray[i]);
//         if (myArray[i] === name) {
//             console.log('Нашли')
//             return true;
//         }

//     }
//     console.log('Not Found')
//     return false;
// }
// arrayFind(users, 'Sveta')



// let arrayLength = users.length;
// for (let i=0; i<arrayLength; i+=1 ) 
// {
//   console.log(users[i]);
// }
//--------------------------------------------------------------------------

//Example 03 
//Функция для вызова console.log, чтобы не прописывать постоянно его!

// let age = 25;
// const users = ["Poly", "Roma", "Coda"] 

// console.log("users", users);
// console.log("age", age);


// let debug = function (cat, message = "") {
//  console.log(message, cat);
// }
// debug("Массив пользователей", users)
// debug("Возраст", age)
// debug(age)
// ________________________________________________________________________________

//Example 04

// const favorite = "the road will be mastered be the walking";

// //console.log(favorite.length);
// const findLongestWord = function(string){
//     const words = string.split(' ');
//    let longestWord = words[0]

//     let length = words.length;
//  for (let i = 0; i<length; i+=1){
//     // console.log(words[i]);
//      if(longestWord.length < words[i].length){
//         longestWord = words[i]
//         }    
//     }
//  return longestWord;

//  //console.log(longestWord);
// //  return;
// }
// console.log(findLongestWord(favorite));
// __________________________________________________

//Example 04
