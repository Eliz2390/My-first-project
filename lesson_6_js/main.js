const PLUS = 1
const NONE = 0

let a = 0, b = 0
let diya = NONE

let res = document.querySelector('.res')

function bnt1() {
    if (diya == NONE) {
        a *= 10
        a++
    
        res.innerText  +=1   
    } else {
        b *= 10
        b++
        res.innerText  +=1   
    }
}

function plus() {
    diya = PLUS
    res.innerText +=" + "
}

function equal() {
    if (diya == PLUS) {
        res.innerText = a + b 

    }else if (diya == NONE) {
        res.innerText = 'error'
    }
    
    diya = NONE
    a = 0
    b = 0
  }

function multiplication() {
    diya = MULTIPLICATION
    res.innerText *= " * "
}


function bnt2() {
    if (diya == NONE) {
        a *= 10
        a += 2
    
        res.innerText  +=2    
    } else {
        b *= 10
        b += 2
        res.innerText  +=2    
    }
}

function bnt3() {
    if (diya == NONE) {
        a *= 10
        a += 3
    
        res.innerText  +=3    
    } else {
        b *= 10
        b += 3
        res.innerText  +=3    
    }
}

function bnt4() {
    if (diya == NONE) {
        a *= 10
        a += 4
    
        res.innerText  +=4    
    } else {
        b *= 10
        b += 4
        res.innerText  +=4    
    }
}

function bnt5() {
    if (diya == NONE) {
        a *= 10
        a += 5
    
        res.innerText  +=5   
    } else {
        b *= 10
        b += 5
        res.innerText  +=5    
    }
}

function bnt6() {
    if (diya == NONE) {
        a *= 10
        a += 6
    
        res.innerText  +=6    
    } else {
        b *= 10
        b += 6
        res.innerText  +=6    
    }
}

function bnt7() {
    if (diya == NONE) {
        a *= 10
        a += 7
    
        res.innerText  +=7    
    } else {
        b *= 10
        b += 7
        res.innerText  +=7    
    }
}

function bnt8() {
    if (diya == NONE) {
        a *= 10
        a += 8
    
        res.innerText  +=8    
    } else {
        b *= 10
        b += 8
        res.innerText  +=8    
    }
}

function bnt9() {
    if (diya == NONE) {
        a *= 10
        a += 9
    
        res.innerText  +=9    
    } else {
        b *= 10
        b += 9
        res.innerText  +=9    
    }
}

function bnt0() {
    if (diya == NONE) {
        a *= 10
        a += 0
    
        res.innerText  +=0   
    } else {
        b *= 10
        b += 0
        res.innerText  +=0    
    }
}
