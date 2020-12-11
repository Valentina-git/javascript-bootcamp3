// console.log(_.isEqual(5, 5)); // true
// console.log(_.isEqual(5, 10)); // false

const refs = {
    form: document.querySelector('.js-feedback-form'),
    input: document.getElementById('exampleNameInput'),
    textarea: document.getElementById('exampleMessage'),
}


const postOnInput = (event) => {
    event.preventDefault()
    localStorage.clear()
    event.currentTarget.reset()
    // console.dir(event.target.name.value);
    // console.dir(event.target.message.value);
}
const getOnInput = (event) => {
    let textName = event.target.value;
    saveToLocal('nameOnInput', textName)
}

const getOnTextarea = (event) => {
    const textMsg = event.target.value;
    saveToLocal('nameOnMsg', textMsg)
}


window.addEventListener('DOMContentLoaded', () => {
    let localName = localStorage.getItem('nameOnInput')
    if (localName) {
        refs.input.value = JSON.parse(localName)
    }

    let localMsg = localStorage.getItem('nameOnMsg')
    if (localMsg) {
        refs.textarea.value = JSON.parse(localMsg)
    }
})

const saveToLocal = (key, text) => {
    if (text !== '') {
        localStorage.setItem(key, JSON.stringify(text))
    }
}

refs.textarea.addEventListener('input', _.debounce(getOnTextarea, 2000))
refs.input.addEventListener('input', _.debounce(getOnInput, 2000))
refs.form.addEventListener('submit', postOnInput)
