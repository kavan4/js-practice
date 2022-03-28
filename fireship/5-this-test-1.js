//In Js, anything that is not a primitive value is an object. 
//"this" is just a keyword that refers to the current object that the code is operating in

const obj = {
    name: 'Clown',
    face: '🤡',
    age:'99',
    hello: function() {
        console.log(`hello ${this.name}`)
    },
    howOld: () => {
        console.log(`${this.name} years old`)
    }
}

obj.hello()
obj.howOld()