//Доделать *запушить в массив и ОПП

let root = document.querySelector('#root')
let btn = document.querySelector('button');

function fetchJokes(){
  fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(json => {
        setToLocalStorage(json.value.joke)
        getFromLocalStorage()
    })
    .catch(error => console.log(error));
}

function setToLocalStorage(joke){
    localStorage.setItem('joke', JSON.stringify(joke))
}

function getFromLocalStorage(){
    if(localStorage.getItem('joke')) {
        root.innerHTML = localStorage.getItem('joke')
    }
}

btn.addEventListener('click', fetchJokes)