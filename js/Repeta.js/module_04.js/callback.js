/**
 * Модуль 4. Занятие 7. Callback-функции и замыкания
 */

 /**
  * Функция высшего порядка — функция, 
  * принимающая в качестве параметров 
  * другие функции или возвращающая 
  * функцию как результат.(highterOrderFunction)
  * 
  * Функция обратного вызова (callback) — это функция, 
  * которая передается другой функции 
  * в качестве аргумента и та, в свою очередь, 
  * вызывает переданную функцию.
  */

  /**
   * Examples:
   * 
   * 1)
   * const printMessage = function(message) {
        console.log(message);
    };

    const higherOrderFunction = function(callback) {
    const string = 'HOCs are awesome';
    callback(string);
    };

    higherOrderFunction(printMessage);

2) ***Функции обратного вызова (Callback) 
     и функции высшего порядка (hof):

const greet = function (name) {
    console.log(`Hello ${name}`);
};

const greetWithName = function (callback) {
    const name = `Mango`;

    console.log(callback);
    callback(name);
};
greetWithName(greet);

3) ***Отложенный вызов: регистрация событий:

const buttonRef = document.querySelector(`button`) 

const handleButtonClick = function () {
    console.log(`Click`);
}
buttonRef.addEventListenr(`Click`, handleButtonClick);

4) *** Отложенный вызов: интервалы:

setTimeout(function () {
    console.log(`Через 3 секунды внутри колбека в таймауте`);
}, 3000);

5) *** Отложенный вызов: http-запрос;

const handleFetchSuccess = function (data) {
    console.log(data);
};

console.log(`перед fetch`);
fetch(`https://swapi.co/api/people/1/`)
    .then(res => res.json())
    .then(handleFetchSuccess);

console.log(`после fetch`);
*/