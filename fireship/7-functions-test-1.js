//parameter vs argument:
//parameters are the variable inputs you use in function definition 
//arguments are the actual values or expressions used while calling the function

function makeBread(qty) {
    const bread  = '🍞'.repeat(qty)

    //return value
    return bread
}

const loaves = makeBread(7)
console.log(loaves)