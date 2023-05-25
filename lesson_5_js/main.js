let count = 0

let mas = []
function countClick() {
    count++
}

function start() {
    console.log
    count = 0
    setTimeout(stop, 2000)
}

function stop() {
    console.log(count)
    addToTop()
    mas[mas.length] = count
    console.log(mas)
}

function save() { 
    localStorage.setItem('mas' ,mas)
}

function load() {
    let loadMas = localStorage.getItem('mas')
    
}

function addToTop() {
    let date = new Date().toLocaleString()
    let top = document.querySelector('.top-score') 
    top.insertAdjacentHTML('beforeend', `
    <li>${date}     ${count}</li>`)
}



