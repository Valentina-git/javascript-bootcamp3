'use strict';

// Task first

// const name = '«Генератор защитного поля»'; // Write code on this line
//  let price = 1000; // Write code on this line
//  const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; 
// // Write code on this line
// price = 2000;
//  const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line


//   console.log(firstMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'
//   console.log(secondMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

////////////////////////////////////////////////////////////////////////////////////

// Task second

// const invoice = 100; 
// const stock = 100;

// // Write code under this line
// const message = stock >= invoice  ? `Заказ оформлен, с вами свяжется менеджер` : `На складе недостаточно товаров!`;
// console.log(message);


//console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'  

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'  

////////////////////////////////////////////////////////////////////////////////////

// Task third

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// if (userPassword === ADMIN_PASSWORD) {
// 	message = ACCESS_IS_ALLOWED;
//   console.log(message);
// } else if (userPassword === null) {
// 	message = CANCELED_BY_USER;
//   console.log(message);
// } else {
//   	message = ACCESS_DENIED;
//   console.log(message);
// }

// console.log(message);


//если userPassword равно 'jqueryismyjam' 
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null 
// то значение message будет равно  
// 'Отменено пользователем!'

//если userPassword равно '123' 
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'
	
////////////////////////////////////////////////////////////////////////////////////

// Task fourth

// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = credits - pricePerDroid; // Write code on this line
// let balanceCredit = credits - (orderPieces * pricePerDroid); // Write code on this line
// let message;

// // Write code under this line
// if (orderPieces === 0) {
//   	message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
//     console.log(message);
// } else if (orderPieces === 1) {
// 	message = `Вы купили ${orderPieces} дроидов, на счету осталось ${totalPrice} кредитов`;
//   console.log(message);
// } else if (orderPieces === 4) {
// 	message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
//     console.log(message);
// } else if (orderPieces === null) {
// 	message = CANCELED_BY_USER;
//   	console.log(message);
// } else if (orderPieces === 7) {
//   	message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
//   	console.log(message);
// } else if (orderPieces >= 8) {
//   	message = ACCESS_DENIED;
//   	console.log(message);
// } else {
// 	message = CANCELED_BY_USER;
//   	console.log(message);
// }

//  console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

////////////////////////////////////////////////////////////////////////////////////

// Task fifth

// const countryName = "КитаЙ";

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;

// if (countryName === null) {
//   message = CANCELED_BY_USER;
//   console.log(message);
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  
//   switch (country) {
//   // Write code under this line
//     case CHINA:
//       price = `100`;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     console.log(message);
//       break;
      
//     case AUSTRALIA:
//       price = `170`;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       console.log(message);
//       break;
      
//     case INDIA:
//       price = `80`;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       console.log(message);
//       break;
      
//     case JAMAICA:
//       price = `120`;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     console.log(message);
//       break;
      
//     default:
//       message = NO_DELIVERY;
//     console.log(message);
//       break; 
//   }
// }
// if (countryName === country) { 
//   console.log = (messege);
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

////////////////////////////////////////////////////////////////////////////////////