/**
 * Задание 1
Напиши функцию delay(ms), 
которая возвращает промис, 
переходящий в состояние "resolved" через ms миллисекунд. 
Значением исполнившегося промиса должно быть 
то кол-во миллисекунд которое передали во время 
вызова функции delay.*/

// const delay = ms => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ms)
//     }, ms)

//   })
//   return promise
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


//=========================EXAMPLES=====================
// let randomNum = Math.floor(Math.random() * (10 - 1) + 1);

// const myPromise = new Promise((resolve, reject) => { 
//   if (randomNum < 5) {
//     resolve('success')
//   }
//   else {
//      reject('error')
//   }

// })

// myPromise.then((result) => console.log(result))
//   .catch((err) => { console.log(err);})


// myPromise.then((result) => {
//   console.log(result);
// })
// myPromise.catch((err) => {
//   console.log(err);
// })
//======================================================

/**
 * Задание 2
Перепиши функцию toggleUserState() так, 
чтобы она не использовала callback-функцию callback, 
а принимала всего два параметра allUsers и userName 
и возвращала промис. */

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
 //=====================================

 
/**
 * Переключатель цветов
Есть массив цветов в hex-формате и кнопки Start и Stop.

<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

Напиши скрипт, который после нажатия кнопки Start, 
раз в секунду меняет цвет фона body на случайное значение 
из массива используя инлайн-стиль. При нажатии на кнопку Stop, 
изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), 
используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
 */

 const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const bodyRef = document.querySelector("body");
const startRef = document.querySelector('[data-action="start"]');
const finishRef = document.querySelector('[data-action="stop"]');

let timerId;
const switchColor = () => {

    timerId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        startRef.disabled = true;
        finishRef.disabled = false;
    }, 1000)
}



startRef.addEventListener("click", switchColor);
finishRef.addEventListener("click", () => {
    clearInterval(timerId);
    startRef.disabled = false;
    finishRef.disabled = true;
});
//==================================

//======================

//  const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// class SwitchClass {
//   constructor(arrColors, {startBtn, stopBtn, bodyRef}) {
//     this.arrColors = arrColors;
//     this.bodyRef = bodyRef;
//     this.startBtn = startBtn;
//     this.stopBtn = stopBtn;
//     this.timerId = null;
//   }
//   beginStart() {
//     this.timerId = setInterval(() => {
//       this.bodyRef.style.backgroundColor = this.arrColors[this.randomIntegerFromInterval(0, this.arrColors.length - 1)]
//       this.startBtn.disabled = true;
//       this.stopBtn.disabled = false;
//     }, 1000)
//   }
//   init() {
//     this.startBtn.addEventListener('click', this.beginStart.bind(this))
//     this.stopBtn.addEventListener('click', this.clearStop.bind(this))
//   }
//   clearStop()  {
//     clearInterval(this.timerId)
//     this.startBtn.disabled = false;
//     this.stopBtn.disabled = true;
//   }
//   randomIntegerFromInterval (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// }
// const refs = {
//   startBtn: document.querySelector('[data-action="start"]'),
//   stopBtn: document.querySelector('[data-action="stop"]'),
//   bodyRef: document.querySelector('body'),
// }

// const colorSwitch = new SwitchClass(colors, refs);
// colorSwitch.init()

//======================

