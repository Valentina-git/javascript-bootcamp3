const refs = {
    containerDiv: document.querySelector('#root'),
    form: document.querySelector('.search'),
    btnSubmit: document.querySelector('.search__submit'),
    repoDiv: document.querySelector('.repo-list'),
}

const renderData = function (repos) {
    let markUp = '';
    repos.forEach(repo => {
        markUp += `
        <li>
        <h2>${repo.name}</h2>
        <a href="url">${repo.html_url}</a>
        <p>${repo.owner.login}</p>
        <img src=${repo.owner.avatar_url} alt=${repo.name}>
        </li> 
        `
    })
    refs.repoDiv.innerHTML = `<ul>${markUp}</ul>`;
}

const onFormSubmit = async function (event) {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;
    const URL = `https://api.github.com/users/${inputValue}/repos?type=all&per_page=5`
    try {
        if (inputValue.length >= 2) {
            let response = await fetch(URL)
            let responseData = await response.json()

            if (response.status === 200) {
                if (responseData.length) {
                    renderData(responseData);
                } else {console.log('you are lazy')}
            } else {console.log('oтвет сервера: ', response.status)}
        }     
    } catch (error) { console.log(error) }
    event.target.reset()
}

refs.form.addEventListener('submit', onFormSubmit);

