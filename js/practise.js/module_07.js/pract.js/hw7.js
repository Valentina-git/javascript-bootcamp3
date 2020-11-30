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

// items.forEach((listItem) => {
//   let h2 = listItem.querySelector('h2');
//   let li = listItem.querySelectorAll('li');

//   console.log(`Категория: ${h2.textContent}, Количество элементов: ${li.length}`);
  //console.log(`Категория: ${h2.innerText}`);
//})

// console.log(items); //NodeList(3) [li.item, li.item, li.item]
// console.log(`в списке ${items.length} категории`);

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
//_________________________________________________
// let ul = document.getElementById("ingredients");
// const list = document.createElement('ul');
// console.log(list);
// let html = '';

// ingredients.forEach((item) => {
//   html += `<li>${item}</li>`
//   return html
// })

// list.innerHTML = html;
// ul.append(list)

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

// let counterValue = 0;
// let value = document.getElementById('value')
// let btnIncrement = document.querySelector('[data-action="increment"]')
// let btnDecrement = document.querySelector('[data-action="decrement"]')


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
//   outputName.textContent = event.target.value
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
