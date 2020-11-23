/**
 * Задача 5-1
function-constructor

Напиши функцию-конструктор Account, 
которая создает объект со свойствами login и email.

В prototype функции-конструктора 
добавь метод getInfo(), 
который возвращает строку 
со значениями свойств login и email объекта.
 */

/**
 *  // Write code under this line
  const Account = function (login, email) {
  this.login = login;
  this.email = email;
}
  
Account.prototype.getInfo = function () {
  return ( `login : ${this.login}, email: ${this.email}`)
}

console.log (typeof Account.prototype.getInfo);
// 'function'

 const mango = new Account( 'Mangozedog', 'mango@dog.woof');
console.log (mango.getInfo()); 
// 'login : Mangozedog, email: mango@dog.woof'

 const poly = new Account( 'Poly', 'poly@mail.com');
console.log (poly.getInfo());
// 'login : Poly, email: poly@mail.com'
 */
//______________________________________________________

/**
 * Задача 5-2
class
Напиши класс User 
для создания пользователя 
со следующим свойствами:

name - строка
age - число
followers - число

Добавь метод getInfo(), 
который, выводит строку: 
User ${имя} is ${возраст} 
years old and has 
${кол-во фоловеров} followers
 */

 /**
  * class User {
   constructor({name,age,followers}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
 */
//______________________________________________________

/**
 * Задача 5-3
использование методов класса

Напиши класс Storage, 
который будет создавать объекты 
для управления складом товаров. 
При вызове будет получать один аргумент 
- начальный массив товаров, 
и записывать его в свойство items.

Добавь методы класса:

getItems() - 
возвращает массив текущих товаров

addItem(item) - 
получает новый товар и 
добавляет его к текущим

removeItem(item) - 
получает товар и, 
если он есть, 
удаляет его из текущих
 */

 /**
  * 
  */