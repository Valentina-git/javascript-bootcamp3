const cart = [
    { id: 1, title: 'Samsung', qty: 2 },
    { id: 2, title: 'Sony', qty: 7 },
    { id: 3, title: 'Nokia', qty: 6 },
    { id: 4, title: 'Iphone', qty: 7 },
    { id: 5, title: 'Motorolla', qty: 5 },
];

let ul = document.createElement('ul');
let div = document.getElementById('root')
let html = '';

cart.forEach((item) => {
   let {id, title, qty} = item
    html += `<li> id: ${id}, title: ${title}, qty: ${qty} </li>`
})

ul.innerHTML = html;
div.append(ul)
//______________________________________________

let ul = document.querySelectorAll(`ul`)[0].children;
console.log(ul.children);
console.log(ul);

let listArr = [...ul] 
console.log(listArr);

split.revearse.join

listArr.forEach((item) => {
    console.log(item.innerText);
    let str = item.innerText.split(",")
    const newStr = str[1].split(":")[1];
    console.log(newStr);
});
//_________________________________________________

//*создать div id="root" c с текстом 'Hello world'

let div = document.createElement('div');
let body = document.querySelector('body')

div.setAttribute('id', 'root');
div.innerText = 'Hello world';
body.append(div)

div.style.color = 'red';
div.style.fontWeight = 800;
div.style.fontSize = '60px';
body.style.background = 'green';