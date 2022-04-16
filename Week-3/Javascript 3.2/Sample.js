const person = {
    firstname : 'Madhavi',
    lastname : 'Jyothi',
    getName()
    {
        return `${this.firstName} ${this.lastName}`
    },
    greeting(greeting)
    {
        return `${greeting} , my name is ${this.firstname} ${this.lastname}`
    }
}

const newe = {
    firstname: 'kolagatla',
    lastname:'done'
}
console.log(person.greeting.bind(newe, 'Hi')());
