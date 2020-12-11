// const _ = require('lodash'); //npm
    
// fetch('https://jsonplaceholder.typicode.com/albums')
//   .then(response => response.json())
//     .then(json => {
//         let chunk = _.chunk(json,10)
//         console.log(json)
//     })
  
//================================

const refs = {
    generate: document.querySelector('button[data-generate="generate"]'),
    add: document.querySelector('button[data-add="add"]'),
    show: document.querySelector('button[data-show="show"]'),
    div: document.querySelector('#root'),
    ul: document.querySelector('.jokes'),
}

console.log(refs.ul)


function fetchJokes() {
    return fetch('http://api.icndb.com/jokes/random')
    .then(response => { return response.json() })
    .then(json => json.value.joke)
    .then(joke => {
        displayRandomJoke(joke)
        return joke
    })
}

let arrJokes = [];

refs.add.addEventListener('click', (event) => {
    fetchJokes().then(joke => {
        if (uniqJoke(arrJokes)){
            arrJokes.push(joke);
        }
        let uniq = uniqJoke(arrJokes)
        localStorage.setItem("fav", JSON.stringify(arrJokes))
    })
})

function displayRandomJoke(joke) {
    refs.div.textContent = joke;
}

function uniqJoke(arr) {
    let result = [];
    for (let element of arr) {
        if (!result.includes(element))
            result.push(element)
    }
    return result
}

function displayFavorites() {
    let html = ''
    if (localStorage.getItem("fav")) {
        let jokesArr = JSON.parse(localStorage.getItem("fav"))
        if (jokesArr.length) {
            jokesArr.forEach((joke) =>{
                html += `<li>${joke}</li>`;
           })
        }
    }
    return refs.ul.innerHTML = html 
}

refs.generate.addEventListener('click', fetchJokes)
refs.show.addEventListener('click', displayFavorites)

// let uniq = _.uniq([2, 1, 2, 'sara', 'sara', 'vova', 'vova']);
// console.log(uniq)
//===============================

// Selectors
let div = document.querySelector('#root');
let ul = document.querySelector('.jokes');
let randomBtn = document.querySelector('.random');
let addBtn = document.querySelector('.add');
let showBtn = document.querySelector('.show');
// Selectors

function fetchJokes() {
	return fetch('http://api.icndb.com/jokes/random')
		.then((res) => res.json())
		.then((data) => data.value.joke);
}

function addToFavorites(joke) {
	return localStorage.setItem('fav', JSON.stringify(joke));
}

function displayRandom(joke) {
	div.textContent = joke;
}

function displayFavorites() {
	if (localStorage.getItem('fav')) {
		let favorites = JSON.parse(localStorage.getItem('fav'));

		let jokeLi = favorites.map(function (joke) {
			return createLi(joke);
		});
		return ul.append(...jokeLi);
	}
}

function createLi(joke) {
	let li = document.createElement('li');
	li.textContent = joke;
	return li;
}

function uniqArr(arr) {
	let result = [];
	for (let arrItem of arr) {
		if (!result.includes(arrItem)) {
			result.push(arrItem);
		}
	}
	return result;
}

// Listeners
randomBtn.addEventListener('click', function () {
	let joke = fetchJokes();
	joke.then((joke) => displayRandom(joke));
});

let jokesArr = [];
addBtn.addEventListener('click', function () {
	let joke = div.textContent;

	if (!localStorage.getItem('fav')) {
		addToFavorites(joke);
	}

	jokesArr.push(joke);
	addToFavorites(uniqArr(jokesArr));
});

showBtn.addEventListener('click', displayFavorites);
// Listeners

//====================================================

// const refs = {
//     generate: document.querySelector('button[data-generate="generate"]'),
//     add: document.querySelector('button[data-add="add"]'),
//     show: document.querySelector('button[data-show="show"]'),
//     div: document.getElementById('root')
// }

// let arrJokes = [];
// function fetchJokes() {
//     fetch('http://api.icndb.com/jokes/random')
//         .then(responce => { return responce.json() })
//         .then(json => {
//              displayRandomJoke(json.value.joke);
//         })
// }


// function displayRandomJoke(joke) {
//     refs.div.textContent = joke;
// }

// function addJokes() {
//     // let arrJokes = []
//     // arrJokes.push(displayRandomJoke(json.value.joke))
//     let joke = refs.div.textContent
//     localStorage.setItem('favorites', JSON.stringify(joke))
// }

// function showJokes () {
//     console.log(refs.show);
// }

// refs.generate.addEventListener('click', fetchJokes);
// refs.add.addEventListener('click', addJokes);
// refs.show.addEventListener('click', showJokes);


// Save fo local storage
// let arrJokes = ['SDF', 'vcxv', 'CXVcv'];
// localStorage.setItem('favorites', JSON.stringify(arrJokes))


// get and display from local storage
// JSON.parse(localStorage.getItem('favorites'));

//===================================

