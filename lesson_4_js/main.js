let x = 0
let y = 0
let countBlock = 0

function createBlock() {
    if(countBlock == 0) {
        countBlock ++
    let station = document.querySelector('.station')
    let width = document.querySelector('#width').value
    let height = document.querySelector('#height').value
    let color = document.querySelector('#color').value

    let newElement = document.createElement('div')
    station.append(newElement)

    newElement.style.width = width + 'px'
    newElement.style.height= height + 'px'
    newElement.style.background = color

    console.log(width, height)

    newElement.setAttribute('class', 'block')
    newElement.style.left = x + 'px'
    newElement.style.top = y + 'px'
}
}

function moveLeft() {
    x -= 50
    if(x < 0) x = 0
    let block = document.querySelector('.block')
    block.style.left = x + 'px'
}

function moveRight() {
    x += 50
    if(x > 500-document.querySelector('.width').value) x = 500-document.querySelector('.width').value
    let block = document.querySelector('.block')
    block.style.left = x + 'px'
}

function moveUp() {
    y -= 50
    if(y < 0) y = 0
    let block = document.querySelector('.block')
    block.style.top = y + 'px'
}

function moveDown() {
    y += 50
    if(y > 0) y = 0
    let block = document.querySelector('.block')
    block.style.top = y + 'px'
}