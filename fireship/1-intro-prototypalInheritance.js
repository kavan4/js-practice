const Dog = {
    barks: false,
    tail: true,
    intelligent: "no",
    goodBoy: ['Yes', true],
    someRandomValue: "true"
}

const Pug = Object.create(Dog)

console.log(Pug.barks)
console.log(Pug.goodBoy[1])
console.log(Pug.intelligent)
