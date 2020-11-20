//Task_01

// const generateId = function () {
//     const randomNumber = Math.random();
//     return randomNumber.toString().slice(3);
// }
// //console.log(generateId());

// //CRUD

// const shop = {
//     name: 'Fruits Store',
//     address: 'Kiev',
//     items: [
//         {id: 1, name: 'bananes', price: 25, amount: 200, category: 'fruits'},
//         {id: 2, name: 'apples', price: 32, amount: 150, category: 'fruits'},
//         {id: 3, name: 'tomato', price: 50, amount: 100, category: 'vegetables'},
//         {id: 4, name: 'potato', price: 10, amount: 500, category: 'vegetables'},
//     ],
//     showItems() {
//         for (const item of this.items) {
//             const { id, name, price, amount, category } = item;
//             console.log(`Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount}, Category: ${category}`);
//         }
//     },
//     addItem(name, price, amount, category) {
//         const item = {
//             id: generateId(),
//             name,
//             price,
//             amount,
//             category,         
//         }
//         this.items.push(item);
//     },
//     removeItem(productName) {
//         // for (const item of this.items) {
//         //     if (item.name === productName) {
//         //         const index = this.items.indexOf(item);
//         //         this.items.splice(index, 1);
//         //     }
//         // }
//         let len = this.items.length;
//         for (let i = 0; i < len; i += 1) {
//             if (this.items[i].name === productName) {
//                 this.items.splice(i, 1);
//             };
//         }
//     },
//     updateItem(productName, newName) {
//         let len = this.items.length;
//         for (let i = 0; i < len; i += 1) {
//             if (this.items[i].name === productName) {
//                 this.items[i].name = newName;
//             }
//         }
//     },
// };
// //shop.showItems();
// //shop.addItem('strawberry', 200, 50, 'fruits');
// shop.removeItem('potato');
// shop.updateItem('bananes', 'baby-bananes')
// shop.showItems();

//document.body.innerHTML = 'Hello world';
//______________________________________________

//Task_02

const generateId = function () {
    const randomNumber = Math.random();
    return randomNumber.toString().slice(3);
}
//console.log(generateId());

//CRUD

const shop = {
    name: 'Fruits Store',
    address: 'Kiev',
    items: [
        {id: 1, name: 'bananes', price: 25, amount: 200, category: 'fruits'},
        {id: 2, name: 'apples', price: 32, amount: 150, category: 'fruits'},
        {id: 3, name: 'tomato', price: 50, amount: 100, category: 'vegetables'},
        {id: 4, name: 'potato', price: 10, amount: 500, category: 'vegetables'},
    ],
    showItems() {
        for (const item of this.items) {
            const { id, name, price, amount, category } = item;
            console.log(`Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount}, Category: ${category}`);
        }
    },
    addItem(name, price, amount, category) {
        const item = {
            id: generateId(),
            name,
            price,
            amount,
            category,         
        }
        this.items.push(item);
    },
    removeItem(productName) {
        // for (const item of this.items) {
        //     if (item.name === productName) {
        //         const index = this.items.indexOf(item);
        //         this.items.splice(index, 1);
        //     }
        // }
        let len = this.items.length;
        for (let i = 0; i < len; i += 1) {
            if (this.items[i].name === productName) {
                this.items.splice(i, 1);
            };
        }
    },
    updateItem(productName, newName) {
        let len = this.items.length;
        for (let i = 0; i < len; i += 1) {
            if (this.items[i].name === productName) {
                this.items[i].name = newName;
            }
        }
    },
    displayToPage() {
        // window.onload = function () {
            let html = `
                <h1> ${this.name} </h1>
            <h2>${this.address} </h2>
            <h3>Catalogue</h3>
            <div class="container"></div>
                <ul class="list">
                <li class="list_item"></li>
                <li class="list_item"></li>
                <li class="list_item"></li>
                <li class="list_item"></li>
            </ul>
            `
            return document.body.innerHTML = html;
        //}
    },
    
};


// //shop.showItems();
// //shop.addItem('strawberry', 200, 50, 'fruits');
// shop.removeItem('potato');
// shop.updateItem('bananes', 'baby-bananes')
// shop.showItems();

//document.body.innerHTML = 'Hello world';