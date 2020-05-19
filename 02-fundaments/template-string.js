let name = 'Deadpool';
let real = 'Wade Winston';

console.log(name + ' ' + real);

console.log(`${name} ${real}`);

let nameComplete = name + ' ' + real;
let nameTemplate = `${name} ${real}`

console.log(nameComplete === nameTemplate);

function getName() {
    return `${name} ${real}`
}

console.log(`El nombre de: ${ getName() }`);