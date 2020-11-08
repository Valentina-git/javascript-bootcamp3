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


// Task third

const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

if (userPassword === 'jqueryismyjam' ) {
	message = 'Добро пожаловать!';
} else {
  	message = 'Отменено пользователем!';
} 

console.log(message);


//если userPassword равно 'jqueryismyjam' 
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null 
// то значение message будет равно  
// 'Отменено пользователем!'

//если userPassword равно '123' 
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'