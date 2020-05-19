let deadpool = {
    name: 'Wade',
    surname: 'Winston',
    power: 'regeneration',
    getName: function() {
        return `${this.name} ${this.surname} - power: ${this.power}`;
    }
}

console.log(deadpool.getName());

let { name: firstName, surname, power } = deadpool;

console.log(firstName, surname, power);