

// 1. Сделайте функцию func, 
//которая будучи вызвана вот так: func(2)(3)(4), 
//вернет сумму переданных в параметры чисел.

// function func(a) {
//     console.log(a);
//     return function (b) {
//         console.log(b);
//         return function (c) {
//             console.log(c);
//             return a + b + c;
//         }
//     }
// }
// const result = func(2)(3)(4); 
//console.log(result);

// 2. Сделайте функцию func, 
//которая будучи вызвана вот так: func(2)(3)(4)(5)(), 
//вернет массив переданных в параметры чисел.

//var_3*
// *function pusher(...par) {
//     //array.push(par);
//     //console.log(par);
//     return par;
// }


// function func(a) {
//     //const arr = [];
//     //pusher[arr, a];

//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function () {
//                     //var_1
//                     // arr.push(a, b, c, d)
//                     // return arr;
//                     //var_2
//                     return [a,b,c,d]
//                     //*return pusher(a, b, c, d);
//                 }
//             }
//         }
//     }
// }
// const result = func(2)(3)(4)(5)();
// console.log(result);

// 3. Реализуйте счетчик вызова функции, 
//работающий на замыканиях. 

// const addOne = function (num = 0) {
//     //let num = 0;
//     return function (step = 1) {
//         // return num += 1;
//         return num += step;
//     }
// }
// const counter = addOne();
// console.log(counter(-1));
// console.log(counter());
// console.log(counter());

// //Additionally - Дополнительно
// const oneMoreCounter = addOne(50);
// console.log(oneMoreCounter());
// console.log(oneMoreCounter());
// console.log(oneMoreCounter());

// 4. Пусть функция в замыкании хранит число 10. 
//Сделайте так, чтобы каждый вызов функции уменьшал 
//это число на 1 и выводил на экран уменьшенное число.
// 5. Модифицируйте предыдущую задачу так, 
//чтобы отсчет доходил до 0, а затем 
//каждый последующий вызов функции выводил на экран 
//сообщение о том, что отсчет окончен.

//***!!!!Объединили 4 и 5
// function createCounter(num = 10) {
//     return function (step = -1) {
//         //return !num ? 'отсчет окончен' : num += step;
//         //return num === 0 ? 'отсчет окончен' : num += step;
//         return num ? num += step : 'отсчет окончен';
//     }
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 6. Сделайте объект с тремя функциями, 
//каждая из которых будет принимать 
//параметром массив с числами.Сделайте так, 
//чтобы первая функция возвращала сумму элементов 
//массива, вторая функция - сумму квадратов, 
//а третья - сумму кубов.

// const obj = {
//     pow(arr, exp) {
//         let sumPlus = 0;
//         for (const elem of arr) {
//             sumPlus += Math.pow(elem, exp);
//         }
//         return console.log(sumPlus);
//     },
//     sum(arr, func) {
//         return func(arr, 1); // func - callback
//         //this.pow(arr, 1);
//     },
//     square(arr) {
//         this.pow(arr, 2);
//     },
//     triple(arr) {
//         this.pow(arr, 3);
//     },
// };
// obj.sum([1, 2, 3], obj.pow); // obj.pow - callback
// obj.square([1, 2, 3]);
// obj.triple([2, 3]);

// *** 7. Создайте функцию высшего порядка cartCounter(), 
//в которой будет реализован функционал увеличения или 
//уменьшения количества выбраного товара в корзине 
//в зависимости от передаваемого id товара.
//Используйте механизм замыкания для решения задачи.

// const cart = {
//     products: [
//         {
//             id: 1,
//             name: "Milk",
//             price: 20,
//             quantity: 1
//         },
//         {
//             id: 2,
//             name: "Juice",
//             price: 30,
//             quantity: 2
//         },
//         {
//             id: 3,
//             name: "Fresh juice",
//             price: 40,
//             quantity: 3
//         }
//     ]
// }

// function cartCounter(quantity) {
//     return function (step = 1) {
//         return quantity += step;
//     }
// }

// function findProductById(arr, id) {
//     for (const product of arr) {
//         if (product.id === id) return product;
//     }
// }
// //console.log(findProductById(3));

// function getValue(arr, id) {
//     const elemProduct = findProductById(arr, id);
//     const counter_1 = cartCounter(elemProduct.quantity);
//     console.log(counter_1());
//     console.log(counter_1());
//     console.log(counter_1());
// }
// getValue(cart.products, 2);

//const counter_1 = cartCounter(cart.products[0].quantity);
// console.log(counter_1());
// console.log(counter_1());
// console.log(counter_1());

// 8. В примере выше создайте методы, 
//которые будут логировать данные всех продуктов массива.

//***!!!!Незаконченная задача

// const cart = {
//     products: [
//         {
//             id: 1,
//             name: "Milk",
//             price: 20,
//             quantity: 1
//         },
//         {
//             id: 2,
//             name: "Juice",
//             price: 30,
//             quantity: 2
//         },
//         {
//             id: 3,
//             name: "Fresh juice",
//             price: 40,
//             quantity: 3
//         }
//     ]

// }

// function findProductById(arr, id) {
//     for (const product of arr) {
//         if (product.id === id) return product;
//     }
// }
// //console.log(findProductById(3));

// function logger(counter, product) {
//     product.quantity = counter();
//     console.group(`${product.name}:`)
//     console.log(`Name: ${product.name}`);
//     console.log(product.price);
//     console.log(product.quantity);
//     console.groupEnd()
// }

// function getValue(counter, id) {
//     const elemProduct = findProductById(arr, id);
//     const counter = cartCounter(elemProduct.quantity);
//     logger(counter, product);
// }
// getValue(cart.products, 2);
