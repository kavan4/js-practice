//closure is in the simplest sense a function within a function where the inner function references a 
//variable that was declared in the scope of the outer function.
//
//special thing compared to other languages is that the variable in the outer function will be maintained
//in memory even after that function returns and has been popped off the call stack.
//so this means that the inner function always has access to the state of the outer function at the time it was
//created

function outer() {
    const fish = 'fish';
    let count = 0;

    function inner() {
        count ++;
        return `${count} ${fish}`
    }

    return inner
}

const fun = outer();
console.log(fun())
console.log(fun())
console.log(fun())
console.log(fun())

// console.log(outer())
// console.log(outer())
// console.log(outer())
// console.log(outer())

console.log(outer()())
console.log(outer()())
console.log(outer()())
console.log(outer()())
