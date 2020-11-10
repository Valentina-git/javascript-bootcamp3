'use strict';

/**  Напиши функцию getItemsString(array),
которая получает массив и возвращает строку,
полученную из объединения(конкатенации)
строк в формате ${ номер элемента } - ${ значение элемента } \n, 
где \n - спецсимвол переноса.

Нумерация должна начинаться с 1.
К примеру для первого элемента массива['Mango', 'Poly', 'Ajax']
с индексом 0 будет выведено '1 - Mango', 
а для индекса 2 выведет '3 - Ajax'.

Используйте вспомогательную переменную result 
для добавления(конкатенации) строк внутри цикла for */


const pets = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

let getItemsString = function (array) {
    
    let length = array.length;
    let result = '';
    
    for (let i = 0; i < length; i += 1) {
        result += `${i + 1} - ${array[i]} \n`
        console.log(`${i+1} - ${array[i]} \n`)
    }
    return result; 
}
getItemsString(pets)



//console.log(i+1 + ' - '  + array[i] + ' ' + '\n');
// let getItemsString = 'Vova';
// getItemsString = 451;
//  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
//  console.log(typeof getItemsString);
// console.log('Lena' + ' ' + 'Sasha' + ' ' + '=' + ' ' + 'love');

