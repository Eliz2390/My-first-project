const button = document.querySelector('.btn');
const body = document.querySelector('body');

function changeBgColor() {
    let bgColorBtn = prompt('enter background color btn');
    let bgColorBody = prompt('enter background color body');



    return (
        button.style.backgroundColor = bgColorBtn,
        body.style.backgroundColor = bgColorBody
    )
}

button.addEventListener('click', changeBgColor);