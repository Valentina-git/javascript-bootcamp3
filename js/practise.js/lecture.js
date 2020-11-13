// TASK 1.
// -=Сделать первый символ заглавным=-
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
//__________________________________________________________________________________
// Task 2
// -= Операции с массивами =-
// Давайте произведём 5 операций с массивом.
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4. Удалите первый элемент массива и покажите его.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// const remove = ['Рэп', 'Регги'];
// const add = ['Рок-н-ролл'];
// const styles = ['Джаз', 'Блюз'];

// //style.push(add[0]);
// const array = styles.concat(add);

// const index = Math.floor(array.length / 2);
// array.splice(index, 1, 'Классика');

// const removeElement = array.shift();

// array.unshift(...remove);
// const newArray = remove.concat(array);

// console.log('removeElement:>> ', removeElement);
// console.log(array);
//______________________________________________________
//// Task 3.

// -=Сумма введённых чисел=-
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, 
//используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, 
//когда пользователь введёт не числовое значение, 
//пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, 
//не останавливайте ввод значений при вводе «0».

// function sumInput() {
//     let num = "";
//     const arr = [];
//     let sum = 0;

//     function getNum() {
//             do {
//             num = prompt('Введите число');
//             //console.log(num);
//             if (Number.isNaN(Number(num)) || !num ) {
//                 break;
//             }
//             arr.push(num);
//         } while (num !== null) 
//         }
//     getNum()

//     function getResult() {
//         let length = arr.length;
//     for (let i = 0; i < length; i += 1) {
//         sum += Number(arr[i]);
//     }
//     }
//     getResult()
//     return sum;
     
// }
// const result = sumInput()

//___________________________________________________________

// Task 4.
/**  -=Переведите текст вида 
border-left-width в borderLeftWidth=-

Напишите функцию camelize(str), 
которая преобразует строки вида 
«my-short-string» в «myShortString».
То есть дефисы удаляются, 
а все слова после них получают заглавную букву.
Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, 
чтобы разбить строку на массив символов, 
потом переделайте всё как нужно 
и методом join соедините обратно.*/

// function camelize(str) {

//     const arr = str.split('-');
//     //console.log(arr);

//     for (const item of arr) {
//         if (arr.indexOf(item) === 0) {
//             continue;
//         }
//         const index = arr.indexOf(item);
//         const capitalize = item[0].toUpperCase() + item.slice(1);
//         arr.splice(index,1,capitalize)
        
//         //item = item[0].toUpperCase() + item.slice(1)
//         //console.log(item[0].toUpperCase() + item.slice(1));
//     }
//     return arr.join('');

// }
// const result = camelize('border-left-width');
// console.log(result);


// ==================================================================================================================================

// Task 5.
/** -=Фильтрация по диапазону=-

Напишите функцию filterRange(arr, a, b), 
которая принимает массив arr, 
ищет в нём элементы между a и b 
и отдаёт массив этих элементов.
Функция должна возвращать новый массив 
и не изменять исходный.
Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (совпадающие значения)
console.log( arr ); // 5,3,8,1 (без изменений) */

// const arr = [5, 3, 8, 1, 5, 2, 3];
// const filterRange = (arr, a, b) => {

//     const newArr = [];
//     for (const num of arr) {
//         if (num >= a && num <= b) {
//             newArr.push(num);
//         }
//     }
//     return newArr;
// }
// const result = filterRange(arr, 0, 1);
// console.log(result);

// ==================================================================================================================================
// Task 6.
// -=Фильтрация по диапазону "на месте"=-
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log( arr ); // [3, 1]
// ==================================================================================================================================
// Task 7.

// -=Отсортировать пользователей по возрасту=-

// Напишите функцию sortByAge(users), 
//которая принимает массив массивов 
//и сортирует их по возрасту.
// Например:

// const vasya = [ "Вася", 25 ];
// const petya = ["Петя", 30 ];
// const masha = ["Маша", 28 ];
// const arr = [vasya, petya, masha];

// function sortByAge(array) {
//     const newArr = [];

//     for (const arr of array) {
//         newArr.push(arr[1]);
//     }
//     //console.log(newArr);
//     console.log(Math.min(...newArr));
//     newArr.splice()
// }
// sortByAge(arr);

// ==================================================================================================================================
// Task 8.
// -=Получить средний возраст=-
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 29 ];
// let arr = [ vasya, petya, masha ];
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// ==================================================================================================================================
// Task 9.
// -=Трансформировать в массив имён=-
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 28 ];
// let users = [ vasya, petya, masha ];
// ==================================================================================================================================
// Task 10.
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
// ==================================================================================================================================
// Task 11.
// -=Анаграмма=-
// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// Постановка
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// anagram('finder', 'Friend');
// ==================================================================================================================================
// Task 12.
// -=Палиндром=-
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Постановка
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
// palindrome("racecar") === true
// palindrome("table") === false
