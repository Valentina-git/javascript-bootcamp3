
//Написать ф-цию которая вывоит в консоль 
//случайное число от 1 до 9. !!!!*****Разминка

// const randomStudent = function () {
//   console.log(Math.random()*(10-1)+1);
// }
// randomStudent()
//________________________________________

/**
 * Задание 1
В HTML есть список категорий ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Животные</h2>

    <ul>
      <li>Кот</li>
      <li>Хомяк</li>
      <li>Лошадь</li>
      <li>Попугай</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукты</h2>

    <ul>
      <li>Хлеб</li>
      <li>Петрушка</li>
      <li>Творог</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технологии</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul>

Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
 */

// let ul = document.getElementById("categories");
// let items = ul.querySelectorAll(".item")

// console.dir(`В списке ${ul.children.length} категории` );

// items.forEach((listItem) => {
//   let h2 = listItem.querySelector('h2');
//   let li = listItem.querySelectorAll('li');

//   console.log(`Категория: ${h2.textContent}, Количество элементов: ${li.length}`);
//   //console.log(`Категория: ${h2.innerText}`);
// })

// //console.log(items); //NodeList(3) [li.item, li.item, li.item]
// //console.log(`в списке ${items.length} категории`);
//______________________________________

/**
 * let itemLi = document.querySelectorAll('.item')
console.log(`В списке ${itemLi.length} категории.`);
itemLi.forEach((item) => {
    let h2 = item.querySelector('h2');
    let li = item.querySelectorAll('li');
    console.log(`Категория: ${h2.textContent}\nКоличество элементов: ${li.length}`);
  })
 */

//____________________________________________
/**
 *Задание 2
В HTML есть пустой список ul#ingredients.
<ul id="ingredients"></ul>
В JS есть массив строк.

Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов 
используй document.createElement().
 */

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// =====================REDUCE==========
// const list = document.getElementById("ingredients")

// const listItem =  ingredients.reduce((acc, ingredient) => {
//     let li = document.createElement('li')
//     li.textContent = ingredient
//     acc.push(li)
//     return acc;
// }, [])

// console.log(listItem);
// list.append(...listItem)
// =======================MAP =======================
// let ulList = document.querySelector('#ingredients');

// const createElements = ingredients.map(ingredient => {
//     const createList = document.createElement('li');
//     createList.textContent = ingredient;
//     ulList.append(createList);
//     console.log(createList);
// })
// ========================END MAP===================

//=======================FOR EACH=====
// let itemUl=document.querySelector('#ingredients');

// const createLi=function(item){
//     const itemLi = document.createElement("li");
//     itemUl.append(itemLi);
//     itemLi.textContent = item;
// };

// ingredients.forEach(createLi);
// console.log(itemUl);
///======================= END FOR EACH=====

// let ul = document.getElementById("ingredients");
// let html = [];

// ingredients.forEach((item) => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   html.push(li)
// })
// ul.append(...html)

//____________________________________________________

/**
 * Задание 3
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery. <ul id="gallery"></ul>

Используй массив объектов images для создания тегов img 
вложенных в li. Для создания разметки используй шаблонные 
строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию 
вставки. 

!!!!!!!!Добавь минимальное оформление галереи флексбоксами 
или гридами через css-классы.*/

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

//=============reduce===============\\
// const ulRef = document.querySelector("#gallery");
// console.log(ulRef);
// const createLi = images.reduce((acc, imgObj) => {
//   const li = document.createElement("li");
//   li.classList.add("gallery__item");
//   const img = document.createElement("img");
//   img.classList.add("gallery__img");
//   // img.setAtribute("src", img.url);
//   // img.setAtribute("alt", img.alt);
//   img.src = imgObj.url;
//   img.alt = imgObj.alt;
//   li.append(img);
//   acc.push(li);
//   return acc;
// }, []);
// console.dir(createLi);
// ulRef.append(...createLi);
//========================================\\
//=================forEach============\\
// let markUp = "";
// const ulRef = document.querySelector("#gallery");
// console.log(ulRef);
// images.forEach((image) => {
//   markUp += `<li><img src=${image.url} 
//    alt = ${ image.alt } width = 300 /></li >`;
// });
// ulRef.insertAdjacentHTML("afterbegin", markUp);
//========================================\\
//==============================forEach
//   let getUl=document.querySelector('#gallery');

//   const createLi=function(item){
//     getUl.insertAdjacentHTML('afterbegin', '<li><img></li>');
//     let getLi=document.querySelector('#gallery li')
//     let getImg=document.querySelector('#gallery img');
//     getImg.setAttribute('src', item.url);
//     getImg.setAttribute('alt', item.alt);
//     getUl.setAttribute('class', 'list');
//     getLi.setAttribute('class', 'list__item');
//     getImg.setAttribute('class', 'list__item--img');
//   };
//   images.forEach(createLi)
//     console.log(getUl);
//=================map (+-)============\\

// const createImg = (images) =>
//   `<li><img src="${images.url}" 
//    alt = "${images.alt}"width = 300 /></li >`;
// const itemImg = images.map(createImg).join("");
// const galleryRef = document.querySelector("#gallery");
// galleryRef.insertAdjacentHTML("afterbegin", itemImg);
//================================================\\

