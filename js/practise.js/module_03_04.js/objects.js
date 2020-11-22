// Объекты
// ==============================================================================

/**
 * const products = [
  {
    id: "1",
    name: "milk",
    value: "Молоко",
    price: 20,
    sale: true,
    quantity: 10,
  },
  {
    id: "2",
    name: "water",
    value: "Вода",
    price: 10,
    sale: false,
    quantity: 50,
  },
  {
    id: "3",
    name: "juice",
    value: "Сок",
    price: 34,
    sale: true,
    quantity: 24,
  },
  {
    id: "4",
    name: "fruitDrink",
    value: "Морс",
    price: 32,
    sale: true,
    quantity: 25,
  },
  {
    id: "5",
    name: "milkShake",
    value: "Молочный коктейль",
    price: 37,
    sale: false,
    quantity: 37,
  },
];
 */


// 1. Создайте функцию getSaleProducts(), 
//которая вернет новый массив 
//со свойством sale равным true.

// function getSaleProducts(array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop]) {
//             arr.push(item);
//         }
//     }
//     return arr;
// }
// console.log(getSaleProducts(products, 'sale'));

// 2. Создайте функцию getProductsName(), 
//которая вернет новый массив со всеми 
//названиями продуктов на русском языке.

// function getProductsName(array) {
//     const arr = [];
//     for (const item of array) {
//         //console.log(item);
//         arr.push(item.value);
//     }
//     return arr;
// }
// console.log(getProductsName(products)); 

// 3. Создайте функцию getTotalQuantity(), 
//которая вернет общую сумму всех 
//товаров на складе(свойство quantity).

// function getTotalQuantity(array) {
//     let sum = 0;
//     for (const item of array) {
//         //console.log('item :>> ', item);
//         sum += item.quantity;
//     }
//     return sum;
// }
// const result = getTotalQuantity(products); 
// console.log(result);


// 4. Создайте функцию getProductById(), 
//которая будет возвращать продукт по id.

// function getProductById(array, id) {
//     for (const arrItem of array) {
//        // console.log(arrItem);
        
//         if (arrItem.id === id) {
//             return arrItem;
//         }
//     }
// }
// const result = getProductById(products, '5');
// console.log(result);

// 5. Создайте функцию deleteProductById(), 
//которая будет удялять из исходного 
//массива products товар по id.

// function deleteProductById(array, prop, val) {
//     for (const item of array) {
//         if (item[prop] === val) {
//             //console.log(item);
//             array.splice(array.indexOf(item), 1)
//             //delete.item.id
//         }
//     } 
//     return array;
// }
// console.log(deleteProductById(products, 'id', '4')); 

// 6. Создайте функцию createProduct(), 
//которая будет добавлять новый продукт 
//в исходный массив products.
//Товар передается в функцию в виде объекта

// function createProduct(array, newObject) {
//     array.push(newObject);
// }
// const coffee = {id: '6', name: 'coffee', price: 35, sale: false, quantity: 27,}
// createProduct(products, coffee)
// console.log(products);

//var2!!!!

// const object = {
//     id: "100",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
// };

// const addNewProduct = (array, newObject) => {
//     return [...array, { id: '${array.length +1}', ...newObject, }];
// }
// const result = addNewProduct(products, object)
// const arr = addNewProduct(result, object);
// console.log(arr);

// 7. Создайте функцию findProductByName(), 
//которая будет возвращать объект из массива products 
//в зависимости от передаваемого значения name или value.

// const findProductByName = (arr, option) => {
//     for (const item of arr) {
//         if (item.name === option || item.value === option) {
//             return item;
//         }
//     }
// }
// console.log(findProductByName(products, "Морс")); 

//var2
// const findProduct = (arr, prop) => {

//     for (const {name, value, id} of arr) {
//         //const {name, value} = item;
//         console.log(name, value);

//         if (name === prop || value === prop) {
//              return{name, value, id};
//         }
//     }
// }
// findProduct(products, "Морс"); 

// 8. Создайте функцию editProduct(), 
//которая будет изменять объект products.
//В качестве аргументов, в функцию будут передаваться id, 
//а также ключ и его значение, которое нужно перезаписать.

// 9. Создайте функцию modifyProductList(), 
//которая будет возвращать новый массив с продуктами 
//у которых будут только свойства id, name, value и price

// const modifyProductList = (arr) => {
//     const newArr = []
// for (const {id, name, value, price} of arr) {
//         newArr.push({id, name, value, price})
//     }
//     return newArr;
// };
// console.log(modifyProductList(products));

// 10. Создайте функцию addToCart(), 
//которая будет записывать товар по id в новый массив cart.
                 







