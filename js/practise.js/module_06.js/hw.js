
//import users from './users.js'
/**
 * Задание 10
Получить массив всех умений 
всех пользователей (поле skills), 
при этом не должно быть повторяющихся умений и 
они должны быть отсортированы в алфавитном порядке.*/

// const users = [
//     {
//       id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['football','box'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['bear', 'drugs', 'vodka', 'lsd', 'wiskey'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['music', 'drugs', 'vodka', 'windsurf', 'bushcraft'],
//       gender: 'male',
//       age: 24,
//     }
// ];

// const getSortedUniqueSkills = users => {
//     const newUsers = users.reduce((acc, user) => {
//         acc.push(...user.skills)
//         return acc;
//     }, [])

//     let set = new Set(newUsers)
//     let result = [...set]
//     result.sort()
//     return result;

    // const newUsers = users.reduce((acc, user) => {
    //     return  [...acc, ...user.skills]
    // }, [])
    // return newUsers;

    // const newUsers = users.reduce((acc, user) => 
    // [...acc, ...user.skills], [])
    // .sort()
    // .filter((skill, index, arr) => {return skill !== arr[index - 1]})
    //  return newUsers;

    
// }

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 
//'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 
//'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


//Разбирали что такое set
// const skills = [
//     'bear', 
//     'drugs', 
//     'vodka', 
//     'lsd', 
//     'wiskey', 
//     'vodka', 
//     'drugs'
// ];

// const set = new Set(skills);
// console.log(set);
    
//_______________________________________________


//import users from './users.js'

/**
 * Задание 3
Получить массив имен 
пользователей по полу (поле gender).*/

// const getUsersWithGender = (users, gender) => 
//     users.filter(user => gender === user.gender)
//     .map(user => user.name);

// console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 
//'Carey Barr', 'Blackburn Dotson' ]


const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['football','box'],
      gender: 'male',
      age: 37,
    },
    {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['bear', 'drugs', 'vodka', 'lsd', 'wiskey'],
      gender: 'female',
      age: 34,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['music', 'drugs', 'vodka', 'windsurf', 'bushcraft'],
      gender: 'male',
      age: 24,
    }
];

// [].arrayMethod((element, index, array) => {})

// const getUsersWithGender = (users, search) => {
//    return users.filter(({gender}) => gender === search)
//     .map(({name}) =>  name);
// }

// console.log(getUsersWithGender(users, 'male'));
// ["Moore Hensley", "Ross Vazquez"]



//reduce -------------------------------------------------------
// [].reduce((acc, element, index, array) => {}, ('', [], {}, 0, Boolean))


const getUsersWithGender = (users, gender) => () {
    reduce((resultArr, user) => acc.push)
 }
 
 console.log(getUsersWithGender(users, 'male'));
 // ["Moore Hensley", "Ross Vazquez"]

 let nums = [1,2,3,4,5];

 nums.reduce((acc,elem) => {},0)
 //________________________________________


 
import users from './users.js'
/**
 * Задание 9
Массив имен (поле name) людей, 
отсортированных в зависимости 
от количества их друзей (поле friends)*/


// const getNamesSortedByFriendsCount = users => {
//   return users.sort((user_1, user_2) => 
//   user_1.friends.length - user_2.friends.length)
//   .map(user => user.name )
// }


// const getNamesSortedByFriendsCount = users => {
//   return [...users]
//   .sort(({friends: friends_1},{friends: friends_2}) => 
//   {return friends_1.length-friends_2.length})
//   .map(({name}) => name)
// }

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
//'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 
//'Ross Vazquez' ]


//const numbers = [1,1000,11,2,24,0,3,30];
//numbers.sort((a,b) => {return a-b})
//numbers.sort((a,b) => {return b-a})
//console.log(numbers);

//______________________________________

/**
 * Задание 4
Получить массив только 
неактивных пользователей (поле isActive).*/

//import users from "./users.js"
// const getInactiveUsers = (users)  => users.filter(({isActive}) => !isActive );

// const getInactiveUsers = (users) => { 
//     let result = users.reduce((acc, user) => {
//         if (!user.isActive) {
           
//             acc.push(user)
//        }
//         return acc;
//    }, [])
//     return result;
// };
// console.log(getInactiveUsers(users)); 
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//__________________________________________________

// Задание 8
// Массив имен всех пользователей у которых есть
// друг с указанным именем.

// const users = [
//     {
//       id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Marilyn Mcintosh', 'Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     }
//   ];

// const getUsersWithFriend = (users, friendName) => {
 
// return users.filter(({friends}) => friends.includes(friendName))
// .map(({name}) => name)
// };

// const getUsersWithFriend = (users, friendName) => {
 
//     let namesArr = users.reduce((acc, user) => {
//     user.friends.includes(friendName) ? acc.push(user.name) : null;
//     return acc
//      } ,[])
// return namesArr
// }

// //console.log(getUsersWithFriend(users, 'Marilyn Mcintosh')); 
// [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Sharron Pace')); 
// [ 'Elma Head', 'Sheree Anthony' ]

//____________________________________________________________

    