//___________________________________________

/**
 * Задание 4
Счетчик состоит из спана и кнопок, 
которые должны увеличивать 
и уменьшать значение счетчика на 1.

Создай переменную counterValue 
в которой будет хранится текущее значение счетчика.
Создай функции increment(+1) и decrement(-1) для увеличения 
и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, 
вызовы функций и обновление интерфейса

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
 */

let counterValue = 0;
let value = document.getElementById('value')
let btnIncrement = document.querySelector('[data-action="increment"]')
let btnDecrement = document.querySelector('[data-action="decrement"]')


// function increment() {
//   counterValue += 1
//   value.textContent = counterValue;
//   console.log(counterValue);
// }

// function decrement() {
//    counterValue -= 1
//   value.textContent = counterValue;
//   console.log(counterValue);
// }

// btnIncrement.addEventListener('click', increment)
// btnDecrement.addEventListener('click', decrement)

//____________________________________

/**
 * Задание 5
Напиши скрипт который, при наборе текста в инпуте 
input#name-input (событие input), подставляет его 
текущее значение в span#name-output. Если инпут пустой, 
в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
 */

// let inputName = document.getElementById("name-input")
// //console.log(inputName);
// let outputName = document.getElementById("name-output")
// //console.log(outputName);

// inputName.addEventListener('input', (event) => {
//   //event.target.value === '' ? (outputName.textContent = 'Инкогнито') : (outputName.textContent = event.target.value)
//   
      //event.target.value
     // ? outputName.textContent = event.target.value
     // : outputName.textContent = 'Инкогнито'

//outputName.textContent = event.target.value
//   if (event.target.value === '') {
//     outputName.textContent = 'Инкогнито'
//   }
// })
//_______________________________

/**
 * Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, 
указывается в его атрибуте data-length.
Если введено подходящее количество, 
то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
} */

//let inputRef = document.getElementById("validation-input")

// console.log(inputRef.dataset);
// console.log(inputRef.dataset.length);

// inputRef.addEventListener("blur", (event) => {
//   const inputLength = event.target.value
//   if (inputRef.dataset.length == inputLength.length) {
//     inputRef.classList.add('valid')
//     inputRef.classList.remove('invalid')
//   } else {
//     inputRef.classList.add('invalid')
//     inputRef.classList.remove('valid')
//   }
  // console.log(event.target.value);
  // console.log('blur');
//})
//________________________________________________
/**
 * Задание 7
Напиши скрипт, который реагирует на изменение 
значения input#font-size-control (событие input) 
и изменяет инлайн-стиль span#text обновляя свойство 
font-size. В результате при перетаскивании ползунка 
будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
 */

// let refs = {
//     input: document.querySelector('#font-size-control'),
//     span: document.querySelector('#text'),
// }

// function changeFont() {
//     refs.span.style.fontSize = `${refs.input.value}px`
// }

// refs.input.addEventListener('input', changeFont);
//______________________
// const inputSize = document.querySelector('#font-size-control');
// const textSize = document.querySelector('#text');

// inputSize.addEventListener('input', onInput);
// function onInput() {
//     const size = inputSize.value;
//     textSize.style.fontSize = size + 'px';
// }
//__________________________________________


/**
 * Задание 8 - дополнительное, выполнять не обязательно
 * 
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и 
нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
 */

/**
 * let boxRefs = {
    div: document.getElementById('boxes'),
    input: document.querySelector('input[type="number"]'),
    renderButton: document.querySelector('button[data-action="render"]'),
    destroyButton: document.querySelector('button[data-action="destroy"]'),
};

let count;

boxRefs.input.addEventListener('change', (event) => {
    count = event.target.value;
    console.log('addEventListener change, ', count)
});

console.log('count global', count)

boxRefs.renderButton.addEventListener('click', () => {
    console.log('addEventListener click', count);
    createBoxes(count);
});

boxRefs.destroyButton.addEventListener('click', () => {
    destroyBoxes();
});

function createBoxes(amount) {
    console.log('createBoxes amount', amount);
    let size = 30;
    let colorBox = document.createElement('div');
    colorBox.style.width = size + 'px';
    colorBox.style.height = size + 'px';

    for (let i = 1; i <= amount; i += 1) {
        size += 10;
        let colorBox = document.createElement('div');
        colorBox.style.width = size + 'px';
        colorBox.style.height = size + 'px';
        let color = createRgb();
        colorBox.style.backgroundColor = color;
        boxRefs.div.append(colorBox);
    }
}

function createRgb() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function destroyBoxes() {
    boxRefs.div.innerHTML = '';
    boxRefs.input.value = '';
}
 */

//________________________________________________

/**
 * 'use strict';
const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.querySelector('input');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
const randomRGB = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
const createBoxes = () => {
  const boxNumber = Number(inputRef.value);
  let boxSize = 30;
  let string = '';
  for (let i = 0; i < boxNumber; i += 1) {
    const boxColor = randomRGB();
    string += `<div style="width: ${boxSize}px;height: ${boxSize}px; background-color: ${boxColor}"></div>`;
    boxSize += 10;
  }
  boxesRef.insertAdjacentHTML('beforeend', string);
};
const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};
btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
 */