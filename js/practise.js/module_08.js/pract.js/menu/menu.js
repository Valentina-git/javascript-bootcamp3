/**
 * <ul class="">
        <li class="item"><a class="link" href="/">Home</a></li>
        <li class=""><a href="/about">About</a></li>
        <li class=""><a href="/cart">Cart</a></li>
        <li class=""><a href="/favorites">Favorites</a></li>
        <li class=""><a href="/login">Login</a></li>
    </ul> 
 */

let items = ['Home', 'About', 'Cart', 'Favorites', 'Login'];
const root = document.querySelector('#root');
const btn = document.querySelector('button');
const list = document.createElement('ul');
list.classList.add('hide');

const createLi = (text) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.classList.add('item');
    a.classList.add('link');
    a.href = `/${text.toUpperCase()}`;
    a.textContent = text[0].toUpperCase() + text.slice(1);
    li.append(a)
    return li
}

let menu = items.map((menuItem) => {
    return  createLi(menuItem)
})

list.append(...menu);
root.append(list)
console.log(root);

btn.addEventListener('click', toggleMenu)

function toggleMenu() {
    list.classList.toggle('show');
}

//+++++++++++++++++++++++++++++++++++++++++

/**
 * const items = ['Home','About','Cart','Favorites','Login'];

let root=document.querySelector("#root")
let btn=document.querySelector("#root button")
// console.log(root);
// console.log(btn);

let createUl=document.createElement("ul");
createUl.classList.add('hide');
//console.log(root);

const createLi=function(item){
    let itemLi=document.createElement("li");
    let itemA=document.createElement("a");
    
    itemLi.classList.add('item');
    itemA.classList.add('link');
    itemA.href=`/${item.toLowerCase()}`;
    itemA.textContent=item;

    itemLi.append(itemA);
    createUl.append(itemLi);
}

items.forEach(createLi);
root.append(createUl);
//console.log(createUl);
console.log(root);

const toggleMenu= function(event) {
    if (event.target) {
        createUl.classList.toggle('hide');
        //createUl.classList.add('show');
    }
}

btn.addEventListener('click', toggleMenu)
 */