// let getName = async() => {
//     throw new Error('No name');
//     return 'Gerardo';
// }

let getName = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gerardo');
        }, 3000);
    });
}

let greeting = async() => {
    let name = await getName();

    return `Hola ${name}`
}

getName().then(name => {
    console.log(name);
}).catch(err => {
    console.log('Error de async', err);
})


greeting().then(message => {
    console.log(message);
}).catch(err => {
    console.log('Error de async', err);
})