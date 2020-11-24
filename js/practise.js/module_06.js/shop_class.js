import people from './peoples.js'

console.log(people);

{/* <ul class="list">
        <li class="list_item"></li>
        <li class="list_item"></li>
        <li class="list_item"></li>
        <li class="list_item"></li>
</ul> */}

// [].methodName(function (element, index, array) {
// })

// [].reduce(function (acc, element, index, array) {   
// }, '', [], {}, 0, Boolean)

//task_01***вывести на штмл страницу имя, возраст, бюджет,isComplete

// people.forEach((person) => {
//     let html = ''
//     window.onload = () => {
//          html = `
//         <ul class="list">
//             <li class="list_item">name: ${person.name}</li>
//             <li class="list_item">age: ${person.age}</li>
//             <li class="list_item">budget: ${person.budget}</li>
//             <li class="list_item">isComplete: ${person.isComplete}</li>
//         </ul>
//         `;
//         return document.body.innerHTML = html;
//     }
// });
//__________________________________________________

//!!!***shop

// const generateId = function () {
//   const randomNumber = Math.random();
//   return randomNumber.toString().slice(3);
// };
// // console.log(generateId());

// // CRUD

// const shop = {
//   name: "Fruits Store",
//   address: "Kiev",
//   items: [
//     { id: 1, name: "bananes", price: 25, amount: 200, category: "fruits" },
//     { id: 2, name: "apples", price: 32, amount: 150, category: "fruits" },
//     { id: 3, name: "tomato", price: 50, amount: 100, category: "vegetables" },
//     { id: 4, name: "potato", price: 10, amount: 500, category: "vegetables" },
//   ],
//   showItems() {
//     for (const item of this.items) {
//       const { id, name, price, amount, category } = item;
//       console.log(
//         `Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount} Category: ${category}`
//       );
//     }
//   },
//   addItem(name, price, amount, category) {
//     const item = {
//       id: generateId(),
//       name,
//       price,
//       amount,
//       category,
//     };
//     this.items.push(item);
//   },
//   removeItem(productName) {
//     // for (const item of this.items) {
//     //     if (item.name === productName) {
//     //         const index = this.items.indexOf(item);
//     //         this.items.splice(index, 1)
//     //     }
//     // }
//     let itemsLength = this.items.length;
//     for (let i = 0; i < itemsLength; i += 1) {
//       if (this.items[i].name === productName) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   updateItem(productName, newName) {
//     let itemsLength = this.items.length;
//     for (let i = 0; i < itemsLength; i += 1) {
//       if (this.items[i].name === productName) {
//         this.items[i].name = newName;
//       }
//     }
//   },
// };

// // shop.showItems();
// // shop.addItem('strawberry', 200, 50, 'fruits');
// // // shop.showItems();
// shop.removeItem("potato");
// // shop.showItems();
// shop.updateItem("bananes", "baby-bananes");
// shop.showItems();

//------------------------------------------------------------

// CRUD - creat, read, update, delete

class Shop {

    #shopItems

    constructor(name, address, items) {
        this.#shopItems = items;
        this.name = name;
        this.address = address;
        // this.items = items;
    }
    #generateId = function () {
    const randomNumber = Math.random();
    return randomNumber.toString().slice(3);
    }
    showItems() {
     for (const item of this.#shopItems) {
       const { id, name, price, amount, category } = item;
       console.log(
         `Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount} Category: ${category}`
       );
     }
    }
    addItem(name, price, amount, category) {
      const item = {
        id: this.#generateId(),
        name,
        price,
        amount,
        category,
        };
     this.items.push(item);
    }
    removeItem(productName) {
     for (const item of this.#shopItems) {
         if (item.name === productName) {
             const index = this.#shopItems.indexOf(item);
             this.#shopItems.splice(index, 1)
         }
        }
        
    //  let itemsLength = this.#shopItems.length;
    //  for (let i = 0; i < itemsLength; i += 1) {
    //    if (this.#shopItems[i].name === productName) {
    //      this.#shopItems.splice(i, 1);
    //    }
    //  }
        
    }
    updateItem(productName, newName) {
     let itemsLength = this.#shopItems.length;
     for (let i = 0; i < itemsLength; i += 1) {
       if (this.#shopItems[i].name === productName) {
         this.#shopItems[i].name = newName;
       }
     }
    }
    findItem(itemName) { }
    sortByCategory(categoryName) { }
    showCart() { }
    updateCart() { }
    removeFromCart() {}
};

const items = [
     { id: 1, name: "bananes", price: 25, amount: 200, category: "fruits" },
     { id: 2, name: "apples", price: 32, amount: 150, category: "fruits" },
     { id: 3, name: "tomato", price: 50, amount: 100, category: "vegetables" },
     { id: 4, name: "potato", price: 10, amount: 500, category: "vegetables" },
]


const shop = new Shop('Fruits Store', 'Kiev', items); //instanse

//console.log(shop.generateId());
//console.log(shop.showItems());

console.log(shop.name);
console.log(shop.address);
console.log(shop.#shopItems);
