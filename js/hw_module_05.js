/**
 * Задание 1
Напиши функцию-конструктор Account, 
которая создает объект со свойствами login и email. 

В prototype функции-конструктора добавь метод getInfo(), 
который выводит в консоль значения 
полей login и email объекта который его вызвал. */

//!!!***VAR_01

/**  const Account = function ({login, email}) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`)
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
poly.getInfo(); // Login: Poly, Email: poly@mail.com */

//!!!***VAR_02

/**
 * const Account = function (obj) {
  this.login = obj["login"];
  this.email = obj.email;
};
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
console.log(typeof Account.prototype.getInfo); // function
const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com
 */
//___________________________________________________________

/**
 * Задание 2
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
${кол-во фоловеров} followers*/

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
//_______________________________________________________________

/**
 * /**
 * Задание 3
Напиши класс Storage, 
который будет создавать объекты 
для управления складом товаров. 

При вызове будет получать один аргумент 
- начальный массив товаров, 
и записывать его в свойство items.

Добавь методы класса:

getItems() - возвращает массив текущих товаров

addItem(item) - получает новый товар и добавляет его к текущим

removeItem(item) - получет товар и, если он есть, 
удаляет его из текущих */

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     //this.items.push(item);
//     this.items = [...items, item];
//   }
//   removeItem(item) {
//     return this.items.includes(item) ? this.items.splice(this.items.indexOf(item), 1) : null;
    
//     // if (this.items.includes(item)) {
//       //   this.items.splice(this.items.indexOf(item), 1);
//       // }
//       // return this.items;
      
//       //  for (let i = 0; i < this.items.length; i += 1) {
//         //    if (item === this.items[i]) {
//           //      this.items.splice(i, 1);
//           //     }
//           //   }
//   }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// //console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// //console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//_______________________________________________________________

// /**
//  * Задание 4
// Напиши класс StringBuilder. 
// На вход он получает один параметр 
// - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value

// Метод append(str) - получает парметр str (строку) и 
// добавляет ее в конец _value

// Метод prepend(str) - получает парметр str (строку) и 
// добавляет ее в начало value

// Метод pad(str) - 
// получает парметр str (строку) и 
// добавляет ее в начало и в конец _value */

// class StringBuilder {
//     constructor(str) {
//         this.value = str;
//     }
//     get newValue() {
//         return this.value;
//     }
//     append(str) {
//         return this.value += str;
//     }
//     prepend(str) {
//         return this.value = str + this.value;
//     }
//     pad(str) {
//         return this.value = str + this.value + str;
//     }
// }

// const builder = new StringBuilder('.');

// console.log(builder.value);

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// //builder.append('^').prepend('^').pad('=');
// //console.log(builder.value);
//_______________________________________________________________

/**
 * Задание 5
Напиши класс Car с указанными свойствами и методами. */

/*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения 
   * свойств maxSpeed, speed, isOn, distance и price.
   */

   /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, 
   * значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */

   /*
    * Добавь геттер и сеттер для свойства price,
    * который будет работать с свойством цены автомобиля.
    */

    /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */

    /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */

   /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */

   /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */

   /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */

   //!!!***Вариант решения 1
// class Car {
//     static getSpecs({maxSpeed,speed,isOn,distance,price}) { // arguments distracturing
    
//     console.log(`maxSpeed: ${maxSpeed}, 
//                 speed: ${speed}, isOn: ${isOn}, 
//                 distance: ${distance}, price: ${price}`);
//     }
//     constructor({speed=0,price,maxSpeed,isOn=false,distance=0}) {
//         this.speed = speed;
//         this._price = price;
//         this.maxSpeed = maxSpeed;
//         this.isOn = isOn;
//         this.distance = distance;
//     }
//     get price() {
//        return this._price;
//     }
//     set price(value) {
//         this._price = value;
//     }
//     turnOn() {
//         this.isOn = true;
//     }
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
//     }
//     accelerate(value) {
//         let resultSpeed = this.speed + value;
//         if (resultSpeed <= this.maxSpeed) {
//             this.speed = resultSpeed;
//         } else {
//             this.speed = this.maxSpeed;
//         }
//     }
//     decelerate(value) {
//       let resultSpeed = this.speed - value;
//     if (resultSpeed >= 0) {
//       this.speed = resultSpeed;
//     } else {
//       this.speed = 0;
//         }
//     }
//     drive(hours) {
//         if (this.isOn === true) {
//           this.distance += hours * this.speed
//         }
//     }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
//.......................................................................................

//!!!***Вариант решения 2 (Вера Корзун)

// class Car {
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
//   }

//   constructor(obj) {
//     console.log(obj);
//     this.maxSpeed = obj.maxSpeed;
//     this.speed = 0;
//     this.isOn = false;
//     this.distance = 0;
//     this._price = obj.price;
//   }

//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   accelerate(value) {
//     let resultSpeed = this.speed + value;
//     if (resultSpeed <= this.maxSpeed) {
//       this.speed = resultSpeed;
//     } else {
//       this.speed = this.maxSpeed;
//     }
//   }

//   decelerate(value) {
//     let resultSpeed = this.speed - value;
//     if (resultSpeed >= 0) {
//       this.speed = resultSpeed;
//     } else {
//       this.speed = 0;
//     }
//   }
//   drive(hours) {
//     if (this.isOn === true) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
//.......................................................................................

//!!!***Вариант решения 3 (Света)

// class Car {
//     static getSpecs({ maxSpeed, speed, isOn, distance, price }) { // arguments distracturing
//         console.log(
//             `maxSpeed- ${maxSpeed}, speed- ${speed}, isOn- ${isOn}, distance- ${distance}, price- ${price}`
//         );
//     }
//     constructor({ speed: speed = 0, price, maxSpeed, isOn: isOn = false, distance }) {
//         this.speed = speed;
//         this._price = price;
//         this.maxSpeed = maxSpeed;
//         this.isOn = isOn;
//         this.distance = distance;
//     }
//     get price() {
//         return this._price;
//     }
//     set price(value) {
//         this._price = value;
//     }
//     turnOn() {
//         this.isOn = true;
//     }
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0
//     }
//     accelerate(value) {
//         let accelerateSpeed = this.speed + value;
//         this.speed = (accelerateSpeed < this.maxSpeed) ? accelerateSpeed : this.maxSpeed;
//         return this.speed
//     }
//     decelerate(value) {
//         let deAxelerate = this.speed - value;
//         this.speed = (deAxelerate > 0) ? deAxelerate : 0;
//         return this.speed
//     }

//     drive(hours) {
//         this.isOn ? (this.distance += hours * this.speed) : 0;
//         // console.log(this)
//         // if (this.isOn) {
//         //     this.distance += hours * this.speed;
//         //     // console.log(this)
//         // }
//     }
// }

// // const mustang = new Car({ maxSpeed: 200, price: 2000 });
// const mustang = new Car({ maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000 });

// // let car = { maxSpeed: 200, speed: 150, isOn: true, distance: 100, price: 2000 }

// mustang.turnOn();
// // console.log(mustang.accelerate(55));
// // console.log(mustang.decelerate(30))
// mustang.drive(1)

//     // mustang.turnOn();
//     // mustang.accelerate(50);
//     // mustang.drive(2);

//     // Car.getSpecs(mustang);
//     // // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

//     // mustang.decelerate(20);
//     // mustang.drive(1);
//     // mustang.turnOff();

//     // Car.getSpecs(mustang);
//     // // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

//     // console.log(mustang.price); // 2000
//     // mustang.price = 4000;
//     // console.log(mustang.price); // 4000