//arrow functions practice

//basic functions
function sum(a, b) {
    return a+b
}

function isPositive(number) {
    return number>=0
}

function randomNumber() {
    return Math.random
}

document.addEventListener('click', function() {
    console.log('Click')
})

//arrow versions
let sum2 = (a,b) => a+b

let isPositive2 = number => number>=0

let randomNumber = () => Math.random

document.addEventListener('Click', () => console.log('Click'))

//arrow functions redefine the 'this' keyword