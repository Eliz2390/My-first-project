let count = 0;

function addElement() {
    count++
    let board = document.querySelector('.board')
    console.log(board)
    let newElement = document.createElement('div')
        // newElement.innerHTML = add element ${count}
        newElement.innerHTML = 'add ' + count
    board.append(newElement)
}

function showModal() {
    let modal = document.querySelector('.modal')
    modal.style.visibility = 'visible'
}

function closeModal() {
    let modal = document.querySelector('.modal')
    modal.style.visibility = 'hidden'

    let text = document.querySelector('#text')
    console.log(text.value)

    let newElement = document.createElement('div')
        // newElement.innerHTML = add element ${count}
        newElement.innerHTML = text.value
        newElement.style.fontSize = 50 + 'px'
        newElement.setAttribute('class','board-item')

    let board = document.querySelector('.board')
    board.append(newElement)
}