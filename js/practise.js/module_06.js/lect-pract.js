// Дан массив с числами.
//Используя метод map извлеките из каждого
//элемента массива квадратный корень и
//запишите результат в новый массив.

// const arr = [
//     { name: 'number 1', value: 9 },
//     { name: 'number 2', value: 16 },
//     { name: 'number 3', value: 4 },
//     { name: 'number 4', value: 25 }
// ];

//const result = arr.map(item => Math.sqrt(item.value));
//const result = arr.map(({value})=> Math.sqrt(value));
//console.log(result); // [3,4,2,5]

// =======================================
// Дан массив со строками.
//Используя метод map в конец значению
//каждого элемента массива добавьте символ '!'.

// const str = arr.map(item => {
//     return {...item, name: item.name + '!'}
// })
// console.log(str);
/**
 * (4) [{…}, {…}, {…}, {…}]
0: {name: "number 1!", value: 9}
1: {name: "number 2!", value: 16}
2: {name: "number 3!", value: 4}
3: {name: "number 4!", value: 25}
 */

// =======================================

//Дан массив со строками.
//Используя метод map переверните символы
//каждой строки в обратном порядке.

// const str = ['Margo', 'Sveta', 'Vera', 'Vika'];

// const arr = str.map(item => {
//     //return [...item].reverse().join('')
// });
// console.log(arr);

// =======================================

// Дан следующий массив:
// let arr = ['123', '456', '789'];

// const result = arr.map(item => {
//     return
//     //[...item].map(Number);
//     //[...item].map(item => Number(item))
// })
// console.log(result);

// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ];

// =======================================
// Дан массив с числами.
//Используя метод map запишите в каждый элемент
//массива значение этого элемента,
//умноженное на его порядковый номер в массиве.

// const numbers = ['123', '456', '789', '13', '45'];

// const result = numbers.map((item,index) => Number(item)*(index+1))
// console.log(result);

// =======================================
// Дан массив с числами.
//Оставьте в нем только положительные числа.

// const nums = [5, -9, 7, -1, 0];
// const result = nums.filter(num => num >= 0)
// console.log(result); //  [5, 7, 0]

// =======================================
//Дан массив с числами.
//Оставьте в нем только числа,
//которые больше нуля, но меньше 10.

// const nums = [11, 5, -9, 7, -10, 9, 0, 15];
// const result = nums.filter(num => num > 0 && num < 10)
// console.log(result); //[5, 7, 9]

// =======================================

//Дан массив со строками.
//Оставьте в нем только те строки,
//длина которых больше 5 - ти символов.

// const str = ['Margo', 'Valentina', 'Sveta', 'Vera', 'Viktor'];

// const result = str.filter(item => item.length > 5)
// console.log(result);

// ==========================================
//Дан массив с числами.
//Оставьте в нем только те числа,
//произведение которых на их порядковый номер меньше 30.

// const nums = [11, 5, -9, 7, -10, 9, 0, -15]

// const result = nums.filter((num, index) => num * (index + 1) < 30)

// console.log(result)

// ==========================================
// Дан массив, в нем могут быть обычные элементы
//и подмассивы, например [1, 2, [3, 4], 5, [6, 7]].
//Оставьте в нем только обычные элементы.

// const nums = [1, 2, [3, 4], 5, [6, 7]]

// const result = nums.filter(item => 
//     item.constructor.name === "Number");

// console.log(result);

// ==========================================

//Дан массив с числами.
//Посчитайте количество отрицательных чисел в этом массиве.
// =========================================
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// =========================================
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
// =========================================
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
// =========================================
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
// =========================================
// const headerNavigation = [
//   {
//     name: "Home",
//     path: "/home",
//   },
//   {
//     name: "About",
//     path: "/about",
//   },
//   {
//     name: "Contacts",
//     path: "/contacts",
//   },
//   {
//     name: "Sign In",
//     path: "/signin",
//   },
//   {
//     name: "Sign Up",
//     path: "/signup",
//   },
//   {
//     name: "Logout",
//     path: "/logout",
//   },
// ];
// Напишите функцию:
// 1. которая в качестве параметров будет принимать указаннный массив объектов:
// 2. которая возвращает разметку формата
// '<li>
//     <a href="http://">
//     </a>
// </li>' для каждого из элементов массива
// =========================================

// const products = [
//   {
//     id: "1",
//     name: "Kiwi",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, at?",
//   },
//   {
//     id: "2",
//     name: "Rom",
//     description: "Lorem, ipsum dolor sit amet",
//   },
//   {
//     id: "3",
//     name: "Bread",
//     description: "Lorem, ipsum dolor sit amet consectetur Temporibus, at?",
//   },
// ];
// const cart = [];

// Напишите функцию, 
//которая будет добавлять элемент в массив cart 
//и создавать ему дополнительное свойство quantity равное 1.

// const addToCart = (arr, id) => {
//     const elem = arr.find(item => item.id === id)
//     elem.quantity = 1;
//     return cart.push(elem)
// };

// addToCart(products, '3');
// console.log(cart);

//__________________________________________________________
// Напишите функцию, которая будет удалять элемент 
//из массива cart по id

// const delFromCart = id => {
//     return cart.filter(item => item.id !== id)
// }
// console.log(delFromCart('3'));

//_______________________________________
// Напишите функцию, которая будет добавлять 
//количество товаров (свойство quantity) на единицу

// const addToCart = (arr, id) => {
//     const elem = arr.find(item => item.id === id)
//     elem.quantity = 1;
//     return cart.push(elem)
// };

// addToCart(products, '3');
// addToCart(products, '2');
// //console.log(cart);

// const addQuantity = (id) => {
//     const product = cart.find(item => item.id === id)
//     product.quantity  += 1
//     console.log(product);
// }
// addQuantity('3')
// addQuantity('3')

// const decrQuantity = id => {
//     const product = cart.find(item => item.id === id)
//     if (product.quantity < 1) {
//         return;
//     } else product.quantity -= 1;
// };
// decrQuantity('3')
// decrQuantity('3')
// console.log(cart);

//___________________________________________
// Напишите функцию, которая будет 
//фильтровать массив products по названию товара

// const filterByName = (arr, name) => { 
//     return arr.filter(item => item.name.toLowerCase().includes(name.toLowerCase()) )
// };
// console.log(filterByName(products, 'suGar'));
// filterByName(products, sugar)

//_______________________________________________
// Напишите функцию, которая будет 
//возвращать разметку формата, 
//пригодного для отображения информации о товаре 
//в модальном окне.Обязательно добавить кнопки 
//добавления товара и записать в них id товара

// const creatMarkup = () => {
//     return cart.reduce((acc, item) => {
//         acc += `
//         <li>
//             <h2>${item.name}</h2>
//             <p>
//               ${item.description} 
//             <button type="button" data-id = '${item.id}'>add+</button>
//             <button type="button" data-id = '${item.id}'>add-</button>
//             </p>
//           </li>`
//         return acc
//     }, '') 
// }

// const result = creatMarkup();
// console.log(result);


//____________________________________________________
// Модифицируйте функцию, которая добавляет элемент 
//в массив cart, при этом использует id  
//для поиска элемента в массиве products 
//и если он совпадает - добавляет объект 
//с дополнительным свойством quantity

