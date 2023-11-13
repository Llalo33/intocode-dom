const divAdd = () => {
    const div = document.createElement('div')
    div.textContent = 'Работа с DOM'
    document.body.prepend(div)
}

const mainAdd = () => {
    const main = document.getElementById('main')
    const a = document.createElement('a')
    a.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model'
    a.textContent = 'DOM'
    main.append(a)
}

const colorAdd = (color) => {
    document.body.style.backgroundColor = color
}

const listAdd = (text) => {
    const list = document.getElementById('list')
    const li = document.createElement('li')
    li.textContent = text
    list.append(li)
}

const copyrightDelete = () => {
    const copyright = document.getElementById('copyright')
    copyright.remove()
}
