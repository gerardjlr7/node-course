setTimeout(() => {
    console.log('Hola Mundo');
}, 3000)

let getUserById = (id, callback) => {

    let user = {
        name: 'Gerardo',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la bd`)
    } else {
        callback(null, user);
    }
}

getUserById(1, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', user);
})