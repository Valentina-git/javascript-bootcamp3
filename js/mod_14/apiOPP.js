class GitHub {
    constructor() {
        this.containerDiv = document.querySelector('#root');
        this.form = document.querySelector('.search');
        this.btnSubmit = document.querySelector('.search__submit');
        this.repoDiv = document.querySelector('.repo-list');
        this.inputValue = '';
        this.URL = ``;
    }
    async onFormSubmit (event) {
        event.preventDefault();
        this.inputValue = event.target.elements.input.value;
        if (this.inputValue.length >= 2) { 
            this.URL = `https://api.github.com/users/${this.inputValue}/repos?type=all&per_page=5`
            let dataArr = await this.fetchData(this.URL)
            let ui = new UserInterface(dataArr, this.containerDiv, this.repoDiv)
            ui.renderData()
        }
        event.target.reset()
    }
    async fetchData(URL) {
        try {
            let response = await fetch(URL)
            let responseData = await response.json()

                if (response.status === 200) {
                    if (responseData.length) {
                        return responseData;
                    } else {console.log('you are lazy')}
                } else {console.log('oтвет сервера: ', response.status)}
        } catch (error) {console.log(error) }
    } 
    init() {
        this.form.addEventListener('submit', this.onFormSubmit.bind(this));
    }
}
let gitHub = new GitHub()
gitHub.init()

//отрисовывает
class UserInterface {
    constructor(repos, repoDiv, containerDiv = '') {
        this.repos = repos;
        this.repoDiv = repoDiv;
        this.containerDiv = containerDiv;
    }
    renderData () {
        let markUp = '';
        this.repos.forEach(repo => {
            markUp += `
            <li>
            <h2>${repo.name}</h2>
            <a href=${repo.html_url}>${repo.html_url}</a>
            <p>${repo.owner.login}</p>
            <img src=${repo.owner.avatar_url} alt=${repo.owner.login}>
            </li> 
            `
        })
        return this.repoDiv.innerHTML = `<ul>${markUp}</ul>`;
    }
    renderError(error) {
        let h1 = document.createElement('h1');
        h1.textContent = error;
        h1.style.color = 'red';
        this.containerDiv.prepend(h1);
    }
}

//==================== корректно работает (то что ниже) ==================

// class GitHub{
//     constructor() {
//         this.containerDiv = document.querySelector('#root');
//         this.form = document.querySelector('.search');
//         this.btnSubmit = document.querySelector('.search__submit');
//         this.repoDiv = document.querySelector('.repo-list');
//         this.inputValue = ''
//         this.URL = ''
//     }
//     async onFormSubmit(event) {
//         event.preventDefault()
//         this.inputValue = event.target.elements.input.value  
//         if (this.inputValue.length >= 2) {
//             this.URL = `https://api.github.com/users/${this.inputValue}/repos?type=all&per_page=5`
//             //console.log(this.fetchData(this.URL));
//             let dataArray = await this.fetchData(this.URL);
//             let ui = new UserInterface(dataArray, this.repoDiv, this.containerDiv)
//             ui.renderData()
//            // ui.renderError('test')
//         }    
        
//      event.target.reset()
//      }
//     async fetchData(URL) {
//         try {
//             let response = await fetch(URL)
//             let data = await response.json()
//             if (response.status === 200) {
//                if (data.length) { 
//                    return data;
//                }
//                else {
//                    console.log('you are lazy!');
//                }
//            } else {
//                console.log('oтвет сервера: ', response.status);
//            }
            
//         } catch (error) {
//            console.log(error);
//         }
//     }
//     init() {
//         this.form.addEventListener('submit', this.onFormSubmit.bind(this))
//     }
// }

// let git = new GitHub()
// git.init()

// // отpисовывает 
// class UserInterface{
//    constructor(repos, repoDiv, containerDiv = '') {
//        this.repos = repos;
//        this.repoDiv = repoDiv;
//        this.containerDiv = containerDiv;
//     }
//     renderData() {
  
//     let html = '';
//     this.repos.forEach(repo => {
//         html += `
//         <li>
//             <h2>${repo.name}</h2>
//             <a href=${repo.html_url}>${repo.html_url}</a>
//             <p>${repo.owner.login}</p>
//             <img src="${repo.owner.avatar_url}" alt="${repo.owner.login}">
//         </li>
//         `   
//     });
//     return this.repoDiv.innerHTML = `<ul>${html}</ul>`
//     }
//     renderError(error) {
//         let h1 = document.createElement('h1')
//         h1.textContent = error
//         h1.style.color = "red"
//         this.containerDiv.prepend(h1)

//     }
// }

 