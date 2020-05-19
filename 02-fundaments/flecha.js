// function sum(a, b) {
//     return a + b;
// }


// let sum = (a, b) => {
//     return a + b;
// }

let sum = (a, b) => a + b;

console.log(sum(10, 20));

let greeting = () => 'Hola Mundo!!!';

console.log(greeting());

let greeting2 = name => `Hola ${name}`;

console.log(greeting2('Gerardo'));

let deadpool = {
    name: 'Wade',
    surname: 'Winston',
    power: 'regeneration',
    getName() {
        return `${this.name} ${this.surname} - power: ${this.power}`;
    }
}

console.log(deadpool.getName());