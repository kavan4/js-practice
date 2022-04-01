//function can be called in different ways
//() is not the only way to call functions
//you can use the call method as well which plays well with "this"

const clown = {
    face: '🤡'
}

const ghost = {
    face: "👻"
}

function hello() {
    return this.face
}

// const result = hello()
// console.log(result) //will return undefined 

// const result = hello.call(ghost)
// console.log(result) //will return ghostface

const result = hello.call(clown)
console.log(result) //will return clownface