let count = 0;

function showModal() {
    let modal = document.querySelector('#second')
    modal.style.visibility = 'visible'
}

function closeModal() {
    let modal = document.querySelector('#second')
    modal.style.visibility = 'hidden'
    let modal2 = document.querySelector('#first')
    modal2.style.visibility = 'visible'
    
    let text = document.querySelector('#first')
    
    modal2.innerHTML = `
    <h1>Вітаю!</h1> 
    <h6>${text.value}</h6>
`
}

function OkModal() {
    
}