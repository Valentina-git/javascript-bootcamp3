/**
 * Задача 4-1
Callback функция

Функция mapArray(array, cb), 
принимает 1-м параметром array - массив чисел, 
а вторым параметром 
cb - функцию обратного вызова (callback). 
Функция mapArray создает новый массив numbers 
и заполняет его числами из массива 
array преобразованными функцией cb.

Оформи создание массива numbers нужной длины 
используя new Array () и 
необходимый аргумент для задания длины, 
равной длине array.

Напиши функцию обратного вызова addIndex, 
которая принимает два параметра - element и index и
 возвращает число - сумму element и index (сложение).

Напиши функцию обратного вызова subIndex, 
которая принимает два параметра - element и index и 
возвращает число - разность element и index (вычитание).
 */


 
/**
 * // Write code under this line
const addIndex = (element, index) => element += index;
// Write code under this line
const subIndex = (element, index) => element -= index;
  
function mapArray(array, cb) {
  'use strict';
// Write code under this line
  const numbers = new Array(array.length);
  for(let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
     numbers[i] = cb(element, index);
  }
  return numbers;
}

const arr  = [1,2,3,4,5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]

 */
//__________________________________________________________

/**
 * Задача 4-2
Callback функция и метод push
Функция isUniq принимает три параметра - 
element, index и arr.Функция возвращает 
true или false в зависимости от того 
встречается ли элемент первый раз в массиве (true) 
или этот элемент в массиве уже встречался (false) .

Функция isEven принимает один параметр - element. 
Функция возвращает true или false в зависимости 
от того является ли элемент четным числом или нет.

Функция filterArray(array, cb), 
принимает 1-м параметром array - массив чисел, 
а вторым параметром cb - функцию обратного вызова (callback). 
Дополни тело функции так, чтобы функция filterArray
заполняла новый пустой массив numbers только теми элементами 
из массива array, для которых вызов функции cb вернет true.
 